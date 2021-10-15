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
            src='https://lh3.googleusercontent.com/Ut-WdOVJI3EIwH5hhEA4OB9X2I5eEZo-_E-dKvLTKWxq6fbuPmbUzd-ggjkGK7TIBFEMjUo=s85'
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
