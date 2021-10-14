/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './movieTrailer.css';
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
import CancelIcon from '@material-ui/icons/Cancel';

class MovieTrailer extends React.Component{
    constructor(props){
        super(props);
        const {backdrop_path,title,overview,name,release_date,first_air_date,vote_average,setModalVisibility} = this.props;
        this.state={
            backdrop_path,title,overview,name,release_date,first_air_date,vote_average,setModalVisibility,
            trailerUrl:""
        }
    }
    randomPorcentaje = ()=>{
        return Math.floor(Math.random() * 100);
    }
    async componentDidMount(){
        if(this.state.trailerUrl){
            this.setState({trailerUrl:''})
        }else{
            movieTrailer(this.state.title || this.state.name || "")
            .then(url =>{
                const urlParams = new URLSearchParams(new URL(url).search);
                this.setState({trailerUrl:urlParams.get('v')});
            }).catch(error => console.log(error))
        }
    }
    render(){
        const opts = {
            height : "390",
            width : "100%",
            playerVars : {
                autoplay : 1,
            },
        }
    return (
        <div className="presentation" role="presentation">
            <div className="wrapper-modal">
                <div className="modal">
                    <span onClick={()=>this.state.setModalVisibility(false)}className="modal-close"><CancelIcon/></span>
                    {this.state.trailerUrl ? <Youtube videoId={this.state.trailerUrl} opts={opts}/> :                     
                        (<img
                        className="modal__poster-img"
                        src={`https://image.tmdb.org/t/p/original/${this.state.backdrop_path}`}
                    />)}

                    <div className="modal__content">
                        <p className="modal__details"><span className="modal__user-perc">{this.randomPorcentaje()}% for you</span> {this.state.release_date ? this.state.release_date : this.state.first_air_date}</p>
                        <h2 className="modal__title">{this.state.title ? this.state.title : this.state.name}</h2>
                        
                        <p className="modal__overview">{this.state.overview}</p>
                        <p className="modal__overview">Vote Average: {this.state.vote_average}</p>
                    </div>
                </div>
            </div>
        </div>
    )
                        }
}

export default MovieTrailer