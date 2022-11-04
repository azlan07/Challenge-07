import React from "react";

const Faq = () => {
    return(
      <section id="faq" className="py-5 px-5">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <h1 className="mb-3 fw-bold">Frequently Asked Question</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
                <div className="col-lg-6">
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        <div className="accordion-item border mb-3">
                            <h2 className="accordion-header" id="flush-headingOne">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseOne" aria-expanded="false"
                                    aria-controls="flush-collapseOne">
                                    Apa saja syarat yang dibutuhkan?
                                </button>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse"
                                aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Quae nulla porro quam distinctio eum esse, ex alias repudiandae laboriosam
                                    necessitatibus in tempora suscipit, harum, aspernatur est? At asperiores quod ipsum.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item border mb-3">
                            <h2 className="accordion-header" id="flush-headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseTwo" aria-expanded="false"
                                    aria-controls="flush-collapseTwo">
                                    Berapa hari minimal sewa mobil lepas kunci?
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" className="accordion-collapse collapse"
                                aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Fuga excepturi tenetur amet, eaque doloremque voluptatem deleniti, adipisci sequi,
                                    quibusdam a officiis modi inventore facere nulla! Laudantium beatae unde provident
                                    harum?</div>
                            </div>
                        </div>
                        <div className="accordion-item border mb-3">
                            <h2 className="accordion-header" id="flush-headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseThree" aria-expanded="false"
                                    aria-controls="flush-collapseThree">
                                    Berapa hari sebelumnya sabaiknya booking sewa mobil?
                                </button>
                            </h2>
                            <div id="flush-collapseThree" className="accordion-collapse collapse"
                                aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Sunt quam vel quae facere possimus distinctio nemo voluptatibus magni doloribus,
                                    explicabo earum consectetur eos reprehenderit accusantium adipisci itaque voluptas
                                    alias minima!</div>
                            </div>
                        </div>
                        <div className="accordion-item border mb-3">
                            <h2 className="accordion-header" id="flush-headingFour">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseFour" aria-expanded="false"
                                    aria-controls="flush-collapseFour">
                                    Apakah Ada biaya antar-jemput?
                                </button>
                            </h2>
                            <div id="flush-collapseFour" className="accordion-collapse collapse"
                                aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                    Nulla facilis, commodi assumenda natus quam iste, distinctio earum ab cumque
                                    consectetur dignissimos pariatur aspernatur. Corporis voluptas quaerat asperiores ex
                                    quae ipsa!</div>
                            </div>
                        </div>
                        <div className="accordion-item border mb-3">
                            <h2 className="accordion-header" id="flush-headingFive">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#flush-collapseFiflush-headingFive" aria-expanded="false"
                                    aria-controls="flush-collapseFiflush-headingFive">
                                    Bagaimana jika terjadi kecelakaan
                                </button>
                            </h2>
                            <div id="flush-collapseFiflush-headingFive" className="accordion-collapse collapse"
                                aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body">Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                    Nulla facilis, commodi assumenda natus quam iste, distinctio earum ab cumque
                                    consectetur dignissimos pariatur aspernatur. Corporis voluptas quaerat asperiores ex
                                    quae ipsa!</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Faq