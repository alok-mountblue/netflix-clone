import React from 'react';
import { auth } from '../firebase';
import SignUpScreen from './SignUpScreen';
import './SignInScreen.css';

class SignInScreen extends React.Component{
  constructor(props){
    super(props);
    this.state={
      signUp:false,
    }
    this.emailRef = React.createRef();
    this.passwordRef = React.createRef();
  }
  signIn = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(
      this.emailRef.current.value,
      this.passwordRef.current.value
    ).then((authUser)=> {
        console.log(authUser);
    }).catch((error)=> {
        alert(error.message);
    });
  };

  render(){
  return (
    <>
      {
       this.state.signUp ? (
          <SignUpScreen />
        ) : (
          <div className="singupScreen">
            <form>
              <h1>Sign In</h1>
              <input ref={this.emailRef} type="email" placeholder="Email" />
              <input ref={this.passwordRef} type="password" placeholder="Password" />
              <button type="submit" onClick={this.signIn}>
                Sign In
              </button>
              <h4>
                <span className="singupScreen_gray">New to netflix? </span>
                <span className="signupScreen_link" onClick={()=> {
                  this.setState({signUp:true})
                }}>
                  Sign up now.
                </span>
              </h4>
            </form>
          </div>
        )
      }
    </>
    
  );
}
}

export default SignInScreen;