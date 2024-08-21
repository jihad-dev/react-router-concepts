import React from "react";
import { useLoaderData } from "react-router-dom";
import MenuItem from "../MenuItem/MenuItem";

const MenuCard = () => {
  const data = useLoaderData();
  const menu = data?.meals;
  
  return (
    <>
      <div className="container">
        {menu?.map((item) => (
          <MenuItem key={item.idMeal} item={item}></MenuItem>
        ))}
      </div>
    </>
  );
};

export default MenuCard;
