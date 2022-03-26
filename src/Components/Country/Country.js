import React from "react";

const Country = (props) => {
  console.log(props);
  //   const { name } = props.country;
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <h4>Capital: {props.capital}</h4>
      <p>Continet: {props.continents}</p>
      <img src={props.flags} alt="" />
    </div>
  );
};

export default Country;
