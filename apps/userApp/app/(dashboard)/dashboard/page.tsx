import { Center } from "../../../../../packages/ui/src/component/Center";

export default function DashboardPage() {
    return (
        <>
            {/* Centered container for the dashboard */}
            <Center>
                <div className="w-lg p-6 rounded-lg  ">
                    <h1 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
                        Make the Payment <span className="text-blue-600 dark:text-blue-500">Fast and Effective</span> Esewa.
                    </h1>
                    <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
                        Here at Esewa, we focus on seamless writing of code and components to make meaningful changes to payments.
                    </p>
                </div>
            </Center>

            {/* Additional content */}
            <Center>
                <div className="mt-6 text-center text-gray-700 dark:text-gray-300">
                    Dashboard Application
                    <br />
                    <span className="text-sm italic">Manage your payments effectively.</span>
                </div>
            </Center>
        </>
    );
}
