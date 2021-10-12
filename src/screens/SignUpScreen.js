import React from 'react';
import { auth } from '../firebase';
import './SignUpScreen.css';
import SignInScreen from './SignInScreen';

class SignUpScreen extends React.Component {
  constructor() {
    super();
    this.state = { signIn: false };
    this.myRef = React.createRef();
  }

  emailRef = React.createRef(null);
  passwordRef = React.createRef(null);
  register = (e) => {
    e.preventDefault();

    auth.createUserWithEmailAndPassword(
      this.emailRef.current.value,
      this.passwordRef.current.value
    ).then((authUser)=> {
        console.log(authUser);
    }).catch((error)=> {
        alert(error.message);
    });
  };
  render() {
    return (
      <>
        {this.state.signIn ? (
          <SignInScreen />
        ) : (
          <div className="SignUpScreen">
            <form>
              <h1>Sign up</h1>
              <input ref={this.emailRef} type="email" placeholder="Email" />
              <input ref={this.passwordRef} type="password" placeholder="Password" />
              <input type="password" placeholder="Confirm Password" />
              <button type="submit" onClick={this.register}>
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

export default SignUpScreen;