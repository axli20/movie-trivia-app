/* eslint-disable consistent-return */

import axios from 'axios';
import { AsyncStorage } from 'react-native';

export const ActionTypes = {
  FETCH_CATEGORIES: 'FETCH_CATEGORIES',
  SELECT_CATEGORY: 'SELECT_CATEGORY',
  GAME_START: 'GAME_START',
  GAME_END: 'GAME_END',
  NEXT_QUESTION: 'NEXT_QUESTION',
  AUTH_USER: 'AUTH_USER',
  DEAUTH_USER: 'DEAUTH_USER',
  AUTH_ERROR: 'AUTH_ERROR',
  SET_USER_INFO: 'SET_USER_INFO',
  ADD_POINTS: 'ADD_POINTS',
  FETCH_LEADERS: 'FETCH_LEADERS',
};

const LOCAL_URL = 'http://localhost:9090/api';

const setValue = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
    console.log(`successfully saved ${key}`);
  } catch (e) {
    console.log(`error saving ${key}`);
  }
};

const removeValue = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
    console.log(`successfully removed ${key}`);
  } catch (e) {
    console.log(`error removing ${key}`);
  }
};

export function fetchCategories() {
  return (dispatch) => {
    axios.get(`${LOCAL_URL}/categories`)
      .then((response) => {
        dispatch({ type: ActionTypes.FETCH_CATEGORIES, payload: { categories: response.data } });
      })
      .catch((error) => {
        console.log('error fetching categories:', error);
      });
  };
}

export function selectCategory(category) {
  return (dispatch) => {
    dispatch({ type: ActionTypes.SELECT_CATEGORY, payload: { category } });
  };
}

export function startGame(category, difficulty, number) {
  return (dispatch) => {
    AsyncStorage.getItem('token')
      .then((token) => {
        if (token !== null) {
          console.log('token', token);
          axios.get(`${LOCAL_URL}/questions`, { headers: { authorization: token }, params: { category, difficulty, number } })
            .then((response) => {
              console.log('response data from index size', response.data.length);
              dispatch({ type: ActionTypes.GAME_START, payload: { questions: response.data } });
            })
            .catch((error) => {
              console.log('error retrieving questions:', error);
            });
        }
      })
      .catch((error) => {
        console.log('error getting token', error);
      });
  };
}

export function nextQuestion(correct) {
  return (dispatch) => {
    dispatch({ type: ActionTypes.NEXT_QUESTION, payload: { correct } });
  };
}

export function endGame() {
  return (dispatch) => {
    dispatch({ type: ActionTypes.GAME_END });
  };
}

// trigger to deauth if there is error
// can also use in your error reducer if you have one to display an error message
export function authError(error) {
  removeValue('token');
  removeValue('user');
  return {
    type: ActionTypes.AUTH_ERROR,
    message: error,
  };
}

export function signinUser({ email, password }, navigation) {
  return (dispatch) => {
    axios.post(`${LOCAL_URL}/signin`, { email, password })
      .then((response) => {
        dispatch({ type: ActionTypes.AUTH_USER, payload: { user: response.data.user } });
        setValue('token', response.data.token);
        setValue('user', JSON.stringify(response.data.user));
        navigation.navigate('Home');
      })
      .catch((error) => {
        console.log('sign in error', error);
        dispatch(authError(`Sign In Failed: ${error.response.data}`));
      });
  };
}

export function signupUser({ username, email, password }, navigation) {
  return (dispatch) => {
    axios.post(`${LOCAL_URL}/signup`, { username, email, password })
      .then((response) => {
        dispatch({ type: ActionTypes.AUTH_USER, payload: { user: response.data.user } });
        setValue('token', response.data.token);
        setValue('user', JSON.stringify(response.data.user));
        navigation.navigate('Home');
      })
      .catch((error) => {
        dispatch(authError(`Sign Up Failed: ${error.response.data}`));
      });
  };
}


// deletes token from asyncstorage
// and deauths
export function signoutUser() {
  return (dispatch) => {
    removeValue('token');
    removeValue('user');
    dispatch({ type: ActionTypes.DEAUTH_USER });
  };
}

export function setUserInfo() {
  return (dispatch) => {
    AsyncStorage.getItem('token')
      .then((token) => {
        if (token !== null) {
          axios.post(`${LOCAL_URL}/signinWithJWT`, null, { headers: { authorization: token } })
            .then((response) => {
              dispatch({ type: ActionTypes.AUTH_USER, payload: { user: response.data.user } });
            })
            .catch((error) => {
              console.log('error setting user info:', error);
            });
        }
      })
      .catch((error) => {
        console.log('error getting token', error);
      });
  };
}

export function addPoints(newPoints, userId) {
  console.log(`adding ${newPoints} points`);
  return (dispatch) => {
    AsyncStorage.getItem('token')
      .then((token) => {
        if (token !== null) {
          axios.put(`${LOCAL_URL}/addPoints`, { newPoints, userId }, { headers: { authorization: token } })
            .then((response) => {
              console.log('new point total', response.data.user.points);
              dispatch({ type: ActionTypes.AUTH_USER, payload: { user: response.data.user } });
            })
            .catch((error) => {
              console.log('error adding points:', error);
            });
        }
      })
      .catch((error) => {
        console.log('error getting token', error);
      });
  };
}

export function fetchLeaders(number) {
  console.log('hitting fetch');
  return (dispatch) => {
    axios.get(`${LOCAL_URL}/leaders`, { params: { number } })
      .then((response) => {
        console.log('leaders', response.data);
        dispatch({ type: ActionTypes.FETCH_LEADERS, payload: { leaders: response.data } });
      })
      .catch((error) => {
        console.log('error fetching leaders:', error);
      });
  };
}
