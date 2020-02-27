import React,{Component} from 'react'
import HeaderImage from '../assets/Header-img.png'


export default class Header extends Component{
    render(){
        return (
            <div className='outer'>
                 <div className='headerContainer'>
                    <div className="divForImage">
                        <img className='image1' src={HeaderImage}/>
                    </div>
                
                    <div className='divFortext'>
                        <h2 className="whiteText">POWERFULLY SIMPLE <span>WITH A</span>SQUEEKY<span> CLEAN</span> DESIGN</h2>
                        <p>Find out how you can offer quick and powerful solutions to your customers now!</p>
                        <button className="main-button">Learn more</button>
                    </div>
                
                </div>
                <div class="header-bottom">

                <h2 class="header-text">CREATE A POWERFUL SOLUTION NOW!</h2>
                <button class="start-button">Get started</button>
                </div>
                
            </div>

           
                        
            )      
    }
    
}
