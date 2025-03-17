export function  Center({children}:{children:React.ReactNode })
{
    return <>
    <div className="flex-col  justify-center items-center">
        <div className=" flex justify-center items-center ">
            {children}
        </div>
    </div>

    </>
} 