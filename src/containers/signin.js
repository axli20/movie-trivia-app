/* eslint-disable react/destructuring-assignment */

import React from 'react';
import {
  StyleSheet, View, TouchableHighlight, TextInput, Text,
} from 'react-native';
import { connect } from 'react-redux';
import { signinUser } from '../actions';
import SubBanner from '../components/subBanner';

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = { email: '', password: '' };
  }

  onSignInPress = () => {
    const { navigation } = this.props;
    this.props.signinUser(this.state, navigation);
  }

  render() {
    return (
      <View style={styles.container}>
        <SubBanner text="Movie Hole" />
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder="email" onChangeText={(email) => { this.setState({ email }); }} />
          <TextInput style={styles.input} placeholder="password" onChangeText={(password) => { this.setState({ password }); }} />
        </View>
        <TouchableHighlight onPress={this.onSignInPress} style={styles.button}>
          <Text style={styles.buttonText}>Sign In</Text>
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
  signinUser,
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
