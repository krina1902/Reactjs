
import React, { useState } from "react";
import { useEffect } from "react";

const Apipost = () => {
    const [username , setUsername] = useState("")
    const [password , setPassword] = useState("")
    const [email , setEmail] = useState("")
    const [gete , setGete] = useState([])

    function savedata(){
        console.log({username,email,password});
        let data = {username,email,password}

        fetch("http://localhost:3030/forms" , {
            method : "POST",
            headers:{
            "Content-Type" : "application/json"
            },
            body : JSON.stringify(data)
        }).then((result)=>{
            console.log(result);
            result.json().then((resp)=>{
                console.log(resp);
            })
        })
        
        setUsername('')
        setEmail('')
        setPassword('')
    }
   
    useEffect(() => {
        fetch("http://localhost:3030/forms").then((data)=>{
            data.json().then((resp)=>{
                console.log(resp);
                setGete(resp)
            })
        })
    })
    return ( 
        <>
        <h2>Apipost</h2>
        <table>
            <tr>
                <td>
                Username
                </td>
                <td><input type="text" value={username} onChange={(e)=> setUsername(e.target.value)} placeholder="Enter Name"></input></td>
            </tr>
            <tr>
                <td>
                Email
                </td>
                <td><input type="email"  value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Enter Email"></input></td>
            </tr>
            <tr>
                <td>
                Password
                </td>
                <td><input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="Enter Password"></input></td>
            </tr>
            <tr>
                <td><input type="reset" onClick={savedata} value="Submit"></input></td>
            </tr>
            
        </table>
        <br></br>
        <table border="2px" width="70%" align="center">
            <tr border="2px">
                <td>username</td>
                <td>id</td>
                <td>email</td>
        
            </tr>
            {
                gete.map((item)=>
                    <tr border="2px">
                    <td>{item.username}</td>
                    <td>{item.id}</td>
                    <td>{item.email}</td>
                
                </tr>
                )
            }
        </table>
        </>
     );
}
 
export default Apipost;