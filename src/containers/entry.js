/* eslint-disable consistent-return */
/* eslint-disable react/destructuring-assignment */

import React from 'react';
import {
  StyleSheet, View, Image, Text, TouchableHighlight,
} from 'react-native';
import { connect } from 'react-redux';
import MainBanner from '../components/banner';
import { setUserInfo } from '../actions';
import lettering from '../img/Lettering.png';
import cutscene from '../img/CutScene.png';

class Entry extends React.Component {
  componentDidUpdate = () => {
    const { navigation, authenticated } = this.props;
    if (authenticated) {
      this.props.setUserInfo();
      navigation.navigate('Home');
    }
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Image source={cutscene} style={styles.cutscene} />
        <MainBanner text="Movie Hole" />
        <Image source={lettering} style={styles.lettering} />
        <TouchableHighlight onPress={() => { navigation.navigate('SignUp'); }} style={styles.button}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => { navigation.navigate('SignIn'); }} style={styles.button}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableHighlight>
      </View>
    );
  }
  // }
}

function mapStateToProps(reduxState) {
  return {
    authenticated: reduxState.auth.authenticated,
  };
}

const mapDispatchToProps = {
  setUserInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Entry);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#B22625',
  },
  lettering: {
    width: 350,
    height: 70,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  cutscene: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    margin: 20,
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 180,
    height: 46,
    backgroundColor: 'white',
    borderRadius: 23,
    shadowColor: 'black',
    shadowOffset: { height: 4, width: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    margin: 10,
  },
  buttonText: {
    fontSize: 18,
  },
});
