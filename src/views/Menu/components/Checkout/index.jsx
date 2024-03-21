import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardList } from "@fortawesome/free-solid-svg-icons";

const Checkout = () => {
  // get global state
  const cart = useSelector((state) => state.cart);

  // destructuring cart
  const { sub_total, ppn, total } = cart;

  return (
    <div className="flex flex-col border-t pb-5" dir="rtl">
      <ul>
        <li className="flex justify-between font-medium text-gray-600 pt-3">
          المجموع الفرعي{" "}
          <span> {new Intl.NumberFormat("de-DE").format(sub_total)}دينار</span>
        </li>

        <li className="flex justify-between font-bold text-gray-700 py-5">
          المجموع
          <span> {new Intl.NumberFormat("de-DE").format(total)}دينار</span>
        </li>
      </ul>

      <div className="flex -mx-2">
        <div className="w-1/6 px-2">
          <Link to="/order">
            <button className="w-full font-semibold text-md text-white bg-red-500 py-2 focus:outline-none focus:bg-red-700 rounded">
              <FontAwesomeIcon className="text-lg" icon={faClipboardList} />
            </button>
          </Link>
        </div>

        <div className="w-5/6 px-2">
          <Link to="/checkout">
            <button
              className="w-full font-semibold text-md text-white bg-red-500 py-2 focus:outline-none focus:bg-red-700 rounded"
              disabled={cart.items.length > 0 ? false : true}
            >
              دفع الطلب
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
