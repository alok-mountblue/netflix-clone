
import React from 'react';
import "./Banner.css";
import axios from './axios';
import requests from './Requests';

class Banner extends React.Component{
    constructor(){
        super();
        this.state = {
            movie:[]
        }
    }
    async componentDidMount() {
    const request = await axios.get(requests.fetchNetflixOriginals);
        this.setState({movie:
            request.data.results[
                                Math.floor(Math.random() * request.data.results.length - 1)
                            ]
                        }
                        );
                    }
   
    truncate(string, n){
        return string?.length > n ? `${string.substr(0, n-1)  }...` : string;
    }

    render(){
        return (
            <header className="banner" style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${this.state.movie.backdrop_path }")`,
                backgroundPosition: "center center",
            }}>
                <div className="banner_contents">
                    <h1 className="banner_title">
                        {this.state.movie.title || this.state.movie.name || this.state.movie.original_name}
                    </h1>
                    <div className="banner_buttons">
                        <button className="banner_button">Play</button>
                        <button className="banner_button">My List</button>
                    </div>
                    <h1 className="banner_description">{this.truncate(`${this.state.movie.overview}`, 150)}</h1>
                </div>
                <div className="banner--fadeBottom" />
            </header>
        )
    }
}
export default Banner;