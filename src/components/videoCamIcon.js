import React from 'react';
import {
  StyleSheet, Text, View, Image,
} from 'react-native';
import videoCam from '../img/VideoCam.png';

const VideoCamIcon = (props) => {
  const { letter } = props;
  return (
    <View style={styles.mainContainer}>
      <Image style={styles.img} source={videoCam} />
      <Text style={styles.overlayText}>{letter}</Text>
    </View>
  );
};

export default VideoCamIcon;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    zIndex: 0,
  },
  overlayText: {
    position: 'absolute',
    zIndex: 1,
    color: 'white',
    fontSize: 16,
  },
});
