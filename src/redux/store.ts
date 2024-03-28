import {
  Action,
  Dispatch,
  Middleware,
  MiddlewareAPI,
  configureStore,
} from '@reduxjs/toolkit'
import counterReductor, {initialState} from './reductor'
import {CounterAction, CounterState, RootState} from './types'

const logger: Middleware =
  (storeApi: MiddlewareAPI<Dispatch, RootState>) => (next) => (action) => {
    const prevState: number = storeApi.getState().counter.count
    const result = next(action)
    const nextState: number = storeApi.getState().counter.count
    console.log(prevState, nextState)
    return result
  }

const store = configureStore({
  reducer: {
    counter: (state: CounterState = initialState, action: Action) =>
      counterReductor(state, action as CounterAction),
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store
