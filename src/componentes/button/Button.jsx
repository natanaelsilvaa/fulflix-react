import React from "react";
import { ButtonCustomizado } from './ButtonStyle';


export const Button = ({
    type, text,  disabled
}) => {
    return (
        <ButtonCustomizado
            type={type}
            text={text}
           
            disabled={disabled}>
           {text}
        </ButtonCustomizado>
    );
}

export default Button;