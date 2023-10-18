import { type } from 'os'
import React from 'react'
import { ITodoItem } from '../../interfaces/idex';
import { DeleteButton } from './deleteButton';

interface IItemProps{
  handleCheck:(id:number)=>void;
    elem:ITodoItem;
    deleteItem:(id:number)=>void;
}

export const ListItem = ({elem, handleCheck, deleteItem}:IItemProps) => {
  return (
    <li key={elem.id}>
        <input type="checkbox" checked={elem.done} onChange={() => handleCheck(elem.id)} />
        {elem.text} 
        <DeleteButton onClick={deleteItem} id={elem.id}/>
    </li>
  )
}
