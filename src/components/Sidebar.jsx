import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiCloseLine } from "react-icons/ri";
import { logo } from "../assets";
import { links } from "../assets/constants";

const Sidebar = ({handleClick}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  console.log(links[0].name);

  return (
    <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#042221]">
      <img src={logo} alt="logo" className="w-full h-14 object-contain" />
      {links.map((item) => (
        <li
          key={item.name}
          className="list-none mt-10"
        >
          <NavLink className=" flex justify-start items-center my-2 font-medium text-sm text-gray-400 hover:text-cyan-400"
          to={item.to}
          onClick={()=> handleClick && handleClick()}
          >
            <item.icon className="w-6 h-6 mr-2"/>
            {item.name}
          </NavLink>
        </li>
      ))}
    </div>
  );
};

export default Sidebar;
