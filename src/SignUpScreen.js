import React from 'react';
import './SignUpScreen.css';
import CreateUser from './CreateUser';

class SignUpScreen extends React.Component {
  constructor() {
    super();
    this.state = { signUp: false };
  }
  signIn = (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <>
        {this.state.signUp ? (
          <CreateUser />
        ) : (
          <div className="singupScreen">
            <form>
              <h1>Sign In</h1>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button type="submit" onClick={this.signIn}>
                Sign In
              </button>
              <h4>
                <span className="singupScreen_gray">New to netflix? </span>
                <span
                  className="signupScreen_link"
                  onClick={() => this.setState({ signUp: true })}
                >
                  Sign up now.
                </span>
              </h4>
            </form>
          </div>
        )}
      </>
    );
  }
}
export default SignUpScreen;
