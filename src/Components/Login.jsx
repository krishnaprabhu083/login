import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import Tables from './Tables'

export default function Login() {
    const[username,setusername]=useState()
    const [password,setpassword]=useState()
    const [usererror,setusererror]=useState()
    const [passerror,setpasserror]=useState()
    const[vlog,setvlog]=useState(false)

    
    const user=(u)=>{
        let userinput=u.target.value;
            setusername(userinput)
    }
   const passwo=(e)=>{
    const passinput=e.target.value;
    setpassword(passinput)  
   }
   const submit=()=>{
       console.log(password);
    
       if(username==username&& password==password){
           setvlog(true)
       }
       else{
        if(username==username){

            setusererror("valid")
            
        }
        else{
            setusererror("invalid")
        }
        if(password==password){
    
            setpasserror("valid")
    
        }
        else{
            setpasserror("invalid")
        }
    }
   }
    

    return (
    
             
       <Container>
         {vlog?<Tables/>:
        <div className='admin'>
            <div>
            <input typeof='text' id="username" placeholder='ENTER' onKeyUp={user} ></input>
            <span >{usererror}</span>
            </div>
          <div>
          <input type='password' id="pass" placeholder='PASSWORD' onKeyDown={passwo} ></input>
            <span >{passerror}</span>
          </div>
           
            
            <Button id="submit" onClick={submit} >SUDMIT</Button>

        </div>
      }
      </Container>
    
    
    )
    
}
