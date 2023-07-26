import React from "react";
import { ButtonCustomizado } from './ButtonStyle';


export const Button = ({
    type, text, onClick, disabled
}) => {
    return (
        <ButtonCustomizado
            type={type}
            text={text}
            onClick={onClick}
            disabled={disabled}>
           {text}
        </ButtonCustomizado>
    );
}

export default Button;