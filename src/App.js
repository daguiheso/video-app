import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';
import Home from './screens/containers/Home';
import Header from './sections/components/Header';
import CategoryList from './videos/containers/CategoryList';
import SuggestionList from './videos/containers/SuggestionList';
import API from '../utils/api';
import Movie from './screens/containers/Movie';

const AppLayout = props => {
  useEffect(() => {
    getSuggestionList();
    getCategoryList();
  }, []);

  const getSuggestionList = async () => {
    const suggestionList = await API.getSeggestion(10);
    props.store.dispatch({
      type: 'SET_SUGGESTION_LIST',
      payload: {suggestionList},
    });
  };

  const getCategoryList = async () => {
    const categoryList = await API.getMovies();
    props.store.dispatch({
      type: 'SET_CATEGORY_LIST',
      payload: {categoryList},
    });
  };

  if (props.selectedMovie) return <Movie />;
  return (
    <Home>
      <Header />
      <Text>Buscador</Text>
      <Text>Sugerencias</Text>
      <CategoryList />
      <SuggestionList />
    </Home>
  );
};

const mapStateToProps = state => {
  return {
    selectedMovie: state.selectedMovie,
  };
};

export default connect(mapStateToProps)(AppLayout);
