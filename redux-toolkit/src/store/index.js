import bookReducer from './bookSlice'
import authReducer from './authSlice'
import {configureStore} from '@reduxjs/toolkit'
const store =configureStore({reducer:{book:bookReducer,auth:authReducer}});
export default store