import React from 'react';
import { withRouter } from 'react-router';
import './Nav.css';

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }

  moveToProfile = () => {
    this.props.history.push('/profile');
  };
  moveToHome = () => {
    this.props.history.push('/');
  };
  transitionNavbar = () => {
    if (window.scrollY > 100) {
      this.setState({ show: true });
    } else {
      this.setState({ show: false });
    }
  };
  componentDidMount() {
    window.addEventListener('scroll', this.transitionNavbar);
    return () => window.removeEventListener('scroll', this.transitionNavbar);
  }
  render() {
    return (
      <div className={`nav ${this.state.show && 'nav_black'}`}>
        <div className='nav_contents'>
          <img
            onClick={this.moveToHome}
            className='nav_logo'
            src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
            alt=''
          />
          <img
            onClick={this.moveToProfile}
            className='nav_avatar'
            src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
            alt=''
          />
        </div>
      </div>
    );
  }
}
export default withRouter(Nav);
