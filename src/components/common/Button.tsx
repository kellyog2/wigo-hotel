import React from "react";

type ButtonProps = {
  btnText: string;
  btnStyle?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

const Button = ({
  btnText,
  btnStyle = "",
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`px-6 py-3 rounded-xl font-medium transition duration-300 ${btnStyle} ${
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      }`}
    >
      {btnText}
    </button>
  );
};

export default Button;