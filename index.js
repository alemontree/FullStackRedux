"use strict";
import makeStore from './src/store';
import { PORT, startServer } from './src/server';

export const store = makeStore();
startServer(store);
console.log(`listening on port ${PORT}`);

store.dispatch({
  type: 'SET_ENTRIES',
  entries: require('./entries.json')
});
store.dispatch({type: 'NEXT'});
