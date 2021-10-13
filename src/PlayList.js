import React from 'react';
import './PlayList.css';
import Nav from './Nav';

class PlayList extends React.Component {
  truncate(string, n) {
    return string?.length > n ? `${string.substr(0, n - 1)}...` : string;
  }
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
                  <div className="title">
                    <h3>
                      {this.truncate(
                        `${movie.original_title || movie.name} `,
                        20
                      )}
                    </h3>
                  </div>
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
