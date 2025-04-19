"use client";

import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean; // Add the disabled prop
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 rounded bg-gray-800 text-white ${
      disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-700"
      }`}
    >
      {children}
    </button>
  );
};
