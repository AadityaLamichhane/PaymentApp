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
    <div className="relative flex flex-col h-full">
        <AppbarClient/>
        <div className="flex w-full flex-1 ">
            <SideBarContainer/>
            <div className="flex flex-col justify-center items-center w-full h-screen ">
              <div className="flex justify-center items-center">
             {children}
              </div>
            </div>
        </div>
    </div>
  );
}
             
            
