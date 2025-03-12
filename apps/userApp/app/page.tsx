import { getServerSession } from "next-auth"
import { authOption } from "./lib/auth";

import { redirect } from "next/navigation";
export default  async function Page() {
    const session = await getServerSession(authOption);

const authenticated = (session.user.id) ? true : false;

if(authenticated)
{
  return redirect("/dashboard");
}
else{
 return  redirect("/api/auth/signin");
}
   

  
}
// Success