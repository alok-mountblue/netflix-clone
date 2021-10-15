import React from 'react';
import axios from './axios';
import './Row.css';
import MovieModal from './movieTrailer';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

class Row extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      currentMovie: {},
      modalVisibility: false,
      movieSelected: {},
    };
    this.setModalVisibility = this.setModalVisibility.bind(this);
  }
  async componentDidMount() {
    const request = await axios.get(this.props.fetchUrl);
    this.setState({ movies: request.data.results });
    return request;
  }

  setModalVisibility(item) {
    this.setState({ modalVisibility: item });
  }

  handleClick = (movie) => {
    this.setModalVisibility(true);
    this.setState({ movieSelected: movie });
    this.setState({ currentMovie: movie });
  };

  checkPlayList = (newMovie) => {
    const checkList =
      this.props.movieList.filter((movie) => movie.id === newMovie.id).length >
      0;
    return checkList;
  };

  render() {
    return (
      <div className="row">
        {/** TITLE */}
        <h2>{this.props.title}</h2>
        <div class="slider">
          <div className="slider__arrow-left">
            <span
              className="arrow"
              onClick={() => {
                document.getElementById(this.props.id).scrollLeft -=
                  window.innerWidth - 80;
              }}
            >
              <ArrowBackIosIcon />
            </span>
          </div>
          <div id={this.props.id} className="row__posters">
            {/**SEVERAL ROW__POSTER */}
            {this.state.movies.map((movie) => (
              <section>
                <img
                  key={movie.id}
                  onClick={() => this.handleClick(movie)}
                  className={`row__poster ${
                    this.props.isLargeRow && 'row__posterLarge'
                  }`}
                  src={`https://image.tmdb.org/t/p/original/${
                    this.props.isLargeRow
                      ? movie.poster_path
                      : movie.backdrop_path
                  }`}
                  loading="lazy"
                  text={movie.name}
                  alt={movie.name}
                />
                {this.checkPlayList(movie) ? (
                  <button
                    type="button"
                    className="heart"
                    onClick={() => this.props.playList(movie)}
                  >
                    <i className="material-icons-round red-heart">favorite</i>
                  </button>
                ) : (
                  <div />
                )}
              </section>
            ))}
          </div>
          <div className="slider__arrow-right">
            <span
              className="arrow"
              onClick={() => {
                document.getElementById(this.props.id).scrollLeft +=
                  window.innerWidth - 80;
              }}
            >
              <ArrowForwardIosIcon />
            </span>
          </div>
        </div>

        {this.state.modalVisibility && (
          <MovieModal
            {...this.state.movieSelected}
            setModalVisibility={this.setModalVisibility}
            playList={this.props.playList}
            movieList={this.props.movieList}
            movie={this.state.currentMovie}
          />
        )}
      </div>
    );
  }
}
export default Row;