import MainNav from "./MainNav";

function Header(params) {
  return (
    <header className="header">
      <div className="header-inner-wrapper container-fluid">
        <MainNav></MainNav>
      </div>
    </header>
  )
}

export default Header;
