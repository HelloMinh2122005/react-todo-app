import React from 'react';
import { Link, useLocation, NavLink } from 'react-router-dom';
import './header.css';

// Link: Nhanh hơn nhiều vì chỉ render lại các component cần thiết
// a: Chậm hơn vì phải tải lại toàn bộ HTML, CSS, JavaScript

// Dùng Link: Khi điều hướng nội bộ trong ứng dụng React
// Dùng thẻ a: Khi liên kết đến trang web bên ngoài ứng dụng hoặc khi cần tải lại trang

// NavLink là một component đặc biệt từ React Router, tương tự như Link nhưng được thiết kế riêng cho navigation và có thêm tính năng tự động xử lý active state.
// Link: Không có khả năng tự nhận biết route hiện tại, đòi hỏi bạn phải sử dụng useLocation() và logic kiểm tra thủ công
// NavLink: Tự động nhận biết khi nó đang "active" (route hiện tại khớp với to prop)

const Header = () => {
    return (
        <header className="simple-header">
            <nav>
                <ul className="nav-list">
                    <li>
                        <NavLink to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/todos">
                            Todos
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/homepage">
                            Homepage
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/products">
                            Products
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/login">
                            Login
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;