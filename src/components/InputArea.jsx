import React from "react";

export default function InputArea(props) {
  return (
    <div className="form">
      <input
        onKeyDown={props.onPressed}
        for="btn"
        type="text"
        onChange={props.onChange}
        value={props.value}
        required
      />
      <button id="btn" onClick={props.onClick} required>
        <span>Add</span>
      </button>
    </div>
  );
}
