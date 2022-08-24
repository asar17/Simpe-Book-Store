import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import {useSelector} from 'react-redux'
//to get data for all books
export const getBook=createAsyncThunk('book/getBook',async(_,thunkAPI)=>{
    const {rejectWithValue}=thunkAPI
    try{
        const res=await fetch('http://localhost:3003/books')
        const data=res.json()
        return data
    }
    catch(error){
        return rejectWithValue(error.message)
    }
})



//to insert book
export const insertBook=createAsyncThunk('book/insertBook',async(dataObj,thunkAPI)=>{
    const {rejectWithValue,getState}=thunkAPI

       try{
           dataObj.user=getState().auth.userName;
           const res=await fetch('http://localhost:3003/books',{
               method:'POST',
               body:JSON.stringify(dataObj),
               headers:{
                   'Content-type':'application/json; charset=UTF-8'
               }   
            })
            const data=res.json()
            return data
       }
       catch(error){
           return rejectWithValue(error.message)

       }
})

//to delete book
export const deleteBook=createAsyncThunk('book/deleteBook',async(items,thunkAPI)=>{
    const {rejectWithValue}=thunkAPI
    try{
        fetch(`http://localhost:3003/books/${items.id}`,{
            method:'DELETE',
            headers:{
                'Content-type':'application/json; charset=UTF-8'
            }
        })
       // const data=res.json()
       console.log(items)
        return items

    }
    catch(error){
        return rejectWithValue(error.message)
    }
})


const initialState={
    books:null,
    waiting:true,
    error:null
}
const bookSlice=createSlice({
    name:'book',
    initialState:initialState,
    extraReducers:{
        //get book
        [getBook.pending]:(state,action)=>{
            state.waiting=true
            state.error=null

        },
        [getBook.fulfilled]:(state,action)=>{
            state.waiting=false
            state.books=action.payload
        },
        [getBook.rejected]:(state,action)=>{
            state.waiting=false
            state.error=action.payload
            
        },

        //inset book
        [insertBook.pending]:(state,action)=>{
            state.waiting=true
            state.error=null

        },
        [insertBook.fulfilled]:(state,action)=>{
            state.waiting=false
            state.books.push(action.payload)
        },
        [insertBook.rejected]:(state,action)=>{
            state.waiting=false
            state.error=action.payload
            
        },

        //delete book
        [deleteBook.pending]:(state,action)=>{
            state.waiting=true
            state.error=null
        },
        [deleteBook.fulfilled]:(state,action)=>{
            state.waiting=false
            
            state.books=state.books.filter((item)=>{
                return item.id !==action.payload.id
            })
        },
        [deleteBook.rejected]:(state,action)=>{
            state.waiting=false
            state.error=action.payload
        }
    }
    
})
export default bookSlice.reducer;