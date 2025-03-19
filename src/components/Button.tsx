import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const stylesDisabled: React.CSSProperties = {
    cursor: "not-allowed",
    backgroundColor: "rgb(140 140 140 / .2)",
    border: "none",
};

const Button: React.FC<ButtonProps> = ({ children, disabled, style, ...props }) => {
    return (
        <button 
            disabled={disabled}
            {...props}
            style={{
                ...(disabled ? stylesDisabled : {}),
                ...style,
            }}
        >
            {children}
        </button>
    );
};

export default Button;