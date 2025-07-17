import React, { useState } from "react";
import "./style.css";

function TodoInput({ onAddTodo }) { // onAddTodo là một function được truyền vào từ component cha
    // inputValue: giá trị của state
    // setInputValue: hàm để cập nhật giá trị của state
    // useState: hook để quản lý state trong component
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleAddButtonClick = () => {
        if (inputValue.trim()) {
            onAddTodo(inputValue);
            // Cập nhật state inputValue về rỗng sau khi thêm todo
            setInputValue("");
        }
    }

    const handleEnterPress = (e) => {
        if (e.key === "Enter") {
            handleAddButtonClick();
        }
    }

    return (
        <div className="todo-input">
            <input
                type="text"
                value={inputValue}
                className="todo-input-field"
                onChange={handleInputChange}
                onKeyDown={handleEnterPress}
                placeholder="Enter a new todo item"
            />
            <button onClick={handleAddButtonClick}>Add</button>
        </div>
    );
}

export default TodoInput;   