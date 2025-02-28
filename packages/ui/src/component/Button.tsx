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
                className=" font-semibold bg-neutral-950 text-white p-3 w-md border-none rounded-md hover:bg-neutral-800" 
                onClick={onClick}>
                {children} 
            </button>
        </>
    );
}