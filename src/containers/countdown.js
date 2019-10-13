import React from 'react';
import {
  StyleSheet, Text, View, Image,
} from 'react-native';
import countdownGif from '../img/Countdown.gif';
import ProfileScoreHeader from '../components/profile_score_header';

export default class Countdown extends React.Component {
  state = { processId: null }

  componentDidMount() {
    const { navigation } = this.props;
    this.setState({
      processId: setTimeout(() => {
        navigation.navigate('Question');
      }, 2000),
    });
  }

  componentWillUnmount() {
    const { processId } = this.state;
    clearTimeout(processId);
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <ProfileScoreHeader navigation={navigation} />
        <Text>Get Ready!</Text>
        <Image source={countdownGif} />
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
