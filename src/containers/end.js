/* eslint-disable react/jsx-one-expression-per-line */

import React from 'react';
import {
  StyleSheet, Text, View, Button,
} from 'react-native';
import ProfileScoreHeader from '../components/profile_score_header';

export default class End extends React.Component {
  onAgainPress = () => {
    console.log('Play again clicked');
  }

  onHomePress = (navigation) => {
    navigation.navigate('Home');
    console.log('Home clicked');
  }

  render() {
    const { navigation } = this.props;
    const numCorrect = navigation.getParam('numCorrect');

    return (
      <View style={styles.container}>
        <ProfileScoreHeader navigation={navigation} />
        <Text>Thats a wrap!</Text>
        <Text>{numCorrect}/4 Correct</Text>
        <Text>+{numCorrect * 5} stars</Text>
        <Button title="Play Again" onPress={this.onAgainPress} />
        <Button title="Home" onPress={() => { this.onHomePress(navigation); }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B22625',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
