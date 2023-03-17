import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes  } from "react-router-dom";
import Header from "./components/Header/Header";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home/Home';
import ContactForm from './components/Contact/ContactForm';

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
        <Routes >
          <Route path='/' Component={Home}></Route>
          <Route path='/צור-קשר' Component={ContactForm}></Route>
        </Routes >
      </BrowserRouter>
    </>
  );
}

export default App;
