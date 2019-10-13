import React from 'react';
import {
  StyleSheet, Text, View,
} from 'react-native';
import ProfileScoreHeader from './profile_score_header';
import AnswerComponent from './answerComponent';

const Correct = (props) => {
  const {
    letter, ans, question, navigation,
  } = props;

  return (
    <View style={styles.container}>
      <ProfileScoreHeader navigation={navigation} />
      <Text>{question}</Text>
      <Text>Correct Answer!</Text>
      <Text>+5 stars</Text>
      <AnswerComponent letter={letter} ans={ans} />
    </View>
  );
};

export default Correct;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
