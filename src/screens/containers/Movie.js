import React from 'react';
import {connect} from 'react-redux';
import MovieLayout from '../components/MovieLayout';
import Player from '../../player/containers/Player';
import Header from '../../sections/components/Header';
import Close from '../../sections/components/Close';
import Detail from '../../videos/components/Detail';

const Movie = props => {
  const closeVideo = () => {
    props.dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: {
        movie: null,
      },
    });
  };

  return (
    <MovieLayout>
      <Header>
        <Close onPress={closeVideo} />
      </Header>
      <Player />
      <Detail {...props.movie} />
    </MovieLayout>
  );
};

const mapStateToProps = state => {
  return {
    movie: state.selectedMovie,
  };
};

export default connect(mapStateToProps)(Movie);
