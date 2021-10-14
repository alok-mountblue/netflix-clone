import React from 'react';
import Banner from '../Banner';
import './HomeScreen.css';
import Nav from '../Nav';
import requests from '../Requests';
import Row from '../Row';

const HomeScreen = ({ playList, movieList }) => (
  <div className='homeScreen'>
    <Nav />

    <Banner />

    <Row
      title='NETFLIX ORIGINALS'
      fetchUrl={requests.fetchNetflixOriginals}
      id='NO'
      isLargeRow
      playList={playList}
      movieList={movieList}
    />
    <Row
      title='Trending Now'
      id='TN'
      fetchUrl={requests.fetchTrending}
      playList={playList}
      movieList={movieList}
    />
    <Row
      title='Top Rated'
      id='TR'
      fetchUrl={requests.fetchTopRated}
      playList={playList}
      movieList={movieList}
    />
    <Row
      title='Action Movies'
      id='AM'
      fetchUrl={requests.fetchActionMovies}
      playList={playList}
      movieList={movieList}
    />
    <Row
      title='Comedy Movies'
      id='CM'
      fetchUrl={requests.fetchComedyMovies}
      playList={playList}
      movieList={movieList}
    />
    <Row
      title='Horror Movies'
      id='HM'
      fetchUrl={requests.fetchHorrorMovies}
      playList={playList}
      movieList={movieList}
    />
    <Row
      title='Romance Movies'
      id='RM'
      fetchUrl={requests.fetchRomanceMovies}
      playList={playList}
      movieList={movieList}
    />
    <Row
      title='Documenteries'
      id='DM'
      fetchUrl={requests.fetchDocumentaries}
      playList={playList}
      movieList={movieList}
    />
  </div>
);

export default HomeScreen;
