/* eslint-disable consistent-return */
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from '../containers/home';
import Categories from '../containers/categories';
import Action from '../containers/action';
import Countdown from '../containers/countdown';
import Question from '../containers/question';
import Result from '../components/result';
import End from '../containers/end';
import Entry from '../containers/entry';
import SignUp from '../containers/signup';
import SignIn from '../containers/signin';
import Leaderboard from '../containers/leaderboard';
// import IosFonts from '../components/fonts';

const StackNav = createStackNavigator({
  // keys are the names of the "routes"
  // IosFonts: {
  //   screen: IosFonts,
  //   navigationOptions: {
  //     header: null,
  //   },
  // },
  Entry: {
    screen: Entry,
    navigationOptions: {
      header: null,
    },
  },
  Leaderboard: {
    screen: Leaderboard,
    navigationOptions: {
      header: null,
    },
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      header: null,
    },
  },
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      header: null,
    },
  },
  Home: {
    screen: Home,
    navigationOptions: {
      header: null,
    },
  },
  Categories: {
    screen: Categories,
    navigationOptions: {
      header: null,
    },
  },
  Action: {
    screen: Action,
    navigationOptions: {
      header: null,
    },
  },
  Countdown: {
    screen: Countdown,
    navigationOptions: {
      header: null,
    },
  },
  Question: {
    screen: Question,
    navigationOptions: {
      header: null,
    },
  },
  Result: {
    screen: Result,
    navigationOptions: {
      header: null,
    },
  },
  End: {
    screen: End,
    navigationOptions: {
      header: null,
    },
  },
});

const App = createAppContainer(StackNav);

export default App;
