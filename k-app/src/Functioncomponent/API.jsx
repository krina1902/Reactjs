import React, { useEffect, useState } from "react";

const API = () => {

    const [user, setUser] = useState([])
    const [photo, setPhoto] = useState([])
    const [book, setBook] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos").then((data)=>{
            data.json().then((resp)=>{
                console.log(resp);
                setUser(resp)
            })
        })
    })
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos").then((data)=>{
            data.json().then((resp)=>{
                console.log(resp);
                setPhoto(resp)
            })
        })
    })
    useEffect(() => {
        fetch("http://localhost:3000/book").then((data)=>{
            data.json().then((resp)=>{
                console.log(resp);
                setBook(resp)
            })
        })
    })
    return ( 
        <>
        <h1>Application Programming Interface</h1>
        <table border="2px" width="70%" align="center">
            <tr border="2px">
                <td>userId</td>
                <td>id</td>
                <td>title</td>
                <td>completed</td>
            </tr>
            {
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
        <table border="2px" width="70%" align="center">
            <tr border="2px">
                <td>id</td>
                <td>title</td>
                <td>author</td>
                <td>publisher</td>
            </tr>
            {
                book.map((item)=>
                    <tr border="2px">
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.author}</td>
                    <td>{item.publisher}</td>
                </tr>
                )
            }
        </table>

        <table border="2px" width="70%" align="center">
            <tr border="2px">
                <td>albumId</td>
                <td>id</td>
                <td>title</td>
                <td>url</td>
                <td>thumbnailUrl</td>
            </tr>
            {
                photo.map((item)=>
                    <tr border="2px">
                    <td>{item.albumId}</td>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.url}</td>
                    <td><img src={`${item.url}`} style={{width:"40px"}}></img></td>
                    <td><img src={`${item.thumbnailUrl}`} style={{width:"40px"}}></img></td>
                </tr>
                )
            }
        </table>
        </>
     );
}
 
export default API;