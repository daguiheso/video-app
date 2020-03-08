import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {Animated} from 'react-native';
import MovieLayout from '../components/MovieLayout';
import Player from '../../player/containers/Player';
import Header from '../../sections/components/Header';
import Close from '../../sections/components/Close';
import Detail from '../../videos/components/Detail';

const Movie = props => {
  const [opacity, setOpacity] = useState(new Animated.Value(0));
  const closeVideo = () => {
    props.dispatch({
      type: 'SET_SELECTED_MOVIE',
      payload: {
        movie: null,
      },
    });
  };
  useEffect(() => {
    Animated.timing(opacity, {toValue: 1, duration: 800}).start();
  }, []);
  return (
    <Animated.View style={{flex: 1, opacity}}>
      <MovieLayout>
        <Header>
          <Close onPress={closeVideo} />
        </Header>
        <Player />
        <Detail {...props.movie} />
      </MovieLayout>
    </Animated.View>
  );
};

const mapStateToProps = state => {
  return {
    movie: state.selectedMovie,
  };
};

export default connect(mapStateToProps)(Movie);
