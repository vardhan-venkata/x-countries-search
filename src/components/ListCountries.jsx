import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ListCountries.css";

function ListCountries({ searchValue }) {
  const [countriesData, setCountriesData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const fetchCountries = async () => {
    try {
      let response = await axios.get(
        "https://countries-search-data-prod-812920491762.asia-south1.run.app/countries"
      );
      console.log("response", response);
      setCountriesData(response.data);
      setFilteredData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchCountries();
  }, []);
  useEffect(() => {
    if (searchValue) {
      let fil =
        filteredData &&
        filteredData.length > 0 &&
        filteredData.filter((ele) =>
          ele.common?.toLowerCase().includes(searchValue)
        );
      console.log(fil);
      setFilteredData(fil);
    } else {
      setFilteredData(countriesData);
    }
  }, [searchValue]);
  return (
    <div className="main">
      <h1>Countries List</h1>
      <div className="countryList">
        {filteredData &&
          filteredData.length > 0 &&
          filteredData.map((ele) => {
            return (
              <div className="countryCard">
                <img src={ele.png} alt={ele.common} className="image" />
                <p>{ele.common}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default ListCountries;
