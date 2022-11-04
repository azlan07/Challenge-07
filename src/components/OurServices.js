import React from "react";

const OurServices = () => {
    return (
        <div className="container-md" id="our-services">
            <div className="row my-5 pt-5 mt-5">
                <div className="col-lg-6">
                    <img className="img-fluid" src="img/img_service.png" alt=""/>
                </div>
                <div className="col-lg-6 p-5">
                    <h2 className="fw-bold">
                        Best Car Rental for any kind of trip in Batusangkar!
                    </h2>
                    <p className="mt-5">
                        Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain,
                        kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding,
                        meeting, dll.
                    </p>
                    <div className="my-3">
                        <img src="img/ceklis.png" className="img-fluid me-3" style={{width: "24px"}}/>
                            Sewa Mobil Dengan Supir di Bali 12 Jam
                    </div>
                    <div className="my-3">
                        <img src="img/ceklis.png" className="img-fluid me-3" style={{width: "24px"}}/>
                            Sewa Mobil Lepas Kunci di Bali 24 Jam
                    </div>
                    <div className="my-3">
                        <img src="img/ceklis.png" className="img-fluid me-3" style={{width: "24px"}}/>
                            Sewa Mobil Jangka Panjang Bulanan
                    </div>
                    <div className="my-3">
                        <img src="img/ceklis.png" className="img-fluid me-3" style={{width: "24px"}}/>
                            Gratis Antar - Jemput Mobil di Bandara
                    </div>
                    <div className="my-3">
                        <img src="img/ceklis.png" className="img-fluid me-3" style={{width: "24px"}}/>
                            Layanan Airport Transfer / Drop In Out
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurServices;