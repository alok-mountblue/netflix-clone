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
        src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
        alt=""
      />
      <img 
        className="nav_avatar"
        onClick={this.moveToProfile}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQadx7_3qurjAk-NnLECtybSA2ZwmeUbZOQ5w&usqp=CAU"
        alt=""
      />
         
       </div>   
      </div>);
    }
  }

  export default withRouter(Nav);


