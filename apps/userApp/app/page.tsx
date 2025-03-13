import { getServerSession } from "next-auth"
import { authOption } from "./lib/auth";

import { redirect } from "next/navigation";
export default  async function Page() {
    const session = await getServerSession(authOption);
  
    type  Authentication = boolean | null;
    const authentication :Authentication= (session?.user) ? true : false;
     
    console.log(authentication);
    if(authentication){
      return redirect("/dashboard");
    }
    else{

      console.log("User is not signed in");

    }
}
