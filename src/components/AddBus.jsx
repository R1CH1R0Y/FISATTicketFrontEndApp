import React, { useState } from 'react'
import axios from 'axios'
import BusNav from './BusNav'



const AddBus = () => {
    const [bus, changeData] = useState(
        {
            "route": "",
            "bno": ""
        }
    )
    const eventHandler = (event) => {
        changeData({ ...bus, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        console.log(bus)
        axios.post("http://localhost:8835/add", bus).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("successfully added")
                }
                else {
                    alert("failed")
                }
            }
        )
    }
    return (
        <div>
            <BusNav/>
            <div className='add'>
            <div class="card text-center mb-3">
                <div class="card-body">
                    <h5 class="card-title">Add Bus</h5>
                    <p></p>
                    <div className="container">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div className="row g-3">
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Route :</label>
                                        <input type="text" className="form-control" name='route' value={bus.route} onChange={eventHandler} />
                                    </div>
                                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                        <label htmlFor="" className="form-label">Bus No. :</label>
                                        <input type="text" id="" className="form-control" name='bno' value={bus.bno} onChange={eventHandler} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <button className="btn btn-success" onClick={readValue}>Add</button>
                </div>
            </div>
        </div>
        </div>
    )
}

export default AddBus