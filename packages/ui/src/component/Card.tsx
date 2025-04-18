import React from "react";
import { Center } from "./Center";

export function Card({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}): React.JSX.Element {
  return (
    <div
      className={`p-6 rounded-xl border-solid max-w-2/3 w-96  bg-white shadow-lg `}>
      <h1 className="text-xl border-b pb-2 bg-white bg-opacity-75 p-2 rounded-t-xl">
        {title}
      </h1>
      <div className={`bg-white bg-opacity-75 rounded-b-xl max-h-80 overflow-y-scroll scrollbar-hide`}>
        {children}
      </div>
    </div>
  );
}