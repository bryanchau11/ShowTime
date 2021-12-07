import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomeBackGround from "./assets/Images/homebackground.jpg";
import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import Embed from "react-embed";
var axios = require("axios").default;
function App() {
  const args = JSON.parse(document.getElementById("data").text);
  const [id, setID] = useState(null);
  useEffect(() => {
    const options = {
      method: "GET",
      url: "http://www.omdbapi.com/?",
      params: { t: "Venom", apikey: `${process.env.REACT_APP_OMDB_FREE}` },
    };
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.imdbID);
        setID(response.data.imdbID);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <div className="home-container">
        <div>
          <NavBar />
        </div>
        <div className="community" id="header">
          <img src={HomeBackGround} alt="home" className="thumbnail" />
          <iframe
            title="movie"
            src={`https://www.2embed.ru/embed/imdb/movie?id=${id}`}
          />
        </div>
        <div className="text">
          <SearchBar />
        </div>
      </div>
    </div>
  );
}

export default App;
