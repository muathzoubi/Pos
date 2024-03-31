import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

const navbar = ({ search, onHandleSearch,handleShowCart }) => {
  // handle search with lifting state up
  
  const handleSearch = (event) => {
    const { value } = event.target;

    onHandleSearch(value);
  };

  return (
    <nav className="flex">
      {/* left side */}
      <div className="w-9/12 flex items-center shadow-lg py-2">
        <div className="w-3/12 px-10">
          <label className="text-xl font-bold text-Violet-700">لوجو </label>
        </div>

        <div className="w-9/12 px-5">
          <input
            type="text"
            className="w-full font-semibold text-Violet-700 bg-gray-300 py-2 px-4 focus:outline-none"
            placeholder="بحث عن منتجاتك"
            value={search}
            onChange={handleSearch}
          />
        </div>
      </div>

      <div className="w-3/12 flex bg-gray-100 shadow-lg px-5">
        <button className="w-full flex justify-center items-center text-lg text-center font-semibold text-gray-700 border-b" onClick={()=>handleShowCart()}>
          السلة
          <FontAwesomeIcon className="text-sm mr-1" icon={faShoppingBasket} />
        </button>
      </div>
    </nav>
  );
};

export default navbar;
