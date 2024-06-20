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

function Jewelery()
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
        //console.log(pid)
        const data={name:pid}
        navigate("/item",{state:data})
    }
    async function getData()
        {
            const data=await fetch("https://fakestoreapi.com/products/category/jewelery")
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
     
       {/* <Table striped bordered hover variant="dark">
         <tbody>
            <tr>
                <td>ID</td>
                <td>Title</td>
                <td>Price</td>
                <td>Description</td>
                <td>Cat</td>
                <td>Image</td>
            </tr>
            {
                apidata.map((item)=>
                <tr>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>{item.description}</td>
                    <td>{item.category}</td>
                    <td><img src={item.image} width="200px" height="200px"></img></td>
                </tr>
                )
            }
         </tbody>
       </Table> */}
     {/* </div>
   )

} */}
export default Jewelery