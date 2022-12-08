import React, { useEffect } from 'react'
import axios from 'axios'
const Dummy = () => {
    useEffect(() => {
        // axios.post("http://localhost:4001/login",{"email":"irfan@gmail.com","password":12348867}).then((res)=>{
        //     console.log(res.data)
        //     localStorage.setItem("jwtToken",res.data.token)
        // })
        const token = localStorage.getItem('jwtToken')
        axios.get("http://localhost:4001/articles", { headers: { "authorization": `Bearer ${token}` } }).then((res) => {
            // console.log(res.data)
        })
    })
    return (
        <div>

        </div>
    )
}

export default Dummy