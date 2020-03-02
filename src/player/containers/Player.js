import React from 'react';
import {View, StyleSheet} from 'react-native';
import Video from 'react-native-video';
import PlayerLayout from '../components/PlayerLayout';

const Player = () => {
  return (
    <PlayerLayout
      video={
        <Video
          source={{uri: 'http://techslides.com/demos/sample-videos/small.mp4'}}
          style={styles.video}
          resizeMode="contain"
        />
      }
    />
  );
};

const styles = StyleSheet.create({
  video: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});

export default Player;
