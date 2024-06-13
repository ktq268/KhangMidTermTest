import { useState } from "react";
import "./App.css";
import data from "./data.json";
import Modal from "./ModalComponent.jsx";
import ModalComponent from "./ModalComponent.jsx";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null); // State to store selected movie details

  const handleShowModal = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="background">
        <div className="container mx-auto" style={{ padding: 0 }}>
          <div className="navbar">
            <div className="logo">
              <img src="src/assets/Image/Logo.png" alt="LOGO" />
            </div>
            <div
              className="menu"
              style={{ display: "flex", alignItems: "center" }}
            >
              <ul>
                <li style={{ paddingLeft: 200 }}>Home</li>
                <li>List anime</li>
              </ul>

              <form>
                <div className="Searchbar">
                  <input type="text" placeholder="Search anime or movie" />
                </div>
              </form>
            </div>
          </div>
          <div>
            <h1 className="Explore">Explore</h1>
            <h2 className="Watching">What are you gonna watching today?</h2>
            <div className="container">
              <img
                src="src/assets/Image/spyfamilybanner.jpeg"
                alt="spyfamily"
                className="SpyFamilyBanner"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  handleShowModal(data.data.find((movie) => movie.id === "1"))
                }
              />
              <div class="fade-overlay"></div>
              <div className="overlay">
                <h1>Weather With You</h1>
                <p>
                  Corrupt politicians, frenzied nationalists, and other
                  warmongering forces constantly jeopardize the thin veneer of
                  peace between neighboring countries Ostania and Westalis.
                </p>
              </div>
            </div>
            <h1 className="NewRelease">New Release</h1>
            <div className="container" style={{ paddingLeft: 105 }}>
              <div className="row" style={{ maxHeight: 700 }}>
                <div className="col" style={{ paddingLeft: 15, marginLeft: 0 }}>
                  <img
                    id="OnePiece"
                    src="src/assets/Image/onepiece.jpeg"
                    alt=""
                    style={{
                      borderRadius: 10,
                      paddingBottom: 20,
                      cursor: "pointer",
                    }}
                    onClick={() =>
                      handleShowModal(
                        data.data.find((movie) => movie.id === "2")
                      )
                    }
                  />
                  <h3 className="MovieName">One Piece</h3>
                </div>
                <div className="col">
                  <img
                    id="Naruto"
                    src="src/assets/Image/naruto.jpeg"
                    alt=""
                    style={{
                      borderRadius: 10,
                      paddingBottom: 20,
                      cursor: "pointer",
                    }}
                    onClick={() =>
                      handleShowModal(
                        data.data.find((movie) => movie.id === "3")
                      )
                    }
                  />
                  <h3 className="MovieName">Boruto Naruto Next Generations</h3>
                </div>
                <div className="col">
                  <img
                    id="SpyFamily"
                    src="src/assets/Image/spy.jpeg"
                    alt=""
                    style={{
                      borderRadius: 10,
                      paddingBottom: 20,
                      cursor: "pointer",
                    }}
                    onClick={() =>
                      handleShowModal(
                        data.data.find((movie) => movie.id === "4")
                      )
                    }
                  />
                  <h3 className="MovieName">Spy X Family</h3>
                </div>
                <div className="col">
                  <img
                    id="Titan"
                    src="src/assets/Image/titan.png"
                    alt=""
                    style={{
                      borderRadius: 10,
                      paddingBottom: 20,
                      cursor: "pointer",
                    }}
                    onClick={() =>
                      handleShowModal(
                        data.data.find((movie) => movie.id === "5")
                      )
                    }
                  />
                  <h3 className="MovieName">Shingeki no kyoujin</h3>
                </div>
                <div className="col">
                  <img
                    id="Captain"
                    src="src/assets/Image/captain.jpeg"
                    alt=""
                    style={{
                      borderRadius: 10,
                      paddingBottom: 20,
                      cursor: "pointer",
                    }}
                    onClick={() =>
                      handleShowModal(
                        data.data.find((movie) => movie.id === "6")
                      )
                    }
                  />
                  <h3 className="MovieName" style={{ paddingBottom: 150 }}>
                    Captain Tsubasa
                  </h3>
                </div>
                <div className="col">
                  <img
                    id="Soccer"
                    src="src/assets/Image/soccer.jpeg"
                    alt=""
                    style={{
                      borderRadius: 10,
                      paddingBottom: 20,
                      cursor: "pointer",
                    }}
                    onClick={() =>
                      handleShowModal(
                        data.data.find((movie) => movie.id === "7")
                      )
                    }
                  />
                  <h3 className="MovieName">Aoashi</h3>
                </div>
              </div>
              <div style={{ paddingBottom: 50 }}></div>
            </div>
          </div>
        </div>
        <Modal
          isOpen={showModal}
          onClose={handleCloseModal}
          movie={selectedMovie}
        />
      </div>
    </>
  );
}

export default App;
