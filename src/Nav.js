
import React from "react";
import { withRouter } from 'react-router';
import './Nav.css';

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            show:false
        }
      }

    moveToProfile = () => {
      this.props.history.push('/profile');
    };
    moveToHome = () => {
      this.props.history.push('/');
    };

    transitionNavbar = ()=>{
       if(window.scrollY>100){
           this.setState({show:true})
       }else{
           this.setState({show:false})
       }
    }
    componentDidMount(){
        window.addEventListener("scroll", this.transitionNavbar);
        return ()=> window.removeEventListener("scroll", this.transitionNavbar);
      }
    render() {
      return (
      <div className={`nav ${this.state.show && "nav_black"}`}>
      <div className="nav_contents">
      <img 
        className ="nav_logo"
        onClick={this.moveToHome}
        src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
        alt = "Netflix-logo"
      />
      <img 
        className="nav_avatar"
        onClick={this.moveToProfile}
        src="https://play-lh.googleusercontent.com/4e6wjPWV0QabU6n8yfQ48XuL1O3-k6lqurQNKEBNPrUMqABQvhqupOI5xzCEVOaegdw"
        alt=""
      />
         
       </div>   
      </div>);
    }
  }

  export default withRouter(Nav);


