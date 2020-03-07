import React, {useState} from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import API from '../../../utils/api';

const Search = props => {
  const [text, setText] = useState('');

  const handleSubmit = async () => {
    const movieSearchResult = await API.searchMovie(text);
    props.dispatch({
      type: 'SET_MOVIE_SEARCH_RESULT',
      payload: {movieSearchResult},
    });
  };

  const handleChangeText = textInput => {
    setText(textInput);
    if (textInput === '') {
      props.dispatch({
        type: 'SET_MOVIE_SEARCH_RESULT',
        payload: {movieSearchResult: null},
      });
    }
  };

  return (
    <TextInput
      placeholder="Busca tu pelicula favorita"
      underlineColorAndroid="transparent"
      autoCorrect={false}
      autoCapitalize="none"
      onSubmitEditing={handleSubmit}
      onChangeText={handleChangeText}
      style={styles.input}
      clearButtonMode="always"
    />
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 15,
    fontSize: 15,
    borderWidth: 1,
    borderColor: '#eaeaea',
  },
});

export default connect(null)(Search);
