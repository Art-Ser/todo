import { ReactNode } from "react"
import { IInputProps } from "../../interfaces/idex";

export const Input = ({
    type, 
    label,
    placeholder,
    value,
    onChange,
}: IInputProps) => {
    return ( 
        <label>
        {label}
         <input 
            onChange={(evt)=>onChange(evt.target.value)}  
            placeholder={placeholder}
            type={type}
            value={value}
        />
        </label>
    );
};
