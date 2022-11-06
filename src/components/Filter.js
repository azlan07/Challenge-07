import React, { useState, useEffect } from "react";

const Filter = () => {
  const [cars, setCars] = useState([]);
  const [displayCars, setDisplayCars] = useState([]);
  const [driverType, setDriverType] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [capacity, setCapacity] = useState("");

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setCars(data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const populateCars = (cars) => {
    return cars.map((car) => {
      const isPositive = getRandomInt(0, 1) === 1;
      const timeAt = new Date();
      const mutator = getRandomInt(1000000, 100000000);
      const availableAt = new Date(timeAt.getTime() + (isPositive ? mutator : -1 * mutator))

      return {
        ...car,
        availableAt,
      };
    })
  }

  const handleSearchCar = () => {
    const carsPopulate = populateCars(cars);
    console.log(carsPopulate);
    const today = new Date();
    const newDateTime = new Date(`${date} ${time}`);

    if (driverType === "") {
      alert("Please select driver type");
      return;
    } else if (!date) {
      alert("Please select date");
      return;
    } else if (newDateTime < today) {
      alert("Dont select past time");
      return;
    }
    const filterCars = carsPopulate.filter((item) => item.capacity >= capacity && item.availableAt >= newDateTime);
    setDisplayCars(filterCars);
  };

  const handleReset = () => {
    setDisplayCars([]);
    setDriverType("");
    setDate("");
    setTime("");
    setCapacity("");
  };

  return (
    <section id="cariMobil">
      <div className="container px-lg-5">
        <div className="d-lg-flex py-4 px-3 rounded-3 shadow bg-white">
          <div className="flex-fill">
            <div className="row me-2">
              <div className="col-sm-12 col-lg-3 mt-2">
                <p>Tipe Driver</p>
                <select className="form-select" id="driver" onChange={(e) => setDriverType(e.target.value)} >
                  <option value={driverType} hidden> Pilih Tipe Driver </option>
                  <option value="1">Dengan Sopir</option>
                  <option value="2">Tanpa Sopir (Lepas Kunci)</option>
                </select>
              </div>
              <div className="col-sm-12 col-lg-3 mt-2">
                <p>Tanggal</p>
                <input
                  type="date"
                  value={date}
                  className="form-control"
                  placeholder="Pilih Tanggal"
                  id="filterDate"
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div className="col-sm-12 col-lg-3 mt-2">
                <p>Waktu Jemput/Ambil</p>
                <input
                  type="time"
                  value={time}
                  className="form-control"
                  placeholder="Pilih Tanggal"
                  id="filterTime"
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
              <div className="col-sm-12 col-lg-3 mt-2">
                <p>Jumlah Penumpang (optional)</p>
                <input
                  type="number"
                  value={capacity}
                  className="form-control"
                  placeholder="Jumlah Penumpang"
                  id="filterCapacity"
                  onChange={(e) => setCapacity(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="mt-3 align-self-end">
            <div className="d-flex justify-content-center">
              <button
                className="text-nowrap me-2"
                id="btn-search"
                onClick={handleSearchCar}
              >
                Cari Mobil
              </button>
              <button
                className="btn btn-danger rounded-0"
                id="btn-clear"
                onClick={handleReset}
              >
                Clear
              </button>
            </div>
          </div>
        </div>
        
        <div className="row mt-5" id="carContainerList">
          {displayCars.length > 0 ? (
            displayCars.map((item) => (
              <div className="col-lg-4 mt-2 d-flex align-items-stretch" key={item.id}>
                <div className="card p-4">
                  <img src={item.image} alt="car" className="m-3 rounded" />
                  <p className="mt-auto">{item.model}/{item.manufacture}</p>
                  <p className="fw-bold fs-6">Rp{item.rentPerDay}</p>
                  <p>{item.description}</p>
                  <p><i className="bi bi-people"></i>{item.capacity} Orang</p>
                  <p><i className="bi bi-people"></i>{item.transmission}</p>
                  <p><i className="bi bi-people"></i>{item.year}</p>
                  <button>Pilih Mobil</button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center">
              <h1>Belum ada data</h1>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Filter;
