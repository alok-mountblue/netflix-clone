import React from "react";
import "./jumboStyle.css";

class FirstJumbo extends React.Component{
    render(){
        return(
            <div className="main-section">
                <div className="section">
                 <div className="title">
                    <h1>Enjoy on your TV.</h1>
                </div>
                <div className="subtitle">
                    <h1>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h1>
                </div>
                </div>
                <div className="section-image">
                    <img className="image" src="https://techbriefly.com/wp-content/uploads/2021/07/Netflix.jpg" alt=""/>
                </div>
            </div>
        )
    }
}
export default FirstJumbo;