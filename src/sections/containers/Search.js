import React, {useState} from 'react';
import {TextInput, StyleSheet} from 'react-native';

const Search = () => {
  const [text, setText] = useState('');

  const handleSubmit = () => {
    console.log(text);
  };

  const handleChangeText = textInput => {
    setText(textInput);
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

export default Search;
