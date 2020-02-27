import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Component/Header'
import ThirdpartList from './Component/ThirdrartList'
import Development from './Component/Development'
import Footer from './Component/Footer'
import ImageBlog from './Component/ImageBlog';

export default class App extends Component{
  render(){
    return(
      <div className="collection">
        <Header/>
        <ThirdpartList/>
        <ImageBlog/>
        <Development/>
        <Footer/>
      </div>
    )
  }
}
