import { useState } from "react";
import TodoItem from "./TodoItem";

function AddTodo({onNewItem}){
  const [todoName,setTodoName] = useState ();
  const [dueDate, setDueDate] = useState();
  const handleChangeName = (event) => {
    setTodoName(event.target.value);
  };
  const handleChangeDate = (event) => {
   setDueDate(event.target.value);
  };
  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate)
    setDueDate("");
    setTodoName("");
  }

return <div className="container text-center">
        <div className="row kg-row">
           <div className="col-6">
            <input type = "text" placeholder="Enter Todo Here"value={todoName}
            onChange={handleChangeName}/>
            </div>
             <div className="col-4">
              <input type="date" 
              value={dueDate}
              onChange={handleChangeDate} />
             </div>
            <div className="col-2">
              <button type="button" className="btn btn-success kg-btn btn-add"
               onClick={handleAddButtonClicked}
               >Add</button>
            </div>
        </div>
      </div> 
}
export default AddTodo;