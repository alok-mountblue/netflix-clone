import React from 'react';
import Banner from '../Banner';
import "./HomeScreen.css";
import Nav from "../Nav";
import requests from '../Requests';
import Row from '../Row';


const HomeScreen = () => (
        <div className="homeScreen">
            <Nav/>

            <Banner/>

            <Row 
                title="NETFLIX ORIGINALS"
                fetchUrl={requests.fetchNetflixOriginals}
                id="NO"
                isLargeRow
            />
            <Row 
                title="Trending Now"
                id="TN"
                fetchUrl={requests.fetchTrending}
            />
            <Row 
                title="Top Rated"
                id="TR"
                fetchUrl={requests.fetchTopRated}
            />
            <Row 
                title="Action Movies"
                id="AM"
                fetchUrl={requests.fetchActionMovies}
            />
            <Row 
                title="Comedy Movies"
                id="CM"
                fetchUrl={requests.fetchComedyMovies}
            />
            <Row 
                title="Horror Movies"
                id="HM"
                fetchUrl={requests.fetchHorrorMovies}
            />
            <Row 
                title="Romance Movies"
                id="RM"
                fetchUrl={requests.fetchRomanceMovies}
            />
            <Row 
                title="Documenteries"
                id="DM"
                fetchUrl={requests.fetchDocumentaries}
            />
        </div>
        
    )

export default HomeScreen
