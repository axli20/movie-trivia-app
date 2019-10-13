import React from 'react';
import {
  StyleSheet, Text, View,
} from 'react-native';
import VideoCamIcon from './videoCamIcon';

const AnswerComponent = (props) => {
  const { letter, ans } = props;
  return (
    <View style={styles.container}>
      <VideoCamIcon letter={letter} />
      <Text>{ans}</Text>
    </View>
  );
};

export default AnswerComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 300,
  },
});
