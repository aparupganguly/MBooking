import React from "react";
import "../../Styles/Navbar.css";
import SearchBar from "../Navbar/SearchBar";
import CreateButton from "../Navbar/CreateButton";
import DiscoverButton from "../Navbar/DiscoverButton";
import FavButton from "../Navbar/FavButton";
import logo from "../../Assets/NavBar/Logo.png";
import pfp from "../../Assets/NavBar/pfp.png";
import bell from "../../Assets/NavBar/bell.png";
const Navbar = () => {
  return (
    <div className='NavbarContainer'>
      <img src={logo} alt='' className='logo' />
      <SearchBar />
      <CreateButton />
      <DiscoverButton />
      <FavButton />
      <img src={bell} alt='Notif' className='notificationIcon' />
      <img src={pfp} alt='pfp' className='pfp' />
    </div>
  );
};

export default Navbar;
