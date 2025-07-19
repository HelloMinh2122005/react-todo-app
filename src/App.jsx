import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/layout/header';
import Footer from './components/layout/footer';

const App = () => {
  return (
    <div className="app-container">
      <Header />

      <div className="content-container">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default App;