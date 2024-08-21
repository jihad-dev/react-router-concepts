import React from "react";
import "./MenuItem.css";
import { Link } from "react-router-dom";
const MenuItem = ({ item }) => {
  const { strMealThumb, strArea, strInstructions, idMeal } = item;

  return (
    <div className="card">
      <img src={strMealThumb} alt="" />
      <h2>{strArea}</h2>
      <h6>{strInstructions}</h6>
      <button>
        
        <Link to={`/details/${idMeal}`}>Details</Link>
      </button>
    </div>
  );
};

export default MenuItem;
