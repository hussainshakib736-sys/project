import AppName from "./components/AppName"
import AddTodo from "./components/AddTodo"
import TodoItem from "./components/TodoItem"
import TodoItems from "./components/TodoItems"
import WelcomeMessage from "./components/WelcomeMessage"
import "./App.css";
import { useState } from "react";

function App() {
  

  const [todoItems, setTodoItems] = useState([]);
  const handleNewItem = (itemName, itemDueDate)=>{
 
  // setTodoItems((currValue) =>{
  //  const newTodoItems = [...currValue,
  //     {name: itemName, dueDate: itemDueDate},];
  //       return newTodoItems;
  // })   //long syntax mein written hai 
   setTodoItems((currValue) => [
   ...currValue,
      {name:itemName,dueDate:itemDueDate},]   
  );  //single line element hai isi liye short cut syntax use kiya hai 
};
  

  const handleDeleteItem =(todoItemName) =>{
   const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
   setTodoItems (newTodoItems);
  
  }

    return (
 <center className="todo-container">
      <AppName/>
      <AddTodo onNewItem={handleNewItem}/>
     {todoItems.length === 0 && <WelcomeMessage ></WelcomeMessage> } 
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem}></TodoItems>

 </center>
 )
 
}

export default App
