import {Fragment} from 'react'
import styled from 'styled-components'
function BookInfo({bookInfo}){
    const {title,price,description}=bookInfo
    return(
        <Fragment>
            <h2>Book Detail</h2>
            {
                Object.values(bookInfo).length>0?
                (<DivWrapper>
                    <p className='fw-bold p'><span className="span font-weight-bold">Title:</span>{title}</p><hr className="p-2"/>
                    <p className='fw-light p  ' ><span className="span font-weight-bold ">Price:</span>{price}</p><hr className="p-2" />
                    <p className='fst-italic p '><span className="span font-weight-bold" >Description:</span>{description}</p>
                </DivWrapper>):
                (<div className="alert alert-secondary" role="alert">
                   There is no post selected yet. Please select!
                 </div>)
            }
            
            
            
        </Fragment>
    )
}
const DivWrapper=styled.div`
font-size:1.3rem;
.p{
    color:#999999;
    
}
.span{
    color:#1e90ff;
    font-style:italic;
}
`
export default BookInfo