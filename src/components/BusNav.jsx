import React from 'react'

const BusNav = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-primary">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link active" aria-current="page" href="/addbus"><b>Add Bus</b></a>
                            <a class="nav-link active" href="/searchbus"><b>Search Bus</b></a>
                            <a class="nav-link active" href="/buslist"><b>Bus List</b></a>
                            <a class="nav-link active" href="/adminlogin"><b>Log Out</b></a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default BusNav