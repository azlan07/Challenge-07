import React from "react";
import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    function handleLogout(e) {
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
        <nav class="navbar fixed-top navbar-expand-lg" style={{backgroundColor:"#F1F3FF"}}>
            <div class="container">
                <a href="/" class="navbar-brand"><img src="img/logo.png" alt="" /></a>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <div class="navbar-nav ms-auto">
                        <a class="nav-link active text-dark mx-3 fw-bold" aria-current="page"
                            href="#our-services">Our
                            Service</a>
                        <a class="nav-link text-dark mx-3 fw-bold" href="#why-us">Why Us</a>
                        <a class="nav-link text-dark mx-3 fw-bold" href="#testimonial">Testimonial</a>
                        <a class="nav-link text-dark mx-3 fw-bold" href="#faq">FAQ</a>
                        {showButton ? (
                            <a class="nav-link btn btn-success btn-md text-light mx-3 fw-bold" href="/login">Register</a>
                        ) : (
                            <a key={"logout"} class="nav-link btn btn-primary btn-md text-light mx-3 fw-bold" href="/login" onClick={handleLogout}>Logout</a>
                        )}
                    </div>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <img src="img/fi_menu.png" alt=""/>
                </button>
            </div>
        </nav>
    )
}

export default Navbar;