import React,{Component} from 'react'

export default class Thirdpart extends Component{
    render(){
        return(
            <div className="ThirdpartMain">
                <div className="phone">
                <div className="circle">{this.props.logo}</div>
                <h2>{this.props.name}</h2>
                <p> {this.props.desc}</p>
                <button className="main-button">READ MORE</button>
                </div>


            </div>
        )
    }
}
