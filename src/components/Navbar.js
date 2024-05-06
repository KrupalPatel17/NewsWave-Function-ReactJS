import React from 'react'
import './Navbar.css';
import { Link } from "react-router-dom";

const Navbar = (props) => {

    return (
        <>
            <div>
                {/* <nav className={`navbar navbar-${props.mode} bg-${props.mode} fixed-top`}>
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/"><b><i><u id="title" x>News </u> <img src="streaming1.png" alt="" width={35} className='logo mb-2' /> <u id="title2">Wave</u></i></b></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                            <div className={`offcanvas-header navbar-${props.mode} bg-${props.mode}`}>
                                <h5 className="offcanvas-title" id="offcanvasNavbarLabel"><b><i><u id="title">News</u> <img src="streaming.png" alt="" width={40} className='logo mb-2' /> <u id="title2">Wave</u></i></b></h5>
                                <button type="button" className="btn-close " id='btn-close' data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className={`offcanvas-body navbar-${props.mode} bg-${props.mode}`}>
                                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" to="/">AboutUs</Link>
                                    </li>
                                    <li className="nav-item dropdown ">
                                        <Link className="nav-link dropdown-toggle active" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            News Types
                                        </Link>
                                        <ul className="dropdown-menu show" style={{ backgroundColor: props.mode === "light" ? "white" : "darkgray" }}>
                                            <li><Link className="dropdown-item" to="/business" style={{ fontWeight: "bold" }}>Business</Link></li>
                                            <li><Link className="dropdown-item" to="/entertainment" style={{ fontWeight: "bold" }}>Entertainment</Link></li>
                                            <li><Link className="dropdown-item" to="/general" style={{ fontWeight: "bold" }}>General</Link></li>
                                            <li><Link className="dropdown-item" to="/health" style={{ fontWeight: "bold" }}>Health</Link></li>
                                            <li><Link className="dropdown-item" to="/science" style={{ fontWeight: "bold" }}>Science</Link></li>
                                            <li><Link className="dropdown-item" to="/sports" style={{ fontWeight: "bold" }}>Sports</Link></li>
                                            <li><Link className="dropdown-item" to="/technology" style={{ fontWeight: "bold" }}>Technology</Link></li>
                                          
                                        </ul>
                                    </li>
                                </ul>

                                <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
                                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode === 'light' ? 'Dark' : 'Light'} Mode</label>
                                </div>

                                <form className="d-flex mt-3" role="search">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                                </form>


                            </div>
                        </div>
                    </div>
                </nav> */}
            </div>

            <div className="d-flex justify-content-around fixed-top mt-1 " style={{ color: props.mode === 'light' ? 'black' : 'white', backgroundColor: props.isFpageActive ? '#bfbfbf00' : (props.mode === 'dark' ? 'black' : 'white') }} id="header">

                <Link className="navbar-brand pb-1" to="/"><b><i><u id="title" x>News </u> <img src="streaming1.png" alt="" width={35} className='logo mb-2' /> <u id="title2">Wave</u></i></b></Link>

                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/general">Home</Link>
                    </li>

                    <li className="nav-item">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                News
                            </a>
                            <ul className="dropdown-menu " style={{ backgroundColor: props.mode === "light" ? "white" : "darkgray" }}>
                                <li><Link className="dropdown-item" to="/business" style={{ fontWeight: "bold" }}>Business</Link></li>
                                <li><Link className="dropdown-item" to="/entertainment" style={{ fontWeight: "bold" }}>Entertainment</Link></li>
                                <li><Link className="dropdown-item" to="/general" style={{ fontWeight: "bold" }}>General</Link></li>
                                <li><Link className="dropdown-item" to="/health" style={{ fontWeight: "bold" }}>Health</Link></li>
                                <li><Link className="dropdown-item" to="/science" style={{ fontWeight: "bold" }}>Science</Link></li>
                                <li><Link className="dropdown-item" to="/sports" style={{ fontWeight: "bold" }}>Sports</Link></li>
                                <li><Link className="dropdown-item" to="/technology" style={{ fontWeight: "bold" }}>Technology</Link></li>

                            </ul>
                        </li>
                    </li>

                         <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">About Us</Link>
                    </li>

                    <li className="nav-item pt-1">
                        <input id="checkbox" type="checkbox" onClick={props.toggleMode} />
                        <label className="switch" for="checkbox">
                            {props.mode === 'light' ? <i class="ri-moon-fill"></i> : <i class="ri-sun-fill"></i>}
                        </label>

                    </li>
                </ul>

            </div>

        </>
    )
}


export default Navbar
