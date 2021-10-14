import React from "react";
import "./jumboStyle.css";

class ThirdJumbo extends React.Component{
    render(){
        return(
            <div className="main-section">
                <div className="section">
                 <div className="title">
                    <h1>Watch everywhere.</h1>
                </div>
                <div className="subtitle">
                    <h1>Stream unlimited films and TV programmes on your phone, tablet, laptop and TV without paying more.</h1>
                </div>
                </div>
                <div className="section-image">
                    <img className="image" src="http://mobilemarketingmagazine.com/wp-content/uploads/2015/08/Netflix-TV-tablet.png" alt=""/>
                </div>
            </div>
        )
    }
}
export default ThirdJumbo;