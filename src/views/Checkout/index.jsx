import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import * as actions from "../../redux/actions";

const Checkout = () => {
  // create state
  const [state, setState] = useState({
    redirect: false,
    name: "",
  });

  // get global state
  const cart = useSelector((state) => state.cart);

  // create dispatch
  const dispatch = useDispatch();

  // create input handler
  const inputHandler = (event) => {
    const { name, value } = event.target;

    setState({ [name]: value });
  };

  // create submit handler
  const submitHandler = (event) => {
    event.preventDefault();

    // create new object property
    cart.name = state.name;

    // dispatch action
    dispatch(actions.add_order(cart));

    // dispatch action
    dispatch(actions.reset_cart());

    setState({ redirect: true });
  };

  const rows = [];
  cart.items.forEach((element, index) => {
    rows.push(
      <tr key={index} className="border-b">
        <td className="py-5">
          <div className="relative bg-red-500 rounded-md overflow-hidden h-12 w-12">
            <img
              className="absolute h-full w-full object-cover"
              src={element.image}
              alt={element.title}
            />
          </div>
        </td>
        <td className="py-5">
          <label className="font-medium text-sm text-gray-700">
            {element.title}
          </label>
        </td>
        <td className="py-5">
          <span className="font-medium text-sm text-gray-600">
            {element.quantity} الكمية
          </span>
        </td>
        <td className="py-5">
          <p className="font-medium text-sm text-gray-600">
            دينار {element.price * element.quantity},-
          </p>
        </td>
      </tr>
    );
  });

  // if redirect true
  if (state.redirect) {
    return <Redirect to="/success" />;
  }

  // if cart item less than 0 redirect it
  if (cart.items.length <= 0) {
    return <Redirect to="/" />;
  }

  return (
    <div className="min-h-screen h-screen flex justify-center items-center between-center bg-gray-200">
      <div className="w-3/5 h-104 flex bg-red-500 shadow-lg border">
        <div className="w-2/3 flex flex-col bg-gray-100">
          <div className="flex px-10">
            <Link to="/">
              <button className="flex items-center font-semibold text-Violet-500 pt-5 pb-3 focus:outline-none">
                <FontAwesomeIcon className="text-sm mr-1" icon={faArrowLeft} />
                رجوع
              </button>
            </Link>
          </div>

          <div className="flex-1 overflow-hidden overflow-y-auto px-10">
            <table className="w-full">
              <tbody>{rows}</tbody>
            </table>
          </div>
        </div>

        <div className="w-1/3 flex flex-col">
          <div className="flex-1 px-3 py-10">
            <label className="font-semibold text-gray-100 text-lg">
              التفاصيل الإجمالية:
            </label>
            <ul className="mt-5">
              <li className="flex justify-between mb-2">
                <label className="font-semibold text-gray-100 text-sm">
                  المجموع الفرعي
                </label>
                <span className="font-semibold text-gray-100 text-sm">
                  {cart.sub_total} دينار
                </span>
              </li>
              <li className="flex justify-between mb-2">
                <label className="font-semibold text-gray-100 text-sm"></label>
                <span className="font-semibold text-gray-100 text-sm"></span>
              </li>
              <li className="flex justify-between mb-2">
                <label className="font-semibold text-gray-100 text-sm">
                  المجموع
                </label>
                <span className="font-semibold text-gray-100 text-sm">
                  {cart.total} دينار
                </span>
              </li>
            </ul>

            <form id="formCheckout" onSubmit={submitHandler}></form>
          </div>

          <div className="flex justify-center items-center p-3">
            <button
              type="submit"
              form="formCheckout"
              className="w-full font-semibold text-md text-gray-700 bg-gray-100 py-2 focus:outline-none"
            >
              دفع
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
