// import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {


    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">NewsMonkey</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categories
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/business"><i className="fas fa-briefcase" style={{ color: '#1e3050', paddingRight: '0.5rem' }}></i> Business</Link></li>
                                    <li><Link className="dropdown-item" to="/general"><i className="fas fa-globe" style={{ color: '#63e6be', paddingRight: '0.5rem' }}></i> General</Link></li>
                                    <li><Link className="dropdown-item" to="/health"><i className="fas fa-heartbeat" style={{ color: 'red', paddingRight: '0.5rem' }}></i> Health</Link></li>
                                    <li><Link className="dropdown-item" to="/science"><i className="fas fa-flask" style={{ color: 'purple', paddingRight: '0.5rem' }}></i> Science</Link></li>
                                    <li><Link className="dropdown-item" to="/sports"><i className="fas fa-football-ball" style={{ color: 'orange', paddingRight: '0.5rem' }}></i> Sports</Link></li>
                                    <li><Link className="dropdown-item" to="/technology"><i className="fas fa-laptop-code" style={{ color: '#146ebe', paddingRight: '0.5rem' }}></i> Technology</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
