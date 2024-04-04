//возможно надо заключить в AppRouter
import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
//import AppRouter from './components/AppRouter';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';

function App() {
  return (
    <BrowserRouter>
    
    <div className="App">
    <Header />
    <Content />
    <Footer />
    </div>
    
    </BrowserRouter>
  );
}

export default App;
