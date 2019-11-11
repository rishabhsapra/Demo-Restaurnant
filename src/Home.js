import React, { Component } from 'react'
import './All.css'

 class Home extends Component {
    render() {
        return (
            <div>
                
                
                 <p >
                <img src={process.env.PUBLIC_URL + "/hunger.jpg"}alt="mypic"className="hi"/>
                </p> 

            </div>
        )
    }
}
export default Home;