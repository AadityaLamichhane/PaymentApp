import db from "@repo/db/client";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                phone: { label: "Phone Number", type: "text", placeholder: "Enter the Phone number", required: true },
                password: { label: "Password", type: "password", placeholder: "Enter the password", required: true }
            },
            async authorize(credentials: any) {
                if (!credentials.phone) {
                    return null;
                }
                try{
                    const existingUser = await db.user.findFirst({
                        where: {
                            number: credentials.phone
                        }
                    });
                    if (existingUser) {
                        const passwordValidation = await bcrypt.compare(credentials.password, existingUser.password);
                        if (passwordValidation) {
                            return {
                                id: existingUser.id.toString(),
                                name: existingUser.email,
                                email: existingUser.number
                            };
                        }
                    }
                }
                catch(error)
                {
                    console.log("Error was occured int he code ");
                    return null;
                }
                
               return null;
            }
        })
    ]
};