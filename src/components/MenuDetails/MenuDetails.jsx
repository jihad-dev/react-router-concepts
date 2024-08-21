import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./menuDetails.css";
const MenuDetails = () => {
  const data = useLoaderData();
  const menuDetails = data?.meals;

  return (
    <>
      <div className="menuDetailsCard">
        {menuDetails?.map((menuDetail) => (
          <div>
            <h2>{menuDetail.idMeal}</h2>
            <img src={menuDetail?.strMealThumb} alt="" />

            <button>
              <Link to="/">Back</Link>
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default MenuDetails;
