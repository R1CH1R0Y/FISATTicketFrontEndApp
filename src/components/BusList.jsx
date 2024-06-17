import React, { useEffect, useState } from 'react'
import axios from 'axios';
import BusNav from './BusNav';

const BusList = () => {
    const [stud, changeData] = useState([])
    const fetchData = () => {
        axios.post("http://localhost:8835/view").then(
            (response) => {
                changeData(response.data)
            }
        ).catch(
            (error) => {
                console.log(error.message)
                alert(error.message)
            }
        )
    }
    useEffect(() => { fetchData() }, [])
    const makeAvailable = (id) => {
        let input = { "_id": id, "available": true }
        axios.post("http://localhost:8835/makeAvailable", input).then(
            (response) => {
                console.log(response.data)
                if (response.data.status === "success") {
                    alert("successfully marked as available")
                    window.location.reload()
                } else {
                    alert("error in marking as available")
                }
            }
        ).catch(
            (error) => {
                alert(error.message)
            }
        )
    }

    const makeNotAvailable = (id) => {
        let input = { "_id": id, "available": false }
        axios.post("http://localhost:8835/makeNotAvailable", input).then(
            (response) => {
                console.log(response.data)
                if (response.data.status === "success") {
                    alert("successfully marked as not available")
                    window.location.reload()
                } else {
                    alert("error in marking as not available")
                }
            }
        ).catch(
            (error) => {
                alert(error.message)
            }
        )
    }

    const deletebus = (id) => {
        let input = { "_id": id }
        axios.post("http://localhost:8835/remove", input).then(
            (response) => {
                console.log(response.data)
                if (response.data.status === "success") {
                    alert("successfully deleted")
                    window.location.reload()
                } else {
                    alert("error in deletion")
                }
            }
        ).catch(
            (error) => {
                alert(error.message)
            }
        )
    }
    return (
        <div>
            <BusNav />
            <div className='view'>
                <div class="card text-center mb-3">
                    <div class="card-body">
                        <h5 class="card-title">Bus List</h5>
                        <div className="container">
                            <div className="row">
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">BUS NO.</th>
                                                <th scope="col">ROUTE.</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {stud.map(
                                                (value, index) => {
                                                    return <tr>
                                                        <td style={{ backgroundColor: value.available ? "lightgreen" : "yellow", }}>{value.bno}</td>
                                                        <td style={{ backgroundColor: value.available ? "lightgreen" : "yellow", }}>{value.route}</td>
                                                        <td style={{ backgroundColor: value.available ? "lightgreen" : "yellow", }}><button className="btn btn-success" onClick={() => { makeAvailable(value._id) }}>Available</button></td>
                                                        <td style={{ backgroundColor: value.available ? "lightgreen" : "yellow", }}><button className="btn btn-warning" onClick={() => { makeNotAvailable(value._id) }}>Not Available</button></td>
                                                        <td style={{ backgroundColor: value.available ? "lightgreen" : "yellow", }}><button className="btn btn-danger" onClick={() => { deletebus(value._id) }}>Delete</button></td>
                                                    </tr>
                                                }
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BusList