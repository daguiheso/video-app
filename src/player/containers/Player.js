import React, {useState} from 'react';
import {StyleSheet, ActivityIndicator} from 'react-native';
import Video from 'react-native-video';
import PlayerLayout from '../components/PlayerLayout';

const Player = () => {
  const [isLoading, setIsLoading] = useState(true);

  const onBuffer = ({isBuffering}) => {
    setIsLoading(isBuffering);
  };
  const onLoad = () => {
    setIsLoading(false);
  };

  return (
    <PlayerLayout
      isLoading={isLoading}
      video={
        <Video
          source={{uri: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'}}
          poster="https://static.wixstatic.com/media/b548e6_3fc9076bc99040d3857f006e8d389146~mv2.jpg"
          style={styles.video}
          resizeMode="contain"
          onBuffer={onBuffer}
          onLoad={onLoad}
        />
      }
      loader={<ActivityIndicator color="red" />}
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
