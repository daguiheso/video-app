import React from 'react';
import {View, StyleSheet} from 'react-native';

const PlayerLayout = props => {
  return (
    <View style={styles.container}>
      <View style={styles.video}>{props.video}</View>
      <View style={styles.overlay}>{props.isLoading && props.loader}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: '56.25%',
  },
  video: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'black',
  },
  overlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PlayerLayout;
