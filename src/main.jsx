import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from './pages/login.jsx'
import Home from './pages/home.jsx'
import Product from './pages/product.jsx'
import TodoPage from './pages/todoPage.jsx'
import './styles/global.css'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true, // Trang chủ
        element: <Home />,
      },
      {
        path: 'todos',
        element: <TodoPage />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'homepage',
        element: <Home />,
      },
      {
        path: 'products',
        element: <Product />,
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)