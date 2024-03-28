import {useSelector} from 'react-redux'
import {decrementAsync, incrementAsync} from '../redux/counterSlice'
import {useAppDispatch, RootState} from '../redux/store'

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.count)
  const dispatch = useAppDispatch()

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
      <p className='mt-5 fs-3' >Redux Toolkit Thunk and Slice </p>
    </div>
  )
}

export default Counter
