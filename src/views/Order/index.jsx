import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Order = () => {
  const order = useSelector((state) => state.order);

  const rows = [];

  order.orders.forEach((element, index) => {
    rows.push(
      <tr key={index} className="border-b">
        <td className="font-semibold text-gray-700 py-5">{element.date}</td>
        <td className="font-semibold text-gray-700 py-5">
          {element.no}/{element.name}رقم الطلب
        </td>
        <td className="font-semibold text-gray-700 text-center py-5">
          {element.sub_total} دينار
        </td>
        <td className="font-semibold text-gray-700 text-center py-5">
          {element.ppn}دينار
        </td>
        <td className="font-semibold text-gray-700 text-center py-5">
          {element.total}دينار
        </td>
      </tr>
    );
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="h-104 bg-red-500"></div>

      <div className="w-1/2 mx-auto h-full -mt-48">
        <div>
          <Link to="/">
            <button className="font-bold text-gray-100 text-2xl focus:outline-none">
              <FontAwesomeIcon
                className="text-lg align-baseline mr-2"
                icon={faArrowLeft}
              />
              رجوع
            </button>
          </Link>
        </div>

        <div className="font-bold text-gray-100 text-4xl pb-5">القائمة</div>

        <div className="h-full rounded-t-lg bg-gray-100 border shadow-lg p-5">
          <table className="w-full">
            <tbody>{rows}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Order;
