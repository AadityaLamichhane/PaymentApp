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
      className="p-6 rounded-xl border-solid max-w-[450px] w-[400px] bg-white shadow-lg"
    >
      <Center>
      <h1 className="text-xl border-b pb-2 bg-white bg-opacity-75 p-2 rounded-t-xl">
        {title}
      </h1>
      </Center>
      <div className="bg-white bg-opacity-75 p-4 rounded-b-xl">
      {children}
      </div>
    </div>
  );
}