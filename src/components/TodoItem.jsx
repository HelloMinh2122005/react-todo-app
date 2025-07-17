import React from "react";
import "./style.css";
import { MdEdit, MdDelete } from "react-icons/md";

function TodoItem({ todo, onDelete, onEdit }) {
    return (
        <div className="todo-item">
            <span className="todo-text">{todo.text}</span>
            <div className="todo-actions">
                <button
                    className="edit-btn"
                    onClick={onEdit}>
                    <MdEdit className="todo-icon" />
                </button>
                <button
                    className="delete-btn"
                    onClick={onDelete}>
                    <MdDelete className="todo-icon" />
                </button>
            </div>
        </div>
    )
}

export default TodoItem;