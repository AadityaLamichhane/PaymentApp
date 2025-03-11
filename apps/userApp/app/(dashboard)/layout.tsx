// Logic to check if the user is authenticated or not 
import { AppbarClient } from "@repo/ui/appbarclient"

// if not then navigate to the signin
export default async function ({children}:{children:React.ReactNode})
{

    return <>
    <div className="flex-col h-screen w-screen p-2">
        <AppbarClient/>
        
        <div>
            {children}
        </div>
    </div>
    </>
}