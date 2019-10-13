import { ActionTypes } from '../actions';

const GameReducer = (state = {
  playing: false, questionsFinished: 0, questions: null, category: null, categories: null, numCorrect: 0, leaders: null,
}, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_CATEGORIES:
      return Object.assign({}, state, {
        categories: action.payload.categories,
      });
    case ActionTypes.SELECT_CATEGORY:
      return Object.assign({}, state, {
        category: action.payload.category,
      });
    case ActionTypes.GAME_START:
      console.log('from reducer', action.payload.questions);
      return Object.assign({}, state, {
        playing: true,
        questionsFinished: 0,
        questions: action.payload.questions,
      });
    case ActionTypes.GAME_END:
      return Object.assign({}, state, {
        playing: false,
        questionsFinished: 0,
        questions: null,
      });
    case ActionTypes.NEXT_QUESTION:
      if (action.payload.correct) {
        return Object.assign({}, state, {
          questionsFinished: state.questionsFinished + 1,
          numCorrect: state.numCorrect + 1,
        });
      }
      return Object.assign({}, state, {
        questionsFinished: state.questionsFinished + 1,
      });
    case ActionTypes.FETCH_LEADERS:
      return Object.assign({}, state, {
        leaders: action.payload.leaders,
      });
    default:
      return state;
  }
};

export default GameReducer;
