import React, {useEffect} from 'react';
import {ScrollView} from 'react-native';
import {connect} from 'react-redux';
import Home from './screens/containers/Home';
import Header from './sections/components/Header';
import CategoryList from './videos/containers/CategoryList';
import SuggestionList from './videos/containers/SuggestionList';
import MovieSearchResultList from './videos/containers/MovieSearchResultList';
import Movie from './screens/containers/Movie';
import Search from './sections/containers/Search';
import API from '../utils/api';

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
      <Search />
      <CategoryList />
      <ScrollView>
        {props.suggestionList && !props.movieSearchResult && <SuggestionList />}
        {props.movieSearchResult && <MovieSearchResultList />}
      </ScrollView>
    </Home>
  );
};

const mapStateToProps = state => {
  return {
    selectedMovie: state.selectedMovie,
    suggestionList: state.suggestionList,
    movieSearchResult: state.movieSearchResult,
  };
};

export default connect(mapStateToProps)(AppLayout);
