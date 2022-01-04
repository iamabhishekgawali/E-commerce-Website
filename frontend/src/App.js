
import React,{useEffect } from 'react';
import './App.css';
import Header from "./component/layout/Header/Header.js"
import WebFont from "webfontloader"
import Footer from  "./component/layout/Footer/Footer.js"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./component/Home/Home.js"


function App() {

  useEffect(()=>{
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    console.log("Web Font loaded")
  },[])


  return (
    <Router>
      <Header/>
       <Home></Home>
      <Footer/>
    </Router>
  );
}

export default App;
