import {createStore} from 'redux';
import reducer from './reducers';

const store = createStore(reducer, {
  suggestionList: [],
  categoryList: [],
});

export default store;
