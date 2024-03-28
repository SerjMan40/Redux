import {ThunkAction} from '@reduxjs/toolkit'
import {ActionTypes} from './actionsTypes'

export type CounterState = {
  count: number
}

export type CounterAction =
  | {type: ActionTypes.INCREMENT}
  | {type: ActionTypes.DECREMENT}

export type AsyncCounterAction = ThunkAction<
  void,
  CounterState,
  unknown,
  CounterAction
>

export type RootState = {
  counter: CounterState
}
