import React from "react";
import { InputCustomizado } from "./InputStyle";

export const Input = ({name, placeholder, type, required, value, onChange}) => {
    
    return (
        <InputCustomizado
            type={type}
            name={name}
            placeholder={placeholder}
            required={required}
            value={value}
            onChange={onChange}
        />
    );
}

export default Input;