import { createStore } from 'redux';

import rootReducer from 'store/reducers';

const appStore = createStore(rootReducer);

export default appStore;
