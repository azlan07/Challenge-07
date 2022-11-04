import React from "react";

const Navbar = () => {
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
                        <a class="nav-link btn btn-success btn-md text-light mx-3 fw-bold" href="/">Register</a>
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