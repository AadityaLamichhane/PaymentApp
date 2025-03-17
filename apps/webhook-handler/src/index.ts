import express from "express"
import z from "zod"
import db from "@repo/db/client"

const app = express();
app.use(express.json());

app.post("/bankwebhook", async (req, res) => {
    const paymentobject = z.object({
        token: z.string(),
        userId: z.number(),
        amount: z.number()
    });
    type PaymentType = z.infer<typeof paymentobject>;

    const paymentinformation: PaymentType = {
        token: req.body.token,
        userId: req.body.user_id,
        amount: req.body.amount
    };
    try {
        const validInput = paymentobject.parse(paymentinformation);
        await db.$transaction([
            db.balance.update({
                where: {
                    userId: Number(paymentinformation.userId)
                },
                data: {
                    amount: {
                        increment: Number(paymentinformation.amount)
                    }
                }
            }),
            db.onRampTransaction.updateMany({
                where: {
                    token: paymentinformation.token
                },
                data: {
                    status: "Success"
                }
            })
        ]);
        res.json({ msg: "Captured" });
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
});

app.listen(3003, () => {
    console.log("Server is running on port 3003");
});