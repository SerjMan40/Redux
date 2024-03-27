import {ActionTypes} from './actionsTypes'
import { CounterAction } from './types'

export const increment = (): CounterAction => ({type: ActionTypes.INCREMENT})
export  const decrement = (): CounterAction => ({type: ActionTypes.DECREMENT})