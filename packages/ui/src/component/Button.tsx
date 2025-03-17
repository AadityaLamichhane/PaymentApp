"use client"
interface ButtonInterface {
    children: React.ReactNode
    onClick: () => void
}
export const Button = ({children, onClick}: ButtonInterface) => {
    return (
        <>
            <button 
                type="button" 
                className=" font-semibold bg-blue-600 text-white p-3 w-full  border-none rounded-md hover:bg-blue-800" 
                onClick={onClick}>
                {children} 
            </button>
        </>
    );
}