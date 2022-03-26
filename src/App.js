import logo from "./logo.svg";
import "./App.css";
import Country from "./Components/Country/Country";
import "../src/Components/Country/Country.css";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <LoadCountries></LoadCountries>
    </div>
  );
}

//load countries

function LoadCountries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div className="display-countries">
      {countries.map((country) => (
        <Country
          name={country.name.common}
          capital={country.capital}
          continents={country.continents}
          flags={country.flags.png}
        ></Country>
      ))}
    </div>
  );
}
export default App;
