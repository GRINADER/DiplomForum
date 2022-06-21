import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';


import "bootstrap/dist/css/bootstrap.min.css";
import NaviBar from "./Components/Navibar";
import Footer from "./Components/Footer";
import { Route, BrowserRouter, Routes } from "react-router-dom";
//import {useAppDispatch} from "./hooks/redux";

import { Home } from "./Pages/Home";
// import { Users } from "./Pages/Users";
import { MainCategories } from "./Pages/Users/MainCategories";
import { About } from "./Pages/About";
import {SectionPage} from "./Pages/SectionPage"
import {MessagePage} from "./Pages/MessagePage"
import {News} from "./Pages/News"
import {Crud} from "./Pages/crudUser"


function App() {
  return (
    <> 
    <BrowserRouter>
    <NaviBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<MainCategories />} />
      <Route path="/about" element={<About />} />
      <Route path="/News" element={<News />} />
      <Route path="/SectionPage" element={<SectionPage/>}/>
      <Route path="/MessagePage" element={<MessagePage/>}/>
      <Route path="/crud" element={<Crud />}/>

    </Routes>
  </BrowserRouter>
    <Footer></Footer>

</>
  );
}

export default App;
