import React from 'react';
import {TouchableHighlight, Text, StyleSheet} from 'react-native';

const Close = ({onPress}) => {
  return (
    <TouchableHighlight onPress={onPress} style={styles.container}>
      <Text style={styles.close}>X</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#14b739',
    borderRadius: 12,
    width: 25,
    height: 25,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  close: {
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Close;
