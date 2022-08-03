import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Button,Table} from 'react-bootstrap'
import Login from './Login';
export default function Tables() {
    let [userss,setUserss]=useState([]);
    const fetchData=()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUserss(data);
      })
    }
    console.log(userss);

    useEffect(()=>{
        fetchData();
    },[])
    
    const [change,setChange]=useState(false)
     const submit=()=>{
        setChange(true)
     }
    return (

        <>
    
       {change?<Login/>:
      
      <Table >
      <thead>
        <tr>
          <th>user id</th>
          <th>id</th>
          <th>tittle</th>
          <th>completed</th>
        </tr>
      </thead>
      <tbody>
        {userss.map((items,i)=>{
            return(
                <tr key={i}>
                <td>{items.userId}</td>
                <td>{items.id}</td>
                <td>{items.title}</td>
            </tr>
            )
         
        })}
      </tbody>
      <Button onClick={submit}>Logout</Button>
    </Table>
      }

        </>
        
    )
}
