import React, { Component } from 'react'
import './All.css'

 class Menu extends Component {
    render() {
        return (
            <div>
                
            <div className="outer">
                
                <div className="slider">
                <img src={process.env.PUBLIC_URL + "/menu1.jpg"}alt="mypic"/>
                <img src={process.env.PUBLIC_URL + "/menu2.png"}alt="mypic"/>
                <img src={process.env.PUBLIC_URL + "/menu3.jpg"}alt="mypic"/>
                <img src={process.env.PUBLIC_URL + "/r1.jpg"}alt="mypic"/>
                 </div>
                 
                </div>
             </div>
        )
    }
}
export default Menu;