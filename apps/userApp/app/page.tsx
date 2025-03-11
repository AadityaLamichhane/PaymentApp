import { getServerSession } from "next-auth"
import { authOption } from "./lib/auth";

import { redirect } from "next/navigation";
export default  async function Page() {
    const session = await getServerSession(authOption);
    console.log(`Session in this section is ${JSON.stringify(session.data.user.id)}`);
const authenticated = (session?.data.user.id) ? true : false;

if(authenticated)
{
  redirect("/dashboard");
}
else{
  redirect("/api/auth/signin");
}

  
}
