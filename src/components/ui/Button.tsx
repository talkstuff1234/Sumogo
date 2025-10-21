import React, { ReactNode } from "react";

type ButtonProps = {
  children: string;
  className?: ReactNode;
  varient?: string;
};

function Button({ children, className, varient }: ButtonProps) {
  const neutral: string = "bg-transparent text-black bg-white outline outline-1";
  const gray: string = "bg-[#E9E9E9] text-white";
  const lightGreen: string =
    "bg-[#E6F5EC] text-[#049B3D] border border-[#0066271A]";
  const green: string = "bg-[#049B3D] text-white";

  let varientColor: string = "";

  if (varient == "gray") {
    varientColor = `${gray}`;
  } else if (varient == "lightGreen") {
    varientColor = `${lightGreen}`;
  } else if (varient == "green") {
    varientColor = `${green}`;
  } else {
    varientColor = `${neutral}`;
  }

  return (
    <button className={`py-2 px-4 rounded-full ${varientColor} ${className}`}>
      {children}
    </button>
  );
}

export default Button;
