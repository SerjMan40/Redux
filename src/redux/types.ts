import { ActionTypes } from "./actionsTypes"

export type CounterState = {
  count: number
}

export type CounterAction = {type: ActionTypes.INCREMENT} | {type: ActionTypes.DECREMENT}
