import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiCloseLine } from "react-icons/ri";
import { logo } from "../assets";
import { links } from "../assets/constants";

// const NavLink =()=>{

//   <div className="">

//   </div>

// }

const Sidebar = () => {
 const [mobileMenuOpen, setMobileMenuOpen]= useState(false);


  return <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#070524]">
     <img src={logo} alt="logo" className="w-full h-14 object-contain"/>
     {/* <NavLink/> */}
  </div>;
};

export default Sidebar;
