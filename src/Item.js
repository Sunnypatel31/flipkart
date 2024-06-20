import { useEffect, useState } from "react"
import Table from 'react-bootstrap/Table';
import React from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBBtn
} from 'mdb-react-ui-kit';
import { useLocation } from "react-router-dom";
function Item()
{
    const [apidata,setData]=useState({})
     const location=useLocation()
    useEffect(()=>{
        getData()
    },[])
    
    async function getData()
    {
        const data=await fetch("https://fakestoreapi.com/products/"+location.state.name)
       const data1=await data.json()
      // console.log(data1)
       setData(data1)
    }
    return(
        <div>
            <br></br>
          <center>
          <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
         {
            // apidata.map((item,i)=>
               
            // )

            <MDBCol >
            <MDBCard>
             <center>
             <MDBCardImage
                src={apidata.image} 
                alt='...'
                position='top' style={{width:"100px", height:"100px"}}
              />
             </center>
              <MDBCardBody>
                <MDBCardTitle>{apidata.title}</MDBCardTitle>
                <MDBCardTitle style={{color:"red"}}>{apidata.price*80} Rs</MDBCardTitle>
                <MDBCardTitle style={{color:"green"}}>{apidata.category}</MDBCardTitle>
                <MDBCardText>
                  {apidata.description}
                </MDBCardText>
              
               
                <MDBBtn>Buy Now</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
         }
    </MDBRow>
          </center>
        </div>
    )
}
export default Item