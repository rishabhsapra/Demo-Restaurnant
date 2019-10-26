import React, { Component } from 'react'
import './All.css'

 class Menu extends Component {
    render() {
        return (
            <div>
                <p className="m1">MENU CARD</p>
                <img src={process.env.PUBLIC_URL + "/card.jpg"}alt="mypic"className="m2"/>
                <img src={process.env.PUBLIC_URL + "/menu1.jpg"}alt="mypic"className="m2"/>
             </div>
        )
    }
}
export default Menu;