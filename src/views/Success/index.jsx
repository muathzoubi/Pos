import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Success = () => {
  return (
    <div className="min-h-screen h-screen flex justify-center items-center between-center bg-gray-200 rounded">
      <div className="w-3/5 h-104 flex flex-col justify-center items-center bg-red-500 shadow-lg border rounded">
        <div className="mb-5">
          <p className="font-bold text-2xl text-center text-gray-100">
            اكتملت العملية
          </p>
          <p className="font-bold text-2xl text-center text-gray-100"></p>
        </div>

        <Link to="/">
          <button className="flex items-center font-semibold text-gray-700 bg-gray-100 shadow-lg py-2 px-5 focus:outline-none rounded">
            <FontAwesomeIcon className="text-sm mr-1" icon={faArrowLeft} />
            الرجوع للقائمة
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
