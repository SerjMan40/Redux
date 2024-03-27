import {useDispatch, useSelector} from 'react-redux'
import {decrement, increment} from '../redux/actions'
import { CounterState } from '../redux/types'

const Counter = () => {
  const count = useSelector((state: CounterState) => state.count)
  const dispatch = useDispatch()

  return (
    <div className='container d-flex flex-column align-items-center justify-content-center vh-100'>
      <h1 className="mt-4 display-1">{count}</h1>
      <div className='mt-4 d-flex justify-content-center'>
        <button
          className='btn btn-danger me-4'
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className='btn btn-primary'
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

export default Counter
