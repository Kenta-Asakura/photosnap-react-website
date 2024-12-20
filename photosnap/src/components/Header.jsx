import MainNav from "./MainNav";

function Header({ setCurrentPage }) {
  return (
    <header className="header">
      <div className="header-inner-wrapper container-fluid">
        <MainNav setCurrentPage={setCurrentPage}></MainNav>
      </div>
    </header>
  )
}

export default Header;
