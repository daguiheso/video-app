import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
import Home from './src/screens/containers/Home';
import Header from './src/sections/components/Header';
import SuggestionList from './src/videos/containers/SuggestionList';
import API from './utils/api';

const App: () => React$Node = () => {
  const [suggestionList, setSuggestionList] = useState([]);
  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    const movies = await API.getSeggestion(10);
    setSuggestionList(movies);
  };

  return (
    <Home>
      <Header />
      <Text>Buscador</Text>
      <Text>Categorias</Text>
      <Text>Sugerencias</Text>
      <SuggestionList list={suggestionList} />
    </Home>
  );
};

export default App;
