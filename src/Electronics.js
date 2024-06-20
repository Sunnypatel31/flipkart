import { useEffect, useState } from "react"
import { Table } from "react-bootstrap"
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
import { useNavigate } from "react-router-dom";


function Electronics()
{
    const [apidata,setData]=useState([])
    const navigate=useNavigate()
    useEffect (()=>
    {
        getData()
        
    //     fetch("https://fakestoreapi.com/products").then((result)=>
    //     {
    //         result.json().then((data)=>
    //         {
    //             console.log(data)
       //})
    //     })
    },[])
    function handleclick(pid)
    {
      const data={name:pid}
      navigate("/item",{state:data})
    }
    async function getData()
        {
            const data=await fetch("https://fakestoreapi.com/products/category/electronics")
            const data1=await data.json()
            setData(data1)
        }
   return(
    
     <div>
      <br></br>
      <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
        {
          apidata.map((item,i)=>
            <MDBCard key={i}>
              <center>
          <MDBCardImage
            src={item.image}
            alt='...'
            position='top' style={{width:"100px",height:"100px"}}
          />
          </center>
          <MDBCardBody>
            <MDBCardTitle>{item.title}</MDBCardTitle>
            <MDBCardTitle style={{color:"red"}}>{item.price*80}</MDBCardTitle>
            <MDBCardTitle style={{color:"green"}}>{item.category}</MDBCardTitle>
            <MDBCardText>
             {item.description.slice(0,200)}
            </MDBCardText>
            <MDBBtn onClick={()=>handleclick(item.id)}>View Details {item.id}</MDBBtn>
          </MDBCardBody>
        </MDBCard>
          )
        }
      <MDBCol>
       
      </MDBCol>
      </MDBRow>
      </div>
   )

}
     
       
export default Electronics