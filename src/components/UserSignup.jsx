import axios from 'axios'
import React, { useState } from 'react'

const UserSignup = () => {
    const [user, setData] = useState(
        {
            "name": "",
            "admn": "",
            "dept": "",
            "gender": "",
            "addrs": "",
            "email": "",
            "mob": "",
            "pswd": ""
        }
    )

    const inputHandler = (event) => {
        setData({ ...user, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        if (user.pswd != user.cpswd) {
            alert("Passwords Do Not Match !!")
        } else {
            console.log(user)
            axios.post("http://localhost:8835/usersignup", user).then(
                (response) => {
                    console.log(response.data)
                    if (response.data.status === "success") {
                        alert("Successfully Added!")
                    }
                }
            ).catch(
                (error) => {
                    alert(error.message)
                }
            )
        }
    }

    return (
        <div className='signup'>
            <h1><b>User Sign Up</b></h1>
            <br />
            <div class="card text-center mb-3">
                <div class="card-body">
                    <p></p>
                    <div className="container">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div className="row g-3">
                                    <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Name :</label>
                                        <input type="text" className="form-control" name='name' value={user.name} onChange={inputHandler} placeholder='Username' />
                                    </div>
                                    <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Admission No :</label>
                                        <input type="text" className="form-control" name='admn' value={user.admn} onChange={inputHandler} />
                                    </div>
                                    <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Department :</label>
                                        <select id="" className="form-control" name='dept' value={user.dept} onChange={inputHandler}>
                                            <option value=""></option>
                                            <option value="Civil Engineering">Civil Engineering</option>
                                            <option value="Mechanical Engineering">Mechanical Engineering</option>
                                            <option value="Electrical and Electronic Engineering">Electrical and Electronic Engineering</option>
                                            <option value="Electronics and Communication Engineering">Electronics and Communication Engineering</option>
                                            <option value="Electronics and Instrumentation Engineering">Electronics and Instrumentation Engineering</option>
                                            <option value="Computer Science and Engineering">Computer Science and Engineering</option>
                                            <option value="Computer Applications">Computer Applications</option>
                                            <option value="Business Administration">Business Administration</option>
                                            <option value="Science and Humanities">Science and Humanities</option>
                                        </select>
                                    </div>
                                    <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Gender :</label>
                                        <select id="" className="form-control" name='gender' value={user.gender} onChange={inputHandler}>
                                            <option value=""></option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Address :</label>
                                        <textarea id="" className="form-control" name='addrs' value={user.addrs} onChange={inputHandler}></textarea>
                                    </div>
                                    <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">E-mail ID:</label>
                                        <input type="text" className="form-control" name='email' value={user.email} onChange={inputHandler} />
                                    </div>
                                    <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Mobile :</label>
                                        <input type="text" className="form-control" name='mob' value={user.mob} onChange={inputHandler} />
                                    </div>
                                    <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Password :</label>
                                        <input type="password" className="form-control" name='pswd' value={user.pswd} onChange={inputHandler} />
                                    </div>
                                    <div className="col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Confirm Password :</label>
                                        <input type="password" className="form-control" name='cpswd' value={user.cpswd} onChange={inputHandler} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <button className="btn btn-success" onClick={readValue}>Sign Up</button>
                    <br />
                    <br />
                    <b>Go Back to <a href="/userlogin">Login</a></b>
                    <br /><br />
                </div>
            </div>
        </div>
    )
}

export default UserSignup