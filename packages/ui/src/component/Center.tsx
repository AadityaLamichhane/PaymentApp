export function  Center({children}:{children:React.ReactNode })
{
    return <>
    <div className="flex-col  h-full justify-center items-center ">
        <div className="flex h-full items-center justify-center   ">
            <div>
            {children}
            </div>
            
        </div>
    </div>

    </>
} 