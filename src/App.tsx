import { useState } from "react";
import { Button, Input,List } from "./ui-kit";
import { ITodoItem } from "./interfaces/idex";

export const App = () => {
  const [todoText, setTodoText] = useState("")
  const [todoList, setTodoList] = useState<ITodoItem[]>([
    { id: Date.now(), text: "my work", done: false }
  ])
  const onChange = (value: string) => setTodoText(value)

  const addText = () => {
    if (todoText.trim()) {

      setTodoList((prevState) => [
        ...prevState,
        { id: Date.now(), text: todoText.trim(), done: false }
      ])
    }
    setTodoText("");
  }

  const handleCheck=(id:number)=>{
    setTodoList((prevState)=>
      prevState.map((item)=>{
        if (item.id==id) {
          return {...item,done:!item.done}
        }
        return item
      })
    )
  }

  const deleteItem=(id:number)=>{
    const newArr= todoList.filter(elem=>{
      return elem.id!==id
    })
    setTodoList(newArr)
  }


  return (
    <div className="App">
      <Input
        value={todoText}
        label="Add your todo"
        onChange={onChange}
        type="text"
      />

      <Button onClick={addText}>Add</Button>
      <List handleCheck={handleCheck} todoList={todoList} deleteItem={deleteItem}/>
    </div>
  );
}

