import React from 'react';
import Banner from '../Banner';
import './HomeScreen.css';
import Nav from '../Nav';
import requests from '../Requests';
import Row from '../Row';



  class HomeScreen extends React.Component{
    constructor(props){
      super(props);
      const {movieList,playList} = this.props;
      this.state={
        movieList,playList
      }
    }

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
      playList={this.state.playList}
      movieList={this.state.movieList}
    />
    <Row
      title="Trending Now"
      id="TN"
      fetchUrl={requests.fetchTrending}
      playList={this.state.playList}
      movieList={this.state.movieList}
    />
    <Row
      title="Top Rated"
      id="TR"
      fetchUrl={requests.fetchTopRated}
      playList={this.state.playList}
      movieList={this.state.movieList}
    />
    <Row
      title="Action Movies"
      id="AM"
      fetchUrl={requests.fetchActionMovies}
      playList={this.state.playList}
      movieList={this.state.movieList}
    />
    <Row
      title="Comedy Movies"
      id="CM"
      fetchUrl={requests.fetchComedyMovies}
      playList={this.state.playList}
      movieList={this.state.movieList}
    />
    <Row
      title="Horror Movies"
      id="HM"
      fetchUrl={requests.fetchHorrorMovies}
      playList={this.state.playList}
      movieList={this.state.movieList}
    />
    <Row
      title="Romance Movies"
      id="RM"
      fetchUrl={requests.fetchRomanceMovies}
      playList={this.state.playList}
      movieList={this.state.movieList}
    />
    <Row
      title="Documenteries"
      id="DM"
      fetchUrl={requests.fetchDocumentaries}
      playList={this.state.playList}
      movieList={this.state.movieList}
    />
  </div>
);
}
}
    

export default HomeScreen;
