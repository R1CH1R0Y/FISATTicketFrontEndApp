import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {
    const [admin, setData] = useState(
        {
            "adminid": "",
            "email": "",
            "pswd": ""
        }
    )

    const inputHandler = (event) => {
        setData({ ...admin, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        console.log(admin)
        axios.post("http://localhost:8835/adminsignin",admin).then(
            (response)=>{
                if(response.data.status == "success"){
                    sessionStorage.setItem("token",response.data.token)
                    sessionStorage.setItem("adminid",response.data.adminid)
                    navigate("/addbus")
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
            <h1><b>Admin Log In</b></h1>
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
                                        <label htmlFor="" className="form-label">Admin Id :</label>
                                        <input type="text" className="form-control" name='adminid' value={admin.adminid} onChange={inputHandler} />
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">E-mail :</label>
                                        <input type="text" className="form-control" name='email' value={admin.email} onChange={inputHandler} />
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Password :</label>
                                        <input type="password" className="form-control" name='pswd' value={admin.pswd} onChange={inputHandler} />
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
                    <b>Go back   <a href="/">Home</a></b>
                    <br />
                    <br />
                </div>
            </div>
        </div>
    )
}

export default AdminLogin