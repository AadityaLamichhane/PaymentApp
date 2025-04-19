"use client"
import { useState } from "react";
import { InputComponent } from "@repo/ui/input";
import { Card } from "@repo/ui/Card";
import { Button } from "@repo/ui/button";
import { P2ptransactions } from "../app/lib/p2ptransaction";
import { Center } from "../../../packages/ui/src/component/Center";

export const Pay2Persion = () => {
    const [amount, setAmount] = useState(0);
    const [number, setNumber] = useState("");
    const [feedback, setFeedback] = useState(""); // State for feedback messages
    const [isLoading, setIsLoading] = useState(false); // State for loading indicator

    return (
        <>
            <Card title="Pay to Person">
                <InputComponent
                    title={"Amount"}
                    label={"Enter Amount"}
                    onChange={(value) => setAmount(Number(value))}
                />
                <InputComponent
                    title={"Number"}
                    label={"Enter number of User"}
                    onChange={(getnumber) => setNumber(getnumber)}
                />
                <Center>
                    <div className="p-2 mt-2">
                        <Button
                            onClick={async () => {
                                setIsLoading(true); // Show loading state
                                setFeedback(""); // Clear previous feedback
                                try {
                                    const result = await P2ptransactions(number, amount);
                                    if (!result ) {
                                        throw new Error("Transaction failed");
                                    }
                                    setFeedback("Transaction successful!"); // Success message
                                } catch (error) {
                                    setFeedback(`Error: ${error || "Transaction failed"}`); // Error message
                                } finally {
                                    setIsLoading(false); // Hide loading state
                                }
                            }}
                            disabled={isLoading} // Now works as expected
                        >
                            {isLoading ? "Processing..." : "Transfer"}
                        </Button>
                    </div>
                </Center>
                {feedback && (
                    <div className={`mt-4 ${feedback.startsWith("Error") ? "text-red-500" : "text-green-500"}`}>
                        {feedback}
                    </div>
                )}
            </Card>
        </>
    );
};