import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Card from "./components/Card";

const options = {
  method: "GET",
  url: "https://covid-193.p.rapidapi.com/statistics",
  params: { country: "India" },
  headers: {
    "X-RapidAPI-Key": "ec2eb5e15fmshfd41bd35e8d5de0p126f3ajsnc4a19a59166f",
    "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
  },
};

function App() {
  const [apiData, setapiData] = useState();
  options.params.country="India"
  const getApiData = async () => {
    try {
      await axios
        .request(options)
        .then(function (response) {
          console.log(response.data.response[0]);
          setapiData(response.data.response[0]);
        })
        .catch(function (error) {
          console.error(error);
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getApiData()
  }, []);

  return (
    <div className="App">
      <div className="p-5">
        <div className="text-center liveText"> &#128308; Live</div>
        <div className="fs-1 text-center my-2 ">Covid-19 Virus Tracker</div>
      </div>
      {apiData && (
        <>
        {console.log(apiData)}
          <div className="container d-flex flex-wrap gap-5 justify-content-center my-4">
            <Card data={apiData.country} borderColor={"border-primary"} topic={" Our Country"} />
            <Card data={apiData.cases.active} borderColor={"border-warning"} topic={"Active Cases"}  />
            <Card data={apiData.cases.recovered} borderColor={"border-success"} topic={"Recovered Cases"}  />
            <Card data={apiData.cases.total} borderColor={"border-dark-subtle"} topic={"Total Cases"}  />
            <Card data={apiData.deaths.total} borderColor={"border-danger"} topic={"Total Deaths"}  />
            <Card data={apiData.day} borderColor={"border-dark-subtle"} topic={"Updated Date"}  />
          </div>
        </>
      )}
      <div>
      </div>
    </div>
  );
}

export default App;
