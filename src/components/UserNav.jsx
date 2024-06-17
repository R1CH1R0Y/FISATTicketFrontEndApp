import React from 'react'

const UserNav = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-primary">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link active" aria-current="page" href="/bookticket"><b>Book Ticket</b></a>
                            <a class="nav-link active" href="/bookhistory"><b>Booking History</b></a>
                            <a class="nav-link active" href="/userlogin"><b>Log Out</b></a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default UserNav