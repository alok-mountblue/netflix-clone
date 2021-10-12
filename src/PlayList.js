import React from 'react';
import './PlayList.css';

class PlayList extends React.Component {
  render() {
    return (
      <section style={{ backgroundColor: 'white' }}>
        <h1>My Lists</h1>
        {this.props.movieList.length === 0 ? (
          <div>Watch list is empty...</div>
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
      </section>
    );
  }
}

export default PlayList;
