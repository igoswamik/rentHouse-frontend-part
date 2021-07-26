import React from "react";
import SearchIcon from "@material-ui/icons/Search";
// import { Link } from "react-router-dom";
import "./Home.css";
import City from "./Components/City";
import SettingsVoiceIcon from "@material-ui/icons/SettingsVoice";
let array = [
  {
    city: "Delhi",
    image:
      "https://images.pexels.com/photos/1542620/pexels-photo-1542620.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    city: "Mumbai",
    image:
      "https://images.pexels.com/photos/4911475/pexels-photo-4911475.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    city: "Banglore",
    image:
      "https://images.pexels.com/photos/3584437/pexels-photo-3584437.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=400&w=500",
  },
  {
    city: "Prayagraj",
    image:
      "https://images.pexels.com/photos/574313/pexels-photo-574313.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    city: "Guwahati",
    image:
      "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
  {
    city: "Chennai",
    image:
      "https://images.pexels.com/photos/6667281/pexels-photo-6667281.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
];
function Home() {
  var recognizing;
  var recognition = new window.webkitSpeechRecognition();
  recognition.continuous = true;
  reset();
  recognition.onend = reset();

  recognition.onresult = function (event) {
    for (var i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        document.getElementById("textarea").value +=
          event.results[i][0].transcript;
      }
    }
  };

  function reset() {
    recognizing = false;
  }

  function toggleStartStop() {
    if (recognizing) {
      recognition.stop();
      reset();
    } else {
      recognition.start();
      recognizing = true;
    }
  }

  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images.pexels.com/photos/453201/pexels-photo-453201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=100%"
        alt="home landscape"
      />
      <div className="welcome__note">
        <strong>Welcome!</strong> <br></br> Search the house of your dreams{" "}
      </div>

      <div className="home__Search">
        <SettingsVoiceIcon id="voicebutton" onClick={toggleStartStop} />
        <input
          className="home__searchInput"
          id="textarea"
          type="text"
          placeholder="search by city name or zip code"
        />
        <SearchIcon className="home_searchIcon" />
      </div>

      <div className="home__container">
        <h1 className="feature_heading">Featured Cities</h1>
        <div className="home__row">
          {array.map((ele) => {
            return <City city={ele.city} image={ele.image} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
