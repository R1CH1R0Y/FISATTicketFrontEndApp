import React, { useEffect, useState } from 'react'
import axios from 'axios'
import UserNav from './UserNav';

const BookTicket = () => {
    const [bus, setBus] = useState({
        "route": "",
        "bno": ""
    });
    const [ticket, setTicket] = useState({
        "_id":"",
        "bno": "",
        "route": "",
        "date": "",
    });
    const [date, setSelectedDate] = useState("");
    const [result, setData] = useState([]);

    const handleRouteChange = (event) => {
        setBus({ ...bus, route: event.target.value });
        const selectedBno = result.find((value) => value.route === event.target.value).bno;
        setTicket({ ...ticket, route: event.target.value, bno: selectedBno });
    };

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
        setTicket({ ...ticket, date: event.target.value });
    };

    const readValue = () => {
        console.log(bus);
        axios.post("http://localhost:8835/viewavailable", bus).then(
            (response) => {
                console.log(response.data);
                setData(response.data);
            }
        );
    };

    useEffect(() => {
        readValue();
    }, []);

    const handlePay = () => {
        const userId = sessionStorage.getItem('userid');
        const route = ticket.route;
        const date = ticket.date;
        axios.post('http://localhost:8835/pay', {
            userId,
            date,
            route
        }).then((response) => {
            if (response.data.status === 'success') {
                alert("successfully paid");
            } else {
                alert('Error generating ticket');
            }
        }).catch((error) => {
            console.error(error);
        });
    };

    return (
        <div>
            <UserNav />
            <div className='search'>
                <div class="card text-center mb-3">
                    <div class="card-body">
                        <h5 class="card-title">Book Ticket</h5>
                        <p></p>
                        <div className="container">
                            <div className="row">
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <label htmlFor="" className="form-label">Select Route :</label>
                                    <select id="" className="form-control" name='route' value={bus.route} onChange={handleRouteChange}>
                                        <option value=""></option>
                                        {result.map(
                                            (value, index) => {
                                                return <option value={value.route}>{value.bno} {value.route}</option>
                                            }
                                        )}
                                    </select>
                                </div>
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <label htmlFor="" className="form-label">Date :</label>
                                    <input type="date" id="" className="form-control" name='date' value={ticket.date} onChange={handleDateChange}/>
                                </div>
                            </div>
                        </div>
                        <br />
                        <button className='btn btn-warning' onClick={handlePay}>Pay</button>
                        <br />
                        <br />
                        <br />
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookTicket