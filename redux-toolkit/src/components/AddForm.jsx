import {useRef} from 'react'
import {useDispatch} from 'react-redux'
import {insertBook} from '../store/bookSlice'
import {useSelector} from 'react-redux'
import Swal from "sweetalert2";  
import styled from 'styled-components'

function AddForm(){
    const globalState=useSelector((state)=>{
       return state
    })
    console.log("g",globalState)
    const isLogged=globalState.auth.isLogged
    const dispatch=useDispatch()
    const title=useRef(null);
    const price=useRef(null);
    const description=useRef(null);
    const handleData=(e)=>{
         const doc={
             title:title?.current?.value,
             price:price?.current?.value,
             description:description?.current?.value,

         }
         dispatch(insertBook(doc))
         .unwrap()
         .then((originalPromiseResult)=>{
             const {user,title,price,description}=originalPromiseResult
             Swal.fire({  
                icon: 'success',  
                title: `<h4>Hello:${user}<br>you add<br> TitelBook:${title}<br>PriceBook:${price}<br>Description:${description}</h4>`,  
                showConfirmButton:true,
                confirmButtonColor: '#1e90ff'

              }); 
         })
         .catch((rejectedValueSerializedError)=>{
             console.log(rejectedValueSerializedError)
         })
        
        e.preventDefault()
        title.current.value=null
        price.current.value=null
        description.current.value=null
    }
    

    return(
        
        <div className='row'>
            <div className='col-6 offset-3 mt-3'>
                <h2>Insert Book</h2>
                <form onSubmit={handleData}>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" className="form-control" id="title" required ref={title}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Price</label>
                        <input type="number" className="form-control" id="price" required ref={price}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="desc">Description</label>
                        <textarea className="form-control" rows="3" id="desc" ref={description}></textarea>
                    </div>
                    <button className="btn btn-primary" type="submit" disabled={!isLogged}  >Submit</button>
                </form>
            
            </div>
        </div>
        
    )
}
// const BtnWrapper=styled.button`
//     background-color:#5252ff;
//     color:white

// `;

export default AddForm