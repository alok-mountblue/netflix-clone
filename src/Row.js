
import React from 'react';
import "./Row.css";
import axios from './axios';

class Row extends React.Component{
    constructor(props){
        super(props);
        this.state={
            movies:[]
        }
    }
    async componentDidMount(){
        const request = await axios.get(this.props.fetchUrl);
        this.setState({movies:request.data.results});
    }
  render(){
    return (

        <div className='row'>
            <h2>{this.props.title}</h2>
            <div className='row_posters'> 
                {this.state.movies.map((movie) =>
                    ((this.props.isLargeRow && movie.poster_path) ||
                    (!this.props.isLargeRow && movie.backdrop_path)) && (
                    <img
                        className={`row_poster ${this.props.isLargeRow && 'row_posterLarge'}`}
                        key={movie.id}
                        src={`https://image.tmdb.org/t/p/original${
                        this.props.isLargeRow ? movie.poster_path : movie.backdrop_path
                        }`}
                       alt={movie.name}
                   />
                    )
                )}
            </div>
            </div>
    );
 }
 
}

export default Row;
