import React from "react";
import logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import Ourteam from "./../pages/Ourteam";
import Testinomial from "./../pages/Testinomial";
import Addmision from "./../pages/Addmision";

const Navbar = () => {
  return (
    <div className="flex justify-evenly bg-blue-200">
      <nav className="h-10">
        <ul className="flex gap-3 font-semibold text-lg items-center">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Facilities">Facilities</Link>
          </li>
          <li>
            <Link to="/Ourteam">Ourteam</Link>
          </li>
          <li>
            <Link to="/Testinomial">Testinomial</Link>
          </li>
          <li>
            <Link to="/Addmision">Addmision</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
