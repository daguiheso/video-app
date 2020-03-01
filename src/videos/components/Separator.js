import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Separator = props => {
  const {color, isVertical = false} = props;
  const defineBorder = () => {
    return {borderTopColor: color ? color : '#eaeaea'};
  };
  if (isVertical) return <View style={styles.vertical} />;
  return <View style={[styles.horizontal, defineBorder()]} />;
};

const styles = StyleSheet.create({
  horizontal: {
    borderTopWidth: 1,
  },
  vertical: {
    marginHorizontal: 15,
  },
});

export default Separator;
