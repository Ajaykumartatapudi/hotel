import React, { useState } from "react";
import "./Hero.css";
import hotelImg from "../Images/hotel.jpg";

// Example dummy hotel data
const hotels = [
  { id: 1, name: "Beach Resort Goa", location: "Goa" },
  { id: 2, name: "Mountain Retreat Kerala", location: "Kerala" },
  { id: 3, name: "City Hotel Mumbai", location: "Mumbai" },
  { id: 4, name: "Luxury Inn Goa", location: "Goa" },
  { id: 5, name: "Novotel City Center", location: "Mumbai" },
];

const Hero = () => {
  const [formData, setFormData] = useState({
    whereTo: "",
    checkIn: "",
    checkOut: "",
    persons: "1",
    rooms: "1",
  });

  const [filteredHotels, setFilteredHotels] = useState([]);
  const [searched, setSearched] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearched(true);

    const query = formData.whereTo.toLowerCase().trim();

    // Filter hotels by location or name
    const results = hotels.filter(
      (hotel) =>
        hotel.location.toLowerCase().includes(query) ||
        hotel.name.toLowerCase().includes(query)
    );

    setFilteredHotels(results);
  };

  return (
    <section
      className="hero py-5"
      style={{
        backgroundImage: `url(${hotelImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        position: "relative",
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Dark Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          zIndex: 1,
        }}
      ></div>

      {/* Hero Content */}
      <div
        className="hero-content"
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
        }}
      >
        <div className="container">
          <div
            className="row align-items-center justify-content-between"
            style={{ gap: "40px" }}
          >
            <div className="col-lg-6 text-gradient">
              <div className="typewriter mb-3">
                <h1 className="display-5 fw-bold">Find and book great places</h1>
              </div>
              <p className="lead text-fade mb-4">
                Discover stays from seaview villas to city apartments — tailored
                for you.
              </p>
            </div>

            {/* Search Card */}
            <div className="col-lg-5" style={{ marginTop: "-20px" }}>
              <div
                className="card search-card p-3"
                style={{
                  boxShadow: "0 8px 30px rgba(0,0,0,0.25)",
                  borderRadius: "10px",
                  backgroundColor: "rgba(255,255,255,0.9)",
                }}
              >
                <form className="row g-2 align-items-end" onSubmit={handleSearch}>
                  <div className="col-12">
                    <label className="form-label small mb-1">Where to</label>
                    <input
                      type="text"
                      name="whereTo"
                      className="form-control"
                      placeholder="City, property, or landmark"
                      value={formData.whereTo}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-sm-6">
                    <label className="form-label small mb-1">Check-in</label>
                    <input
                      type="date"
                      name="checkIn"
                      className="form-control"
                      value={formData.checkIn}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-sm-6">
                    <label className="form-label small mb-1">Check-out</label>
                    <input
                      type="date"
                      name="checkOut"
                      className="form-control"
                      value={formData.checkOut}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-sm-6">
                    <label className="form-label small mb-1">Persons</label>
                    <select
                      name="persons"
                      className="form-select"
                      value={formData.persons}
                      onChange={handleChange}
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5+</option>
                    </select>
                  </div>
                  <div className="col-sm-6">
                    <label className="form-label small mb-1">Rooms</label>
                    <select
                      name="rooms"
                      className="form-select"
                      value={formData.rooms}
                      onChange={handleChange}
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4+</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary w-100">Search stays</button>
                  </div>
                </form>

                {/* Show filtered results */}
                {searched && (
                  <div className="mt-3">
                    {filteredHotels.length > 0 ? (
                      <>
                        <h6>
                          Available Stays in "{formData.whereTo}"
                        </h6>
                        <ul className="list-group">
                          {filteredHotels.map((hotel) => (
                            <li
                              key={hotel.id}
                              className="list-group-item d-flex justify-content-between align-items-center"
                            >
                              <span>{hotel.name}</span>
                              <span className="badge bg-secondary">
                                {hotel.location}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <p className="mt-3 text-danger">
                        No stays found in "{formData.whereTo}"
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
            {/* End of Search Card */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
