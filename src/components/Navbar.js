import React from "react";
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    function handleLogout() {
        localStorage.removeItem("token");
        navigate('/login')
    }

    const location = useLocation()
    const [showButton, setShowButton] = useState()

    useEffect(() => {
        if (location.pathname === "/cars") {
            setShowButton(false);
        } 
        else if (location.key === "logout" && location.pathname === "/login") {
            setShowButton(false);
        } 
        else {
            setShowButton(true);
        }
    }, [location.pathname]);
    return (
        <nav className="navbar fixed-top navbar-expand-lg" style={{backgroundColor:"#F1F3FF"}}>
            <div className="container">
                <a href="/" className="navbar-brand"><img src="img/logo.png" alt="" /></a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <div className="navbar-nav ms-auto">
                        <a className="nav-link active text-dark mx-3 fw-bold" aria-current="page"
                            href="#our-services">Our
                            Service</a>
                        <a className="nav-link text-dark mx-3 fw-bold" href="#why-us">Why Us</a>
                        <a className="nav-link text-dark mx-3 fw-bold" href="#testimonial">Testimonial</a>
                        <a className="nav-link text-dark mx-3 fw-bold" href="#faq">FAQ</a>
                        {showButton ? (
                            <a className="nav-link btn btn-success btn-md text-light mx-3 fw-bold" href="/login">Register</a>
                        ) : (
                            <a key={"logout"} className="nav-link btn btn-primary btn-md text-light mx-3 fw-bold" href="/login" onClick={handleLogout}>Logout</a>
                        )}
                    </div>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <img src="img/fi_menu.png" alt=""/>
                </button>
            </div>
        </nav>
    )
}

export default Navbar;