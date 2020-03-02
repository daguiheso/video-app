import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import Home from './src/screens/containers/Home';
import Header from './src/sections/components/Header';
import SuggestionList from './src/videos/containers/SuggestionList';
import CategoryList from './src/videos/containers/CategoryList';
import Player from './src/player/containers/Player';
import API from './utils/api';

const App: () => React$Node = () => {
  const [suggestionList, setSuggestionList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  useEffect(() => {
    getMovies();
    getCategories();
  }, []);

  const getMovies = async () => {
    const movies = await API.getSeggestion(10);
    setSuggestionList(movies);
  };

  const getCategories = async () => {
    const movies = await API.getMovies();
    setCategoryList(movies);
  };

  return (
    <Home>
      <Header />
      <Player />
      <Text>Buscador</Text>
      <Text>Categorias</Text>
      <Text>Sugerencias</Text>
      <CategoryList list={categoryList} />
      <SuggestionList list={suggestionList} />
    </Home>
  );
};

export default App;
