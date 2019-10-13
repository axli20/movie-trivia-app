/* eslint-disable react/destructuring-assignment */

import React from 'react';
import {
  StyleSheet, Text, View, Image, TouchableHighlight,
} from 'react-native';
import { connect } from 'react-redux';
import MainBanner from '../components/banner';
import profile from '../img/profile.png';
import { fetchCategories, signoutUser, fetchLeaders } from '../actions';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.props.fetchLeaders(10);
  }

  onPlayPress = () => {
    const { navigation } = this.props;
    console.log('Play clicked');
    navigation.navigate('Categories');
  }

  onLeadersPress = () => {
    const { navigation } = this.props;
    navigation.navigate('Leaderboard');
  }

  onLogoutPress = () => {
    const { navigation } = this.props;
    this.props.signoutUser();
    navigation.popToTop();
  }

  render() {
    return (
      <View style={styles.container}>
        <MainBanner text="Movie Hole" scale="small" />
        <View style={styles.profile_component}>
          <Image style={styles.profilepic} source={profile} />
          <View style={styles.profile_component_box}>
            <View style={styles.grey_shade} />
            <View style={styles.user_info}>
              <Text style={styles.username}>{this.props.user.username}</Text>
              <Text style={styles.points}>{this.props.user.points}</Text>
            </View>
            <View style={styles.button_block}>
              <TouchableHighlight onPress={this.onPlayPress} style={styles.button}>
                <Text style={styles.buttonText}>Play</Text>
              </TouchableHighlight>
              <TouchableHighlight onPress={this.onLeadersPress} style={styles.button}>
                <Text style={styles.buttonText}>Leaders</Text>
              </TouchableHighlight>
              <TouchableHighlight onPress={this.onLogoutPress} style={styles.button}>
                <Text style={styles.buttonText}>Logout</Text>
              </TouchableHighlight>
            </View>
          </View>
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

const mapDispatchToProps = {
  fetchCategories,
  signoutUser,
  fetchLeaders,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#B22625',
  },
  profilepic: {
    borderWidth: 5,
    borderColor: 'white',
    width: 68,
    height: 68,
    borderRadius: 68 / 2,
    zIndex: 2,
    position: 'absolute',
  },
  profile_component: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 40,
  },
  profile_component_box: {
    zIndex: 1,
    backgroundColor: 'white',
    width: 350,
    height: 400,
    borderRadius: 10,
    marginTop: 34,
    justifyContent: 'space-between',
    shadowColor: 'black',
    shadowOffset: { height: 4, width: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  grey_shade: {
    backgroundColor: '#e0e0e0',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    height: 50,
  },
  user_info: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  button_block: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 36,
    backgroundColor: '#272A80',
    borderRadius: 23,
    shadowColor: 'black',
    shadowOffset: { height: 4, width: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
  username: {
    fontSize: 30,
    color: '#272A80',
  },
  points: {
    fontSize: 60,
    color: '#832232',
    fontFamily: 'Didot-Bold',
  },
});
