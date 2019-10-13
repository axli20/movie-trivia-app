/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-one-expression-per-line */

import React from 'react';
import {
  StyleSheet, Text, View, Image, TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import profile from '../img/profile.png';

class ProfileScoreHeader extends React.Component {
  onProfilePress = () => {
    const { navigation } = this.props;
    console.log('profile was pressed!');
    navigation.navigate('Home');
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.onProfilePress}>
          <Image style={styles.profilepic} source={profile} />
        </TouchableOpacity>
        <View>
          <Text>{this.props.user.points} stars</Text>
        </View>
      </View>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    user: reduxState.auth.user,
  };
}

export default connect(mapStateToProps, null)(ProfileScoreHeader);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profilepic: {
    borderWidth: 1,
    borderColor: 'white',
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
  },
});
