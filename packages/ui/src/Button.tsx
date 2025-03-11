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
                className="bg-neutral-950 text-white p-2 border-none rounded-md hover:bg-neutral-800" 
                onClick={onClick}>
                {children} 
            </button>
        </>
    );
}