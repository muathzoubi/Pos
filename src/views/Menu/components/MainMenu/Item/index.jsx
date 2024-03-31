import React from "react";

const Item = ({ element, clickHandler }) => (
  <li className=" pb-5 px-1 " >
    <button className="w-full focus:outline-none" onClick={clickHandler}>
      <div className="relative bg-red-500 rounded-md overflow-hidden h-48">
        <img
          className="absolutew-full object-cover"
          src={element.image}
          alt={element.title}
        />
      </div>

      <div className="flex flex-col items-center py-2">
        <label className="font-bold text-md text-gray-700">
          {element.title}
        </label>
        <span className="text-sm text-gray-600">
          {new Intl.NumberFormat("de-DE").format(element.price)} دينار
        </span>
      </div>
    </button>
  </li>
);

export default Item;
