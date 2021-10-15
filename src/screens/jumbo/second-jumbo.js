import React from "react";
import "./jumboStyle.css";

class SecondJumbo extends React.Component{
    render(){
        return(
            <div className="main-section">
                <div className="section-image">
                    <img className="image" src="https://i.pinimg.com/originals/49/0d/49/490d49ef5bf550c52d0b0326d45544d3.jpg" alt=""/>
                </div>
                <div className="section">
                 <div className="title">
                    <h1>Download your programmes <br/>to watch on the go.</h1>
                </div>
                <div className="subtitle">
                    <h1><br/>Save your data and watch all <br/>your favourites offline.</h1>
                </div>
                </div>
            </div>
        )
    }
}
export default SecondJumbo;