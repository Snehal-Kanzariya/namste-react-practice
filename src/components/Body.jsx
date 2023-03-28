import React, { useState } from "react";
import { restaurantList } from "./config";
import RestaurantCard from "./RestaurantCard";

function filterData(searchTxt, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.data.name.includes(searchTxt)
  );
  return filterData;
}

const Body = () => {
  const [searchTxt, setSearchTxt] = useState("");
  const [restaurants, setRestaturants] = useState(restaurantList);

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={searchTxt}
          onChange={(e) => {
            setSearchTxt(e.target.value);
          }}
        />
        <button
          style={{ margin: "12px", padding: "5px" }}
          className="search-btn"
          onClick={() => {
            const data = filterData(searchTxt, restaurants);
            setRestaturants(data);
          }}
        >
          search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
