import React,{Fragment,useEffect,useState} from 'react'
import BookList from './BookList'
import BookInfo  from './BookInfo'
import {getBook} from '../../store/bookSlice'
import {useSelector,useDispatch} from 'react-redux'
function BookContainer(){
    const [bookInfo,setBooks]=useState({})
  const dispatch=useDispatch()
  const globalState=useSelector((state)=>{
      return state
  })  
  useEffect(()=>{
      dispatch(getBook())
  },[dispatch]) 

  const getBookInfo=(id)=>{
      const books=globalState.book.books;
      const selectedBook=books.find((item)=>item.id==id)
      //console.log(selectedBook)
      setBooks({...bookInfo,...selectedBook})
      
  }
    
    return(
       <Fragment>
           <hr className="my-5"/>
           <div className="row">
                <div className="col">
                    <BookList globalState={globalState} getBookInfo={getBookInfo} />
                </div>
                <div className="col">
                    <BookInfo bookInfo={bookInfo}/>
                </div>
            </div>
       </Fragment>
        
            
    )
}
export default BookContainer