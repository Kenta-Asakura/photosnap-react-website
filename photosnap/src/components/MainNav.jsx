import { useState } from "react";
import Nav from "./Nav";
import HeaderLogo from '../assets/shared/desktop/logo-black.svg';
import HamburgerMenuIcon from '../assets/shared/mobile/menu.svg';
import CloseIcon from '../assets/shared/mobile/close.svg';

function MainNav() {
  const [isMobileMenuExpanded, setMobileMenuExpanded] = useState(false);

  function toggleMobileMenu() {
    setMobileMenuExpanded(!isMobileMenuExpanded);
  }

  const mobileMenuIcon = isMobileMenuExpanded
    ? <img className="icon-close" src={CloseIcon} alt="Close Mobile Menu Icon" />
    : <img className="icon-open" src={HamburgerMenuIcon} alt="Open Mobile Menu Icon" />

  return (
    <nav className="main-nav">
      <a className="header-logo" href="">
        <img src={HeaderLogo} alt="Photosnap Header Logo" />
      </a>

      <button className="main-nav__mobile-toggle-btn" onClick={toggleMobileMenu}>
        {mobileMenuIcon}
      </button>

      <div className={`main-nav__list-wrapper ${isMobileMenuExpanded ? "main-nav__list-wrapper--expanded" : ""}`}>
        <Nav className="main-nav__list" type="header" />

        <a href="" className="btn btn-primary btn-primary--black">Get an invite</a>
      </div>
    </nav>
  )
}

export default MainNav;
