import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/action/todoSlice";

const Addtodo = () => {

  const dispatch=useDispatch(state=>state.Addtodo)
  
  const [input,setInput]=useState('')
  const addTodoHandler =(e)=>
  {
    e.preventDefault();
    dispatch(addTodo(input))
    setInput('');
  }
  return <>
  <form className="row g-3" onSubmit={addTodoHandler}>
  
  <div className="col-auto">
 
    <input type="textt" className="form-control"  placeholder="Add Title" value={input} onChange={(e)=>setInput(e.target.value)} />
  </div>
  <div className="col-auto">
    <button type="submit" className="btn btn-primary mb-3">Add Todo</button>
  </div>
</form>
  </>;
};

export default Addtodo;
