import React from 'react';
import {
  StyleSheet, Text, View,
} from 'react-native';

const getFactor = (scale) => {
  switch (scale) {
    case 'small':
      return 0.5;
    case 'large':
      return 1;
    default:
      return 1;
  }
};

const MainBanner = (props) => {
  const { text, scale } = props;

  const reductionFactor = getFactor(scale);

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
      width: 320 * reductionFactor,
      height: 80 * reductionFactor,
      zIndex: 0,
      backgroundColor: '#FFD542',
      transform: [{ rotate: '-4deg' }],
      borderRadius: 10 * reductionFactor,
    },
    frontPanel: {
      position: 'absolute',
      width: 320 * reductionFactor,
      height: 80 * reductionFactor,
      zIndex: 1,
      backgroundColor: 'white',
      transform: [{ rotate: '4deg' }],
      borderRadius: 10 * reductionFactor,
    },
    overlayText: {
      position: 'absolute',
      fontSize: 50 * reductionFactor,
      zIndex: 2,
      fontFamily: 'Didot-Bold',
    },
  });

  return (
    <View style={styles.bannerComponent}>
      <Text style={styles.overlayText}>{text}</Text>
      <View style={styles.frontPanel} />
      <View style={styles.backPanel} />
    </View>
  );
};

export default MainBanner;
