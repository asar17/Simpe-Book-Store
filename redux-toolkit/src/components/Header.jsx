import {useSelector,useDispatch} from 'react-redux'
import React from 'react'
import {logInOut} from '../store/authSlice'


function Header(){
    const dispatch=useDispatch()
    const globalState=useSelector((state)=>{
        return state
    })
    const error=globalState.book.error
    const isLogged=globalState.auth.isLogged;

    return(
        <React.Fragment>
            {
                error&&(
                    <div className="alert alert-danger mb-0" role="alert">
                        <h2>{error}</h2>
                    </div>
                )
            }
            <nav className="navbar navbar-dark bg-dark">
                <span className="navbar-brand h1">Books</span>
        <button className="btn btn-outline-primary" type="submit" onClick={()=>{dispatch(logInOut(true))}}>{isLogged?'log-Out':'log-In'}</button>
            </nav>
        </React.Fragment>
        
    )
}
export default Header