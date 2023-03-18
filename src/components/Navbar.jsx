import React from "react";
import { FaCoins } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  // const [fix, setFix] = useState(false);
  // function handleScroll() {
  //   if (window.scrollY > 50) {
  //     setFix(true);
  //     console.log("fix");
  //   } else {
  //     setFix(false);
  //   }
  // }
  // window.addEventListener("scroll", handleScroll);

  return (
    <Link to="/">
      <div className="navbar">
        <FaCoins className="icon" />
        <h1>
          {" "}
          Coin <span className="gold">Case</span>
        </h1>
      </div>
    </Link>
  );
};

export default Navbar;
