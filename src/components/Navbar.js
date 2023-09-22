import React from 'react';

export default function Navbar(props) {
    return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand mx-3" href="/">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon mx-3"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02 mx-3">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true" href='/'>Disabled</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    )
}

// prototype help to deside to accept only that data type else if i pass another type than it will show error
Navbar.prototype = {
    title: String
}

Navbar.defaultProps = {
    title: "Nav Bar"
}