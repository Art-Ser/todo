import React from 'react'
import { ITodoList,ITodoItem } from '../../interfaces/idex'
import { ListItem } from './item'



export const List = ({ todoList, handleCheck, deleteItem}:ITodoList) => {
  return <ul> 
    {todoList.map((elem: ITodoItem) => 
      <ListItem key={elem.id} elem={elem} handleCheck={handleCheck} deleteItem={deleteItem}/>
    )}
  </ul>
}
