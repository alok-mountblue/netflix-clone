/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './movieTrailer.css';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import CancelIcon from '@material-ui/icons/Cancel';

class MovieTrailer extends React.Component {
  constructor(props) {
    super(props);
    const {
      backdrop_path,
      title,
      overview,
      name,
      release_date,
      first_air_date,
      vote_average,
      setModalVisibility,
    } = this.props;
    this.state = {
      backdrop_path,
      title,
      overview,
      name,
      release_date,
      first_air_date,
      vote_average,
      setModalVisibility,
      trailerUrl: '',
    };
  }
  randomPorcentaje = () => {
    return Math.floor(Math.random() * 100);
  };
  async componentDidMount() {
    if (this.state.trailerUrl) {
      this.setState({ trailerUrl: '' });
    } else {
      movieTrailer(this.state.title || this.state.name || '')
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          this.setState({ trailerUrl: urlParams.get('v') });
        })
        .catch((error) => console.log(error));
    }
  }

  checkPlayList = (newMovie) => {
    const checkList =
      this.props.movieList.filter((movie) => movie.id === newMovie.id).length >
      0;
    return checkList;
  };

  render() {
    const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        autoplay: 1,
      },
    };
    return (
      <div className="presentation" role="presentation">
        <div className="wrapper-modal">
          <div className="modal">
            <span
              onClick={() => this.state.setModalVisibility(false)}
              className="modal-close"
            >
              <CancelIcon />
            </span>
            {this.state.trailerUrl ? (
              <Youtube videoId={this.state.trailerUrl} opts={opts} />
            ) : (
              <img
                className="modal__poster-img"
                src={`https://image.tmdb.org/t/p/original/${this.state.backdrop_path}`}
              />
            )}

            <div className="modal__content">
              <p className="modal__details">
                <span className="modal__user-perc">
                  {this.randomPorcentaje()}% for you
                </span>{' '}
                {this.state.release_date
                  ? this.state.release_date
                  : this.state.first_air_date}
              </p>
              <div className="playList-btn">
                <h2 className="modal__title">
                  {this.state.title ? this.state.title : this.state.name}{' '}
                </h2>
                <button
                  type="button"
                  className="heart-btn"
                  onClick={() => {
                    this.props.playList(this.props.movie);
                  }}
                >
                  {this.checkPlayList(this.props.movie) ? (
                    <i
                      className="material-icons-round red-heart-btn"
                      title="Remove from watchlist"
                    >
                      favorite
                    </i>
                  ) : (
                    <i
                      className="material-icons-round gray-heart-btn"
                      title="Add to watchlist"
                    >
                      favorite
                    </i>
                  )}
                </button>
              </div>
              <p className="modal__overview">{this.state.overview}</p>
              <p className="modal__overview">
                Vote Average: {this.state.vote_average}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieTrailer;
