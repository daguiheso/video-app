import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {Provider} from 'react-redux';
import Home from './src/screens/containers/Home';
import Header from './src/sections/components/Header';
import SuggestionList from './src/videos/containers/SuggestionList';
import CategoryList from './src/videos/containers/CategoryList';
import Player from './src/player/containers/Player';
import API from './utils/api';
import store from './store';

const App: () => React$Node = () => {
  useEffect(() => {
    getSuggestionList();
    getCategoryList();
  }, []);

  const getSuggestionList = async () => {
    const suggestionList = await API.getSeggestion(10);
    store.dispatch({
      type: 'SET_SUGGESTION_LIST',
      payload: {suggestionList},
    });
  };

  const getCategoryList = async () => {
    const categoryList = await API.getMovies();
    store.dispatch({
      type: 'SET_CATEGORY_LIST',
      payload: {categoryList},
    });
  };

  return (
    <Provider store={store}>
      <Home>
        <Header />
        <Player />
        <Text>Buscador</Text>
        <Text>Sugerencias</Text>
        <CategoryList />
        <SuggestionList />
      </Home>
    </Provider>
  );
};

export default App;
