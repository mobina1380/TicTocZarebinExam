import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga';
// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
  
  },
  middleware: [sagaMiddleware, ]
});

export default function configureAppStore(){
  sagaMiddleware.run(rootSaga)
  return {store}
}

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
