import React from "react";
import "./jumboStyle.css";

class SecondJumbo extends React.Component{
    render(){
        return(
            <div className="main-section">
                <div className="section-image">
                    <img className="image" src="https://images.indianexpress.com/2020/09/Netflix-free.jpg" alt=""/>
                </div>
                <div className="section">
                 <div className="title">
                    <h1>Download your programmes<br/> to watch on the go.</h1>
                </div>
                <div className="subtitle">
                    <h1>Save your data and watch all <br/>your favourites offline.</h1>
                </div>
                </div>
            </div>
        )
    }
}
export default SecondJumbo;