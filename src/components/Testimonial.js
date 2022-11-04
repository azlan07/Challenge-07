import React from "react";

const Testimonial = () => {
    return (
        <section id="testimonial" className="py-5">
            <div className="container-md pt-5">
                <h2 className="h2 text-center fw-bold">Testimonial</h2>
                <p className="text-center py-3">Berbagai review positif dari para pelanggan kami</p>
                <div id="carouselExampleControls" className="carousel slide mx-auto"
                    data-bs-ride="carousel">
                    <div className="carousel-inner rounded-3">
                        <div className="carousel-item active bg-aliceblue p-5">
                            <div className="row mx-4 my-5">
                                <div className="margin col-xl-2 m-auto">
                                    <img src="./img/photo1-testimoni.png" className="img-fluid d-block testimonial-img m-auto"
                                        alt="Person"/>
                                </div>
                                <div className="col-xl-8">
                                    <img src="img\Rate.png" className="margin img-fluid testimonial-rating mb-3" alt="Rating"/>
                                        <p className="text-testimonial mb-3">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            lorem ipsum
                                            dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit
                                            amet, consectetur adipiscing elit, sed do eiusmod”</p>
                                        <p className="text-testimonial testimonial-name">John Dee 32, Bromo</p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item bg-aliceblue p-5">
                            <div className="row mx-4 my-5">
                                <div className="margin col-xl-2 m-auto">
                                    <img src="./img/photo2-testimoni.png" className="img-fluid d-block testimonial-img m-auto"
                                        alt="Person"/>
                                </div>
                                <div className="col-xl-8">
                                    <img src="img\Rate.png" className="margin img-fluid testimonial-rating mb-3" alt="Rating"/>
                                        <p className="text-testimonial mb-3">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            lorem ipsum
                                            dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit
                                            amet, consectetur adipiscing elit, sed do eiusmod”</p>
                                        <p className="text-testimonial testimonial-name">Ely Engely 29, New York</p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item bg-aliceblue p-5">
                            <div className="row mx-4 my-5">
                                <div className="margin col-xl-2 m-auto">
                                    <img src="./img/photo3-testimoni.jpg" className="img-fluid d-block testimonial-img m-auto"
                                        alt="Person"/>
                                </div>
                                <div className="col-xl-8">
                                    <img src="img\Rate.png" className="margin img-fluid testimonial-rating mb-3" alt="Rating"/>
                                        <p className="text-testimonial mb-3">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            lorem ipsum
                                            dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit
                                            amet, consectetur adipiscing elit, sed do eiusmod”</p>
                                        <p className="text-testimonial testimonial-name">Azlan 20, Padang</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    </button>
                    <div className="text-center">
                        <a type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev"
                            className="testimonial-media">&#8249;</a>
                        <a type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next"
                            className="testimonial-media">&#8250;</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonial 