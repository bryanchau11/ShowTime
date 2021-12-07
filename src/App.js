import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeBackGround from "./assets/Images/homebackground.jpg";
import React from "react";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
function App() {
  const args = JSON.parse(document.getElementById("data").text);

  return (
    <div>
      <div className="home-container">
        <div>
          <NavBar />
        </div>
        <div className="community" id="header">
          <img src={HomeBackGround} alt="home" className="thumbnail" />
        </div>
        <div className="text">
          <SearchBar />
        </div>
      </div>
    </div>
  );
}

export default App;
