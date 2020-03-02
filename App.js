import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import Home from './src/screens/containers/Home';
import Header from './src/sections/components/Header';
import SuggestionList from './src/videos/containers/SuggestionList';
import CategoryList from './src/videos/containers/CategoryList';
import API from './utils/api';
import Video from 'react-native-video';

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
      <View style={{flex: 1, height: 200,}}>
        <Video
          source={{uri:'http://techslides.com/demos/sample-videos/small.mp4'}}
          style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }}
          resizeMode="contain"
        />
      </View>
      <Text>Buscador</Text>
      <Text>Categorias</Text>
      <Text>Sugerencias</Text>
      <CategoryList list={categoryList} />
      <SuggestionList list={suggestionList} />
    </Home>
  );
};

export default App;
