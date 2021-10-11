import React, { useState } from "react";
import InputArea from "./InputArea";
import TodoList from "./TodoItem";



function App() {
  const [text, setInput] = useState("");
  const [items, setItem] = useState([]);
  const updateItem = (e) => {
    const { value } = e.target;
    setInput(value);
  };
  

  function addItems() {
    
    setItem((preV) => [...preV, text]);
    localStorage.setItem('todo',JSON.stringify({list:text}));
    setInput(" ");
  }
  function deleteItem(id) {
    setItem((preV) => preV.filter((name, i) => id !== i));
  }
const keyPress=(e)=>{
  const {key}=e;
  return key==='Enter'&&addItems();
  
  
  
}
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
     <InputArea onPressed={keyPress} onChange={updateItem} value={text} onClick={addItems}/>
      <div>
        <ul>
          {items.map((item, index) => (
            <TodoList  id={index} onChecked={deleteItem} list={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
