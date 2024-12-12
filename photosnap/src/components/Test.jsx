function MainNav(params) {
  return (
    <nav className="main-nav">
      <a className="header-logo" href="">
        <svg className="logo"></svg>
      </a>

      <button className="main-nav__mobile-toggle-btn">
        <svg className="open"></svg>
        <svg className="close"></svg>
      </button>

      <div className="main-nav__list-wrapper">
        <ul className="main-nav__list">
          <li className="main-nav-list__item"><a href="">Stories</a></li>
          <li className="main-nav-list__item"><a href="">Features</a></li>
          <li className="main-nav-list__item"><a href="">Pricing</a></li>
        </ul>

        <a href="" className="btn btn-primary btn-primary--black">Get an invite</a>
      </div>
    </nav>
  )
}

export default MainNav;
