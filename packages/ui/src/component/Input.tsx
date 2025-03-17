export function InputComponent({title , label , onChange }:{
    title:string, 
    label :string, 
    onChange:(value:string)=>void
}){
    return (
        <div className="pt-3 ">
            <label className="block mb-2 text-sm font-medium text-gray-900">{title}</label>
            <input onChange={(e) => {
                onChange(e.target.value)
                // checking 
            }} type="text" id="first_name" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={label} />
        </div>
        )
}
    