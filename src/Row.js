import React from 'react'
import axios from "./axios";
import "./Row.css";
import MovieModal from './movieTrailer';

class Row extends React.Component{
    constructor(props){
        super(props);
        this.state={
            movies:[],
            modalVisibility:false,
            movieSelected:{}
        }
        this.setModalVisibility = this.setModalVisibility.bind(this);
    }
    async componentDidMount(){
      const request= await axios.get(this.props.fetchUrl);
      this.setState({movies:request.data.results})
      return request;
    }

    setModalVisibility(item){
        this.setState({modalVisibility:item})
    }
    
    handleClick = (movie) =>{
        this.setModalVisibility(true);
        this.setState({movieSelected:movie})
    }
    render(){
        return (
            <div className="row">
            {/** TITLE */}
            <h2>{this.props.title}</h2>
                <div id={this.props.id} className="row__posters">
                    {/**SEVERAL ROW__POSTER */}
                    {this.state.movies.map(movie=>(
                        <img
                            key={movie.id}
                            onClick={() => this.handleClick(movie)}
                            className={`row__poster ${this.props.isLargeRow && "row__posterLarge"}`} 
                            src={`https://image.tmdb.org/t/p/original/${this.props.isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                            loading="lazy"
                            alt={movie.name}/>
                    ))}
                    
                </div>
    
            {this.state.modalVisibility && <MovieModal {...this.state.movieSelected} setModalVisibility={this.setModalVisibility}/>}
        </div>
    )
        
    }
}
export default Row;

