import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const Suggestion = props => {
  const {title, year, rating, medium_cover_image, genres, onPress} = props;
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.left}>
        <Image style={styles.cover} source={{uri: medium_cover_image}} />
        <View style={styles.genre}>
          <Text style={styles.genreText}>{genres[0]}</Text>
        </View>
      </View>
      <View style={styles.right}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.year}>{year}</Text>
        <Text style={styles.rating}>{rating} Estrellas</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  genre: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'black',
    borderRadius: 6,
    paddingHorizontal: 7,
    paddingVertical: 5,
  },
  genreText: {
    color: 'white',
    fontSize: 11,
  },
  cover: {
    height: 150,
    width: 100,
    resizeMode: 'contain',
  },
  right: {
    paddingLeft: 10,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    color: '#44546b',
  },
  year: {
    backgroundColor: '#70b124',
    color: 'white',
    paddingVertical: 4,
    paddingHorizontal: 6,
    fontSize: 11,
    borderRadius: 5,
    overflow: 'hidden',
    alignSelf: 'flex-start',
  },
  rating: {
    color: '#6b6b6b',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default Suggestion;
