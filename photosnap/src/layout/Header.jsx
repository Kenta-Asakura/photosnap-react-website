import { useState } from "react";
import MainNav from "../components/MainNav";
import Nav from "../components/Nav";

function Header({ setCurrentPage }) {
  const [isMobileMenuExpanded, setMobileMenuExpanded] = useState(false);

  function toggleMobileMenu() {
    setMobileMenuExpanded(!isMobileMenuExpanded);
  }

  return (
    <>
      <header className="header">
        <div className="header-inner-wrapper container-fluid">
          <MainNav
            setCurrentPage={setCurrentPage}
            toggleMobileMenu={toggleMobileMenu}
            isMobileMenuExpanded={isMobileMenuExpanded}
          />
        </div>
      </header>

      <div className={`mobile-nav ${isMobileMenuExpanded ? "mobile-nav--expanded" : ""}`}>
        <Nav
          className="mobile-nav__list"
          type="header"
          setCurrentPage={setCurrentPage}
          toggleMobileMenu={toggleMobileMenu}
        />

        <a href="" className="btn btn-primary btn-primary--black">Get an invite</a>
      </div>
    </>
  )
}

export default Header;
