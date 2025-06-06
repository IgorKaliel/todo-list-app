import React from "react";

type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement>;

const Checkbox: React.FC<CheckboxProps> = ({ className = "", ...props }) => {
    return (
        <input
            type="checkbox"
            className={`w-4 h-4 accent-blue-500 ${className}`}
            {...props}
        />
    );
};

export default Checkbox;
