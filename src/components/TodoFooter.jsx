import React from "react";
import "./style.css";

function Footer({ onDeleteAll }) {
    return (
        <footer className="todo-footer">
            <button onClick={onDeleteAll} className="delete-all-button">
                Delete All
            </button>
        </footer>
    );
}

export default Footer;
