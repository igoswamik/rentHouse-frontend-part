import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "reactstrap";
import "./CityListPage.css";
import Notfound from "./Notfound";
import CitySubHeader from "./CitySubHeader";
import FilterBar from "./FilterBar";
import Post from "../Components/Post";
import PaginatedData from "./PaginatedData";
import axios from "axios";
import Toast from "../../Components/Toast";
const Url = "http://localhost:8081/allposts";

function CityListPage(props) {
  const { city } = useParams();
  const [cityData, setCityData] = useState([]);

  const getDataFromServer = () => {
    axios
      .get(`${Url}`)
      .then((response) => {
        Toast.success(`Results found for ${city} City!!`);
        setCityData(response.data);
        console.log("citylist response.data=", response.data);
      })
      .catch((err) => {
        //err.message
        Toast.error("Something went wrong!!");
        console.log(err.message);
      });
  };

  useEffect(() => {
    getDataFromServer();
  }, []);

  return (
    <div className="top__container">
      <CitySubHeader city={city} />

      <Container className="mt-3 list__container">
        <div>
          <FilterBar />
        </div>
        {cityData.length === 0 ? (
          <Notfound />
        ) : (
          <PaginatedData list={cityData} />
        )}
      </Container>
    </div>
  );
}

export default CityListPage;
