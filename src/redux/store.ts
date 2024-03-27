import {configureStore} from '@reduxjs/toolkit'
import counterReductor from './reductor'

const store = configureStore({
  reducer: counterReductor,
})

export default store
