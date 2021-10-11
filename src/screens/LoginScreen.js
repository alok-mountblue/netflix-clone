import React from 'react';
import './LoginScreen.css';
import Footer from '../footer';
import SignInScreen from './SignInScreen';

class LoginScreen extends React.Component {
  constructor() {
    super();
    this.state = { signIn: false };
  }
  render() {
    return (
      <div className="loginScreen">
        <div className="loginScreen_background">
          <img
            className="loginScreen_logo"
            src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt=""
          />
          <button
            className="loginScreen_button"
            onClick={() => this.setState({ signIn: true })}
          >
            Sign In
          </button>
          <div className="loginScreen_gradient" />
        </div>
        <div className="loginScreen_body">
          {this.state.signIn ? (
            <SignInScreen />
          ) : (
            <>
              <h1>Unlimited films, TV programs and more.</h1>
              <h2>Watch anywhere. Cancel at any time.</h2>
              <h3>
                Ready to watch? Enter your email to create or restart your
                membership
              </h3>
              <div className="loginScreen_input">
                <form>
                  <button
                    onClick={() => this.setState({ signIn: true })}
                    className="loginScreen_getStarted"
                  >
                    GET STARTED
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
        <Footer/>
      </div>
    );
  }
}

export default LoginScreen;