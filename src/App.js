import React, { Component } from 'react';
import './App.css';
import Aside from './components/aside'
// import Footer from './components/footer'
import Header from './components/header'
import Main from './components/main'

export default class App extends Component {
 render(){
   return (
    <React.Fragment>
      <Header />
      <Aside />
      <Main />
    </React.Fragment>
   );
 }
}