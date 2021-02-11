import { createStore } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import rootReducer from './index';

const configureStore = () => createStore(rootReducer);

const wrapper = createWrapper(configureStore);

export default wrapper;