import React from 'react';
import './CreateUser.css';
import SignUpScreen from './SignUpScreen';

class CreateUser extends React.Component {
  constructor() {
    super();
    this.state = { signIn: false };
  }
  signup = (e) => {
    e.preventDefault();
  };
  render() {
    return (
      <>
        {this.state.signIn ? (
          <SignUpScreen />
        ) : (
          <div className="createUser">
            <form>
              <h1>Sign up</h1>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <input type="password" placeholder="Confirm Password" />
              <button type="submit" onClick={this.signup}>
                Sign Up
              </button>
              <h4>
                <span className="existingUser_gray">
                  Already have an account?{' '}
                </span>
                <span
                  className="signinPage"
                  onClick={() => this.setState({ signIn: true })}
                >
                  Sign in.
                </span>
              </h4>
            </form>
          </div>
        )}
      </>
    );
  }
}

export default CreateUser;
