import React from "react";

const WhyUs = () => {
  return (
    <div className="container" id="why-us">
      <div className="row pt-5 mt-5">
        <h1 className="text fw-bold">Why Us?</h1>
        <p className="text my-3">Mengapa harus pilih Binar Car Rental?</p>
        <div className="kartu col-lg-3 mt-3 col-sm-12 rounded-3">
          <div className="card">
            <img src="img/icon_complete.png" className="img-fluid ms-3 mt-3 mb-3" style={{width: "32px"}}/>
              <div className="card-body">
                <h5 className="card-title fw-bold mb-3">Mobil Lengkap</h5>
                <p className="card-text">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
              </div>
          </div>
        </div>
        <div className="kartu col-lg-3 mt-3 col-sm-12 rounded-3">
          <div className="card">
            <img src="img/icon_price.png" className="img-fluid ms-3 mt-3 mb-3" style={{width: "32px"}}/>
              <div className="card-body">
                <h5 className="card-title fw-bold mb-3">Harga Murah</h5>
                <p className="card-text">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil
                  lain</p>
              </div>
          </div>
        </div>
        <div className="kartu col-lg-3 mt-3 col-sm-12 rounded-3">
          <div className="card">
            <img src="img/icon_24hrs.png" className="img-fluid ms-3 mt-3 mb-3" style={{width: "32px"}}/>
              <div className="card-body">
                <h5 className="card-title fw-bold mb-3">Layanan 24 Jam</h5>
                <p className="card-text">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di
                  akhir minggu</p>
              </div>
          </div>
        </div>
        <div className="kartu col-lg-3 mt-3 col-sm-12 rounded-3">
          <div className="card">
            <img src="img/icon_professional.png" className="img-fluid ms-3 mt-3 mb-3" style={{width: "32px"}}/>
              <div className="card-body">
                <h5 className="card-title fw-bold mb-3">Sopir Profesional</h5>
                <p className="card-text">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu
                </p>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyUs