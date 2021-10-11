import React from "react";

function TodoList(props) {
  return (
    <div onClick={() => props.onChecked(props.id)}>
      <li>{props.list}</li>
    </div>
  );
}

export default TodoList;
