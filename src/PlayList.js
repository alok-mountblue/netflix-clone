import React from 'react';
import './PlayList.css';
import Nav from './Nav';

class PlayList extends React.Component {
  render() {
    return (
      <section className="playlist-container">
        <Nav />
        <section className="playList">
          <h1>My Lists</h1>
          <main className="movieList">
            {this.props.movieList.length === 0 ? (
              <div className="playlist-empty">Watch list is empty...</div>
            ) : (
              this.props.movieList.map((movie) => (
                <div>
                  <img
                    className="row_poster"
                    key={movie.id}
                    src={`https://image.tmdb.org/t/p/original${
                      this.props.isLargeRow
                        ? movie.poster_path
                        : movie.backdrop_path
                    }`}
                    alt={movie.name}
                  />
                  <h3>{movie.name || movie.original_title}</h3>
                  <button onClick={() => this.props.removeFromPlayList(movie)}>
                    Remove
                  </button>
                </div>
              ))
            )}
          </main>
        </section>
      </section>
    );
  }
}

export default PlayList;
