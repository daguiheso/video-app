import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Separator = props => {
  const {color} = props;
  const defineBorder = () => {
    return {borderTopColor: color ? color : '#eaeaea'};
  };

  return <View style={[styles.separator, defineBorder()]} />;
};

const styles = StyleSheet.create({
  separator: {
    borderTopWidth: 1,
  },
});

export default Separator;
