/* eslint-disable react/destructuring-assignment */
/* eslint-disable consistent-return */

import React from 'react';
import {
  StyleSheet, Text, View, Button,
} from 'react-native';
import { connect } from 'react-redux';
import ProfileScoreHeader from '../components/profile_score_header';
import { fetchLeaders } from '../actions';

class Leaderboard extends React.Component {
  constructor(props) {
    super(props);

    this.props.fetchLeaders(10);
  }

  onBackPress = (navigation) => {
    console.log('back clicked');
    navigation.pop();
  }

  renderLeader = (user) => {
    return (
      <Text key={user.id}>
        {user.username}
      </Text>
    );
  }

  renderAllLeaders = () => {
    const { leaders } = this.props;
    console.log(leaders);

    if (leaders != null) {
      return (
        leaders.map((user) => {
          return this.renderLeader(user);
        })
      );
    } else {
      return <Text>Loading</Text>;
    }
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <ProfileScoreHeader navigation={navigation} />
        <Text>Leaderboard</Text>
        {this.renderAllLeaders()}
        <Button title="Back" onPress={() => this.onBackPress(navigation)} />
      </View>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    leaders: reduxState.game.leaders,
  };
}

const mapDispatchToProps = {
  fetchLeaders,
};

export default connect(mapStateToProps, mapDispatchToProps)(Leaderboard);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B22625',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
