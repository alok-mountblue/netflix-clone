import React, { useEffect, useState } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import PlayList from './screens/PlayList';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        console.log(userAuth);
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);

  const playList = (newMovie) => {
    const check = movieList.filter((movie) => movie.id === newMovie.id).length;
    if (check === 0) {
      setMovieList([...movieList, newMovie]);
    } else {
      removeFromPlayList(newMovie);
    }
  };

  const removeFromPlayList = (removeMovie) => {
    const remainingMovie = movieList.filter(
      (movie) => movie.id !== removeMovie.id
    );
    setMovieList(remainingMovie);
  };
  return (
    <div className='app'>
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
            <Route exact path='/profile'>
              <ProfileScreen />
            </Route>
            <Route exact path='/'>
              <HomeScreen playList={playList} movieList={movieList} />
            </Route>
            <Route exact path='/playlist'>
              <PlayList
                movieList={movieList}
                removeFromPlayList={removeFromPlayList}
              />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
