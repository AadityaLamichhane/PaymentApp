import { Center } from "../../../../../packages/ui/src/component/Center";
import { ButtonComponent } from "../../../components/ButtonComponent";
export default function DashboardPage() {
    return (
        <>
        <Center>
            {/* Centered container for the dashboard */}
            <div className="relative flex flex-col w-full border-solid    ">
                <div className="   rounded-lg   text-wrap flex flex-col justify-center items-center ">
                    <h1 className="  mb-4  font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl  dark:text-white  text-wrap text-center md:text-nowrap">
                        Make the Payment <span className="text-blue-600 dark:text-blue-500">Fast and Effective</span> PaisaSewa.
                    </h1>
                    <p className="w-[400px] font-normal  lg:w-[600px]  text-gray-500    sm:text-sm md:text-2xl text-balance dark:text-gray-400 text-center items-center md:text-wrap   ">
                        Here at PaisaSewa, we focus on seamless writing of code and components to make meaningful changes to payments.
                    </p>
                </div>
                <div className="relative mt-[80px] flex w-full  justify-center group ">
                    <div className="flex  relative  rounded-full ">
                        <div className="flex gap-3   group">
                            <div>
                                <div className="  absolute top-[25%] left-[65px] w-10 bg-h-10 rounded-full z-0 opacity-100 group-hover:-translate-y-12 bg-blue-600 ">

                                </div>
                                <div className="z-10 ">
                                <ButtonComponent content="Load Paisa"></ButtonComponent>
                                </div>
                            </div>
                            <div > 
                                <ButtonComponent content="Transfer Paisa"></ButtonComponent>
                            </div>
                        </div>
                    </div>
                </div>
              
            </div>
</Center>
       
        </>
    );
}
