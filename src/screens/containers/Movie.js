import React from 'react';
import MovieLayout from '../components/MovieLayout';
import Player from '../../player/containers/Player';
import Header from '../../sections/components/Header';

const Movie = () => {
  return (
    <MovieLayout>
      <Header />
      <Player />
    </MovieLayout>
  );
};

export default Movie;
