import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const UserLogin = () => {
    const [user, setData] = useState(
        {
            "email": "",
            "pswd": ""
        }
    )

    const inputHandler = (event) => {
        setData({ ...user, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        console.log(user)
        axios.post("http://localhost:8835/usersignin",user).then(
            (response)=>{
                if(response.data.status == "success"){
                    sessionStorage.setItem("token",response.data.token)
                    sessionStorage.setItem("userid",response.data.userid)
                    navigate("/bookticket")
                }
                else{
                    alert(response.data.status)
                }
            }
        ).catch(
            (error)=>{
                console.log(error.message)
                alert(error.message)
            }
        ).finally()
    }
    let navigate = useNavigate()

    return (
        <div className='login'>
            <h1><b>User Log In</b></h1>
            <br />
            <div class="card text-center mb-3">
                <div class="card-body">
                    <p></p>
                    <p></p>
                    <div className="container">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div className="row g-3">
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">E-mail :</label>
                                        <input type="text" className="form-control" name='email' value={user.email} onChange={inputHandler} />
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Password :</label>
                                        <input type="password" className="form-control" name='pswd' value={user.pswd} onChange={inputHandler} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <button className="btn btn-warning" onClick={readValue}>Log In</button>
                    <br />
                    <br />
                    <br />
                    <b>If you are a new user please   <a href="/usersignup">Sign Up</a></b>
                    <br />
                    <br />
                    <br />
                    <b>Go back   <a href="/">Home</a></b>
                    <br />
                    <br />
                </div>
            </div>
        </div>
    )
}

export default UserLogin