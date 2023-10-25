import React from "react";
import { InputCustomizado } from "./InputStyle";

export const Input = ({name, placeholder, type}) => {
    
    return (
        <InputCustomizado
            name={name}
            placeholder={placeholder}
            type={type}
        />
    );
}

export default Input;