import React from "react";
import { Center } from "./Center";
export function Card({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}):React.JSX.Element {
  return (
    <div
      className="border p-6 bg-white rounded-xl bg-[#ededed] border-solid"
    >
      
        <Center>
          <h1 className="text-xl border-b pb-2">
            {title}
          </h1>
          </Center>
                
      
      {/* To change  */}
      <div>{children}</div>
    </div>
  );
}
