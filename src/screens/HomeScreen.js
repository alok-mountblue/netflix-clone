import React from 'react';
import Banner from '../Banner';
import './HomeScreen.css';
import Nav from '../Nav';
import requests from '../Requests';
import Row from '../Row';

const HomeScreen = ({ playList, movieList }) => (
  <div className="homeScreen">
    <Nav />

    <Banner />

    <Row
      title="NETFLIX ORIGINALS"
      fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow
      playList={playList}
      movieList={movieList}
    />
    <Row
      title="Trending Now"
      fetchUrl={requests.fetchTrending}
      playList={playList}
      movieList={movieList}
    />
    <Row
      title="Top Rated"
      fetchUrl={requests.fetchTopRated}
      playList={playList}
      movieList={movieList}
    />
    <Row
      title="Action Movies"
      fetchUrl={requests.fetchActionMovies}
      playList={playList}
      movieList={movieList}
    />
    <Row
      title="Comedy Movies"
      fetchUrl={requests.fetchComedyMovies}
      playList={playList}
      movieList={movieList}
    />
    <Row
      title="Horror Movies"
      fetchUrl={requests.fetchHorrorMovies}
      playList={playList}
      movieList={movieList}
    />
    <Row
      title="Romance Movies"
      fetchUrl={requests.fetchRomanceMovies}
      playList={playList}
      movieList={movieList}
    />
    <Row
      title="Documenteries"
      fetchUrl={requests.fetchDocumentaries}
      playList={playList}
      movieList={movieList}
    />
  </div>
);

export default HomeScreen;
