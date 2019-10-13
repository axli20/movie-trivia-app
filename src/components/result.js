/* eslint-disable react/destructuring-assignment */

import React from 'react';
import {
  StyleSheet, View, Button,
} from 'react-native';
import { connect } from 'react-redux';
import Correct from './correct';
import Incorrect from './incorrect';
import { nextQuestion, endGame } from '../actions';

class Result extends React.Component {
  onContinuePress = (navigation) => {
    console.log('Continue clicked');
    this.props.nextQuestion(navigation.getParam('correct'));

    if (this.props.questionsFinished < 3) {
      navigation.pop();
    } else {
      let { numCorrect } = this.props;
      if (navigation.getParam('correct')) {
        numCorrect += 1;
      }
      navigation.navigate('End', { numCorrect });
    }
  };

  renderResult = () => {
    const {
      navigation,
    } = this.props;

    if (navigation.getParam('correct')) {
      return (
        <Correct letter={navigation.getParam('letter')} ans={navigation.getParam('ans')} question={navigation.getParam('question')} navigation={navigation} />
      );
    } else {
      return (
        <Incorrect letter={navigation.getParam('letter')} ans={navigation.getParam('ans')} question={navigation.getParam('question')} navigation={navigation} />
      );
    }
  }

  render() {
    const {
      navigation,
    } = this.props;
    return (
      <View style={styles.container}>
        {this.renderResult()}
        <Button title="Continue" onPress={() => this.onContinuePress(navigation)} />
      </View>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    questionsFinished: reduxState.game.questionsFinished,
    numCorrect: reduxState.game.numCorrect,
  };
}

const mapDispatchToProps = {
  nextQuestion,
  endGame,
};

export default connect(mapStateToProps, mapDispatchToProps)(Result);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
