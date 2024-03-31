import React, { useState } from "react";
import NavBar from "./components/NavBar";
import SideMenu from "./components/SideMenu";
import MainMenu from "./components/MainMenu";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

const Menu = () => {
  const [showCart,setShowCart]=useState(false)
  const [showSide,setShowSide]=useState(false)
  const handleShowCart=()=>{
    setShowCart(!showCart)
  }
  const handleShowSide=()=>{
    setShowSide(!showSide)
  }
  // create state search
  const [search, setSearch] = useState("");

  // create handle search
  const handleSearch = (value) => {
    setSearch(value);
  };

  return (
    <div className="min-h-screen h-screen flex flex-col bg-gray-100">
      <NavBar showcart={showCart} search={search} onHandleSearch={handleSearch} handleShowCart={handleShowCart}/>

      <div className="min-w-screen">
        <div className=" flex">
        {showSide?   <SideMenu />:null}

          <MainMenu search={search} />
        </div>
    
    
      </div>
      {showCart?  <div style={{position:'absolute',right:0,top:0,bottom:0}} className="w-6/12 flex flex-col justify-between shadow-lg bg-gray-100 px-5">
        
          <Cart handleShowCart={handleShowCart}/>

          <Checkout />
        </div>:null}
    </div>
  );
};

export default Menu;
