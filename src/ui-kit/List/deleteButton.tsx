import React from 'react'

interface IDelateBUtton{
    onClick:(id:number)=>void;
    id:number;
    
}

export const DeleteButton = ({id,onClick}:IDelateBUtton) => {
  return (
    <button onClick={()=>onClick(id)}>delete</button>
  )
}
