 export interface ITodoItem {
    id: number;
    text: string;
    done: boolean;
  }
  
  export interface ITodoList {
    todoList:ITodoItem[];
    handleCheck:(value: number)=> void;
    deleteItem:(value:number)=>void;
  }

  export interface IInputProps{
    type: string;
    label: string;
    placeholder?:string;
    value: string;
    onChange:(value: string)=> void;
}