/* eslint-disable react/destructuring-assignment */

import React from 'react';
import {
  StyleSheet, Text, View, TextInput, TouchableHighlight,
} from 'react-native';
import { connect } from 'react-redux';
import { signupUser } from '../actions';
import SubBanner from '../components/subBanner';

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = { username: '', email: '', password: '' };
  }

  onSignUpPress = () => {
    const { navigation } = this.props;
    this.props.signupUser(this.state, navigation);
  }

  render() {
    return (
      <View style={styles.container}>
        <SubBanner text="Profile" />
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="username" onChangeText={(username) => { this.setState({ username }); }} />
          <TextInput style={styles.input} placeholder="email" onChangeText={(email) => { this.setState({ email }); }} />
          <TextInput style={styles.input} placeholder="password" onChangeText={(password) => { this.setState({ password }); }} />
        </View>
        <TouchableHighlight onPress={this.onSignUpPress} style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    authenticated: reduxState.auth.authenticated,
  };
}

const mapDispatchToProps = {
  signupUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#B22625',
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 120,
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
  input: {
    width: 200,
    height: 30,
    backgroundColor: 'white',
    padding: 6,
    margin: 4,
    borderRadius: 4,
  },
  inputContainer: {
    margin: 14,
  },
});
