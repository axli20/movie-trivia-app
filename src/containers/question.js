/* eslint-disable react/destructuring-assignment */
import React from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import ProfileScoreHeader from '../components/profile_score_header';
import AnswerComponent from '../components/answerComponent';
import { addPoints } from '../actions';

class Question extends React.Component {
  onAnswerPress = (ans) => {
    const { navigation } = this.props;
    console.log(`${ans.text} clicked`);
    const { questions, questionsFinished } = this.props;
    const questionObj = questions[questionsFinished];
    let correct = false;
    if (questionObj.correct === ans.letter) {
      correct = true;
      const newPoints = this.props.user.points + 5;
      console.log('calculated points', newPoints);
      this.props.addPoints(newPoints, this.props.user.id);
    }
    navigation.navigate('Result', { letter: questionObj.correct, ans: questionObj[questionObj.correct.toLowerCase()], correct });
  }

  renderAnswer = (ans) => {
    return (
      <TouchableOpacity onPress={() => this.onAnswerPress(ans)} key={ans.letter}>
        <AnswerComponent letter={ans.letter} ans={ans.text} />
      </TouchableOpacity>
    );
  }

  renderAllAnswers = () => {
    const { questions, questionsFinished } = this.props;
    const questionObj = questions[questionsFinished];
    const answers = [{ letter: 'A', text: questionObj.a }, { letter: 'B', text: questionObj.b }, { letter: 'C', text: questionObj.c }, { letter: 'D', text: questionObj.d }];
    return (
      answers.map((ans) => {
        return this.renderAnswer(ans);
      })
    );
  }

  render() {
    const { navigation, questions, questionsFinished } = this.props;
    const questionHeader = `Question ${questionsFinished + 1}`;
    if (questions[questionsFinished]) {
      return (
        <View style={styles.container}>
          <ProfileScoreHeader navigation={navigation} />
          <Text>{questionHeader}</Text>
          <Text>{questions[questionsFinished].question}</Text>
          <View style={styles.answers}>
            {this.renderAllAnswers()}
          </View>
        </View>
      );
    } else {
      return (
        <Text>Out of questions!</Text>
      );
    }
  }
}

function mapStateToProps(reduxState) {
  return {
    questions: reduxState.game.questions,
    questionsFinished: reduxState.game.questionsFinished,
    user: reduxState.auth.user,
  };
}

const mapDispatchToProps = {
  addPoints,
};

export default connect(mapStateToProps, mapDispatchToProps)(Question);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B22625',
    alignItems: 'center',
    justifyContent: 'center',
  },
  answers: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
  },
});
