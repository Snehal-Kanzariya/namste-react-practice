import React from "react";
import { IMG_CDN_URL } from "./config";

const RestaurantCard = ({ name, cuisines, avgRating, cloudinaryImageId }) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="card" />
      <h4>{name}</h4>
      <div className="cusines">{cuisines.join(", ")}</div>
      <div className="rating">
        <span>{avgRating}</span>
      </div>
    </div>
  );
};

export default RestaurantCard;
