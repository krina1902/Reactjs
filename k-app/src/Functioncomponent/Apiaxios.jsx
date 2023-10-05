import axios from "axios";
import React, { useEffect, useState } from "react";

const Apiaxios = () => {

    const [user,setUser] = useState()
useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/todos").then((data)=>{
        console.log(data.data);
        setUser(data.data);
    })
})

    return ( 
        <>
        <h1>Axios</h1>
        <table border="2px" width="70%" align="center">
            <tr border="2px">
                <td>userId</td>
                <td>id</td>
                <td>title</td>
                <td>completed</td>
            </tr>
            {
                user&&
                user.map((item)=>
                    <tr border="2px">
                    <td>{item.userId}</td>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.completed.toString()}</td>
                </tr>
                )
            }
        </table>
        </>
     );
}
 
export default Apiaxios;