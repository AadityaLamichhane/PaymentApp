import db from "@repo/db/client";
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';
export const authOption = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        phone: {
          label: "Phone number", type: 'text', placeholder: "Enter the number", required: true
        },
        password: {
          label: "Enter password", type: "password", placeholder: "Password", required: true
        }
      },
      async authorize(credentials: any) {
        const hashedpassword = await bcrypt.hash(credentials.password, 10);
        const existingUser = await db.user.findFirst({
          where: {
            number: credentials.phone
          }
        });
          if (existingUser) {
          const passwordvalidation = await bcrypt.compare(credentials.password, existingUser.password);
          if (passwordvalidation){
            return {
              id: existingUser.id.toString(),
              name: existingUser.name,
              password: existingUser.password,
              number: existingUser.number
            };
          }else{
            
            return null;
          }

        }
        try {
         
          const user = await db.user.create({
            data: {
              number: credentials.phone,
              password: hashedpassword
            }
          });
          return {
            id: user.id.toString(),
            name: user.name,
            number: user.number
          };

        } catch (err) {
          console.error(err);
        }
        return null;
      },
    })
  ],
  secret: process.env.JWT_SECRET || "secret",
  callbacks: {
    async session({ token, session }: any) {
      session.user.id = token.sub;
      return session;
    }
  }
};