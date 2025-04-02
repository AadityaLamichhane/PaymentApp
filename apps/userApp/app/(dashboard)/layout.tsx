import { Center } from "../../../../packages/ui/src/component/Center";
import { AppbarClient } from "../../components/Appbarclient";
import { SideBarComponent } from "../../components/SideBarComponent";
import  {SideBarContainer } from "../../components/SideBarContainer"
export default function Layout({
  children
}: {
  children: React.ReactNode;
}){
  return (
    <div className="flex-col ">
        <AppbarClient/>
        <div className="flex w-screen">
            <SideBarContainer/>
            <div className="w-full">
              <Center>
                  {children}                            
              </Center>
                          
            </div>
              
            
             
           
             
            
        </div>
    </div>
  );
}
