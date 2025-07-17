import React from "react";
import TodoItem from "./TodoItem";

// todos: Mảng chứa danh sách các todo items
// onDelete: Function để xóa todo (từ component cha)
// onEdit: Function để chỉnh sửa todo (từ component cha)
function TodoList({ todos, onDelete, onEdit }) {
    return (
        <div className="todo-list">

            {/* Duyệt qua từng phần tử trong mảng todos
                todo: Giá trị của từng todo item
                index: Vị trí của item trong mảng (0, 1, 2...) 
                
                key={index}: React key để tối ưu re-rendering
                itemValue={todo}: Dữ liệu của todo item
                onDelete={() => onDelete(index)}: Function xóa với index cụ thể
                onEdit={() => onEdit(index)}: Function edit với index cụ thể
                
                */}

            {todos.map((todo, index) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onDelete={() => onDelete(todo.id)}
                    onEdit={() => onEdit(todo.id)}
                />
            ))}
        </div>
    );
}

export default TodoList;