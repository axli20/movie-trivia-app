import React from 'react';
import {
  StyleSheet, Text, View,
} from 'react-native';

const MainBanner = (props) => {
  const { text } = props;

  return (
    <View style={styles.bannerComponent}>
      <Text style={styles.overlayText}>{text}</Text>
      <View style={styles.frontPanel} />
      <View style={styles.backPanel} />
    </View>
  );
};

const styles = StyleSheet.create({
  bannerComponent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 85,
  },
  backPanel: {
    position: 'absolute',
    width: 220,
    height: 60,
    zIndex: 0,
    backgroundColor: '#FFD542',
    transform: [{ rotate: '4deg' }],
    borderRadius: 8,
  },
  frontPanel: {
    position: 'absolute',
    width: 220,
    height: 60,
    zIndex: 1,
    backgroundColor: 'white',
    transform: [{ rotate: '-4deg' }],
    borderRadius: 8,
    borderColor: '#FFD542',
    borderWidth: 4,
  },
  overlayText: {
    position: 'absolute',
    fontSize: 30,
    zIndex: 2,
    fontFamily: 'Didot-Bold',
  },
});

export default MainBanner;
