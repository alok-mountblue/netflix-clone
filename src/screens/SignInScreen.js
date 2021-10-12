import React, { useRef, useState } from 'react';
import { auth } from '../firebase';
import SignUpScreen from './SignUpScreen';
import './SignInScreen.css';

function SignInScreen() {
  const [signUp, setSignUp] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const signIn = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser)=> {
        console.log(authUser);
    }).catch((error)=> {
        alert(error.message);
    });
  };
  return (
    <>
      {
        signUp ? (
          <SignUpScreen />
        ) : (
          <div className="singupScreen">
            <form>
              <h1>Sign In</h1>
              <input ref={emailRef} type="email" placeholder="Email" />
              <input ref={passwordRef} type="password" placeholder="Password" />
              <button type="submit" onClick={signIn}>
                Sign In
              </button>
              <h4>
                <span className="singupScreen_gray">New to netflix? </span>
                <span className="signupScreen_link" onClick={()=> {
                  setSignUp(true);
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

export default SignInScreen;