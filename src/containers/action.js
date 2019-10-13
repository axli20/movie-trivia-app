/* eslint-disable react/destructuring-assignment */

import React from 'react';
import {
  StyleSheet, Text, View, Button,
} from 'react-native';
import { connect } from 'react-redux';
import ProfileScoreHeader from '../components/profile_score_header';
import { startGame } from '../actions';

class Action extends React.Component {
  onActionPress = (navigation) => {
    console.log('action clicked');
    this.props.startGame(this.props.category, 1, 4);
    navigation.navigate('Countdown');
  }

  onBackPress = (navigation) => {
    console.log('back clicked');
    navigation.pop();
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <ProfileScoreHeader navigation={navigation} />
        <Text>Category Name as title</Text>
        <Button title="Action!" onPress={() => this.onActionPress(navigation)} />
        <Button title="Back" onPress={() => this.onBackPress(navigation)} />
      </View>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    category: reduxState.game.category,
  };
}

const mapDispatchToProps = {
  startGame,
};

export default connect(mapStateToProps, mapDispatchToProps)(Action);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B22625',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
