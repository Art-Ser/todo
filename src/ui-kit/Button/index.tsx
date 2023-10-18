import { ReactNode } from "react"

interface IButtonProps{
    children:string;
    onClick:()=>void;

}
export const Button = ({children,onClick}:IButtonProps) => {
  return <button onClick={onClick}> {children} </button> }
