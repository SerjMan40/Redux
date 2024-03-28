import {UseDispatch, useDispatch, useSelector} from 'react-redux'
import {decrementAsync, incrementAsync} from '../redux/actions'
import {selectCount} from '../redux/selector'
import { ThunkDispatch } from '@reduxjs/toolkit'
import { CounterAction, CounterState } from '../redux/types'

const Counter = () => {
  const count = useSelector(selectCount)
  const dispatch = useDispatch<ThunkDispatch<CounterState, unknown, CounterAction>>()

  return (
    <div className='container d-flex flex-column align-items-center justify-content-center vh-100'>
      <h1 className='mt-4 display-1'>{count}</h1>
      <div className='mt-4 d-flex justify-content-center'>
        <button
          className='btn btn-danger me-4'
          onClick={() => dispatch(incrementAsync())}
        >
          Increment
        </button>
        <button
          className='btn btn-primary'
          onClick={() => dispatch(decrementAsync())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

export default Counter
