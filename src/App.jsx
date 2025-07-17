// Import các hooks cần thiết từ React
import { useState, useEffect } from 'react';
// Import các components con
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import Footer from './components/Footer';

const App = () => {
  // Khởi tạo state todos với lazy initialization
  // Kiểm tra localStorage để khôi phục dữ liệu khi reload trang
  // todos và setTodos giống như getter và setter 
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    // Nếu có dữ liệu trong localStorage thì parse JSON, không thì trả về mảng rỗng
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  // useEffect để lưu todos vào localStorage mỗi khi todos thay đổi
  useEffect(() => {
    // Chuyển đổi todos thành JSON string và lưu vào localStorage
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]); // Dependency array: chỉ chạy khi todos thay đổi

  // Function để thêm todo mới
  const addTodo = (text) => {
    // Tạo object todo mới với id unique, text và trạng thái chưa hoàn thành
    const newTodo = {
      id: Date.now(), // Sử dụng timestamp làm id unique
      text,
      completed: false
    };
    // Cập nhật state bằng cách spread operator để tạo mảng mới
    setTodos([...todos, newTodo]);
  };

  // Function để xóa todo theo id
  const deleteTodo = (id) => {
    // Lọc ra những todo có id khác với id cần xóa
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Function để cập nhật text của todo
  const updateTodo = (id) => {
    // Tìm todo cần update
    const todoToUpdate = todos.find(todo => todo.id === id);
    // Hiển thị prompt để user nhập text mới
    const newText = prompt('Update task:', todoToUpdate.text);

    // Kiểm tra nếu user không cancel và text không rỗng
    if (newText !== null && newText.trim() !== '') {
      // Map qua todos và update todo có id tương ứng
      setTodos(
        todos.map(todo =>
          // Nếu todo.id trùng với id cần update thì trả về todo mới với nội dung tương tự nhưng text mới
          // nếu không thì giữ nguyên todo cũ
          todo.id === id ? { ...todo, text: newText } : todo
        )
      );
    }
  };

  // Function để xóa tất cả todos
  const deleteAllTodos = () => {
    // Hiển thị confirm dialog để xác nhận
    if (window.confirm('Are you sure you want to delete all tasks?')) {
      // Reset todos về mảng rỗng
      setTodos([]);
    }
  };

  return (
    <div className="app-container">
      {/* Header component với title */}
      <Header title="Todo App" />

      <div className="content-container">
        {/* TodoInput component - truyền function addTodo qua props onAdd */}
        <TodoInput onAddTodo={addTodo} />

        {/* TodoList component - truyền todos và các functions xử lý */}
        <TodoList
          todos={todos}
          onDelete={deleteTodo}
          onEdit={updateTodo}
        />

        {/* Footer component - chỉ hiển thị khi có todos
            Conditional rendering: chỉ render Footer khi todos.length > 0 */}
        {todos.length > 0 && <Footer onDeleteAll={deleteAllTodos} />}
      </div>
    </div>
  );
};

export default App;