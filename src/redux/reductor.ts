import {ActionTypes} from './actionsTypes'
import {CounterAction, CounterState} from './types'

const initialstate: CounterState = {
  count: 0
}

const counterReductor = (
  state: CounterState = initialstate,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return {count: state.count + 1}
    case ActionTypes.DECREMENT:
      return {count: state.count - 1}
    default:
      return state
  }
}

export default counterReductor
