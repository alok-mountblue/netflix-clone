import React from 'react';
import Banner from '../Banner';
import './HomeScreen.css';
import Nav from '../Nav';
import requests from '../Requests';
import Row from '../Row';



  class HomeScreen extends React.Component{
    render(){
     return (
  <div className="homeScreen">
    <Nav />

    <Banner />

    <Row
      title="NETFLIX ORIGINALS"
      fetchUrl={requests.fetchNetflixOriginals}
      id="NO"
      isLargeRow
      playList={this.props.playList}
      movieList={this.props.movieList}
    />
    <Row
      title="Trending Now"
      id="TN"
      fetchUrl={requests.fetchTrending}
      playList={this.props.playList}
      movieList={this.props.movieList}
    />
    <Row
      title="Top Rated"
      id="TR"
      fetchUrl={requests.fetchTopRated}
      playList={this.props.playList}
      movieList={this.props.movieList}
    />
    <Row
      title="Action Movies"
      id="AM"
      fetchUrl={requests.fetchActionMovies}
      playList={this.props.playList}
      movieList={this.props.movieList}
    />
    <Row
      title="Comedy Movies"
      id="CM"
      fetchUrl={requests.fetchComedyMovies}
      playList={this.props.playList}
      movieList={this.props.movieList}
    />
    <Row
      title="Horror Movies"
      id="HM"
      fetchUrl={requests.fetchHorrorMovies}
      playList={this.props.playList}
      movieList={this.props.movieList}
    />
    <Row
      title="Romance Movies"
      id="RM"
      fetchUrl={requests.fetchRomanceMovies}
      playList={this.props.playList}
      movieList={this.props.movieList}
    />
    <Row
      title="Documenteries"
      id="DM"
      fetchUrl={requests.fetchDocumentaries}
      playList={this.props.playList}
      movieList={this.props.movieList}
    />
  </div>
);
}
}
    

export default HomeScreen;
