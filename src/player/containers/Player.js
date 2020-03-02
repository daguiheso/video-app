import React, {useState} from 'react';
import {StyleSheet, ActivityIndicator} from 'react-native';
import Video from 'react-native-video';
import PlayerLayout from '../components/PlayerLayout';
import ControlLayout from '../components/ControlLayout';
import PlayPause from '../components/PlayPause';

const Player = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const onBuffer = ({isBuffering}) => {
    setIsLoading(isBuffering);
  };
  const onLoad = () => {
    setIsLoading(false);
  };
  const playPause = () => {
    setIsPaused(!isPaused);
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
          paused={isPaused}
        />
      }
      loader={<ActivityIndicator color="red" />}
      controls={
        <ControlLayout>
          <PlayPause onPress={playPause} isPaused={isPaused} />
        </ControlLayout>
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
