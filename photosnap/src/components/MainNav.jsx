import Nav from "./Nav";
import HeaderLogo from "../assets/shared/desktop/logo-black.svg";
import HamburgerMenuIcon from "../assets/shared/mobile/menu.svg";
import CloseIcon from "../assets/shared/mobile/close.svg";

function MainNav({ setCurrentPage, toggleMobileMenu, isMobileMenuExpanded }) {
  const mobileMenuIcon = isMobileMenuExpanded
    ? <img className="icon-close" src={CloseIcon} alt="Close Mobile Menu Icon" />
    : <img className="icon-open" src={HamburgerMenuIcon} alt="Open Mobile Menu Icon" />;

  return (
    <nav className="main-nav">
      <a className="main-nav__logo" href="/" onClick={(e) => { e.preventDefault(); setCurrentPage("home"); }}>
        <img src={HeaderLogo} alt="Photosnap Header Logo" />
      </a>

      <button
        className="main-nav__mobile-toggle-btn"
        onClick={toggleMobileMenu}>
        {mobileMenuIcon}
      </button>

      <Nav
        className="main-nav__list"
        type="header"
        setCurrentPage={setCurrentPage}
      />

      <a href="" className="main-nav__invite-btn btn btn-primary btn-primary--black">Get an invite</a>
    </nav>
  );
}

export default MainNav;
