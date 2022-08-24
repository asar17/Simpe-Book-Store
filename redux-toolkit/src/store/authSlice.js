import {createSlice} from '@reduxjs/toolkit'
const initialState={
    isLogged:false,
    userName:'athar mohamed elhaidary'
}
const authSlice=createSlice({
  name:'auth',
  initialState:initialState,
  reducers:{
      logInOut:(state,action)=>{
          state.isLogged=!state.isLogged
      }
  }
})

export default authSlice.reducer;
export const {logInOut}=authSlice.actions