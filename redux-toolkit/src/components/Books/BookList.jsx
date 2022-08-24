import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {deleteBook} from '../../store/bookSlice'
import Swal from "sweetalert2";  

function BookList({globalState,getBookInfo}){
    const dispatch=useDispatch()
    const {books}=globalState.book
    const [waiting,setWaiting]=useState(globalState.book.waiting);
    const isLogged=globalState.auth.isLogged
   
    if(waiting===true){
        setTimeout(()=>{
             setWaiting(false)
        },5000)
    }
   
    return(
        <div>
            <h2>Book List</h2>
            {
                waiting?
                (<p>loading....</p>):
                (books?.map((book)=>(
                    <ul className='list-group' key={book.id}>
                     <li className="list-group-item justify-content-between d-flex align-items-center" >
                        <div style={{color:'#999999',fontSize:'1.3rem'}}>{book.title}</div>
                        <div className="btn-group" role="group">
                            <button type="button" className="btn btn-primary" disabled={!isLogged}
                              onClick={()=>getBookInfo(book.id)}
                            >Read
                            </button>
                            <button type="button" className="btn btn-danger" disabled={!isLogged} 
                            onClick={()=>dispatch(deleteBook(book))
                                .unwrap()
                                .then((originalPromiseResult)=>{
                                    const {user,title}=originalPromiseResult
                                    Swal.fire({  
                                        title: `Dear:${user}<br>Are you sure?`,  
                                        text:`you will delete TitleBook:${title}` ,  
                                        icon: 'warning',  
                                        confirmButtonColor: '#3085d6',  
                                        confirmButtonText: 'Yes!'  
                                      });
                                })
                                .catch((rejectedValueSerializedError)=>{
                                    console.log(rejectedValueSerializedError)

                                })
                            }>Delete</button>
                        </div>
                      </li>
                 </ul>

                ))
                 )
            }
              
                 
        </div>

    )
}
export default BookList