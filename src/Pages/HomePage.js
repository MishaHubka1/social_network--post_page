import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './HomePage.css';
import { login, logout, selectUser } from '../features/userSlice';
import Feed from '../Feed';
import { auth } from '../firebase';
import Header from '../Header';
import Login from '../Login';
import Sidebar from '../Sidebar';
import Widgets from '../Widgets';

function HomePage() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //user logged in
        dispatch(login({
          email: userAuth.email,
                   uid: userAuth.uid,
                   displayName: userAuth.displayName,
                   photoURL: userAuth.photoURL
        }))
      } else {
        //user logged out
        dispatch(logout());
      }
    })
  },[])

  return (
    <div className="app"> 
    

    {!user ? <Login /> : (
      <div className="app__body">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
    )}
    </div>
  );
}



export default HomePage;

