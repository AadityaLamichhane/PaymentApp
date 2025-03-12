import { AppbarClient } from "../../components/Appbarclient";

// Logic to check if the user is authenticated or not 
export default function({children}:{children:React.ReactNode}){
    return <>
    <div className="flex flex-col ">
        <AppbarClient></AppbarClient>
        
        <div className="flex w-full ">
            <div className="mx-2 p-1 border-r ">
            <SideBarComponent></SideBarComponent>
            </div>
            
            <div className=" p-1"> {children} </div>
        </div>
        
    </div>  
    <div></div> 
    </>
}
function SideBarComponent()
{
    return( <>
    {/*General buttom ( href , icons  , active => page    )*/}
    <ButtonComponennts/> 
     </>)
}
interface ButtomComponents {
    href :String ,
    icons : SVG
}
function ButtonComponennts({href , icons , active , page })
{
    return( <>
    This is the button components
    </>)
}