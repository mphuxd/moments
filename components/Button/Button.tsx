import React from "react";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  label: string;
}
function Button({ label, role, type, ...props }: ButtonProps) {
  return (
    <button
      role={role}
      type={type ? "submit" : "button"}
      className="rounded-full border-2 border-black px-4 py-1 text-sm  transition-all duration-150 hover:bg-black hover:text-white"
      {...props}
    >
      {label}
    </button>
  );
}

export default Button;
