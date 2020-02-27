import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Component/Header'
import ThirdpartList from './Component/ThirdrartList'
import Footer from './Component/Footer'
import ImageBlog from './Component/ImageBlog';

class App extends Component{
  render(){
    return(
      <div className="collection">
        <Header/>
        <ThirdpartList/>
        <ImageBlog/>
        <Footer/>
      </div>
    )
  }
}

export default App;
