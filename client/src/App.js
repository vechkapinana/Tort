//возможно надо заключить в AppRouter
import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Header from './components/Header';
import Footer from './components/Footer';
 import Content from './components/Content';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Footer />
    <AppRouter />
    <div className="App">
    <Content />
    </div>
    
    </BrowserRouter>
  );
}

export default App;
