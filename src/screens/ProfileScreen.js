import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';
import Nav from '../Nav';
import PlansScreen from './PlansScreen';
import './ProfileScreen.css';

export const ProfileScreen = () => {
  const user = useSelector(selectUser);
  return (
    <div className='profileScreen'>
      <Nav />
      <div className='profileScreen_body'>
        <h1>Edit Profile</h1>
        <div className='profileScreen_info'>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtufkSKazWrTM9p5N2U8ns7q6QW6svCcGZig&usqp=CAU'
            alt=''
          />
          <div className='profileScreen_details'>
            <h2>{user.email}</h2>
            <div className='profileScreen_plans'>
              <h3>Plans</h3>
              <PlansScreen />
              <button
                onClick={() => auth.signOut()}
                className='profileScreen_signOut'
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
