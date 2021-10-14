import React from 'react';
import './PlayList.css';
import Nav from '../Nav';

class PlayList extends React.Component {
  truncate(string, n) {
    return string?.length > n ? `${string.substr(0, n - 1)}...` : string;
  }
  render() {
    return (
      <section className="playlist-container">
        <Nav className="Nav-bar" />
        <section className="playList">
          <h1>Watch List</h1>
          <main className="movieList">
            {this.props.movieList.length === 0 ? (
              <div className="movieList-empty">Watch list is empty...</div>
            ) : (
              this.props.movieList.map((movie) => (
                <div className="img-container">
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="gray"
                    >
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-12v-2h12v2z" />
                    </svg>
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
