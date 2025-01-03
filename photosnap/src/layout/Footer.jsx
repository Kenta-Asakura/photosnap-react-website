import FooterLogo from '../assets/shared/desktop/logo-white.svg';
import Button from '../components/Button';
import Nav from "../components/Nav";
import SocialLinks from '../components/SocialLinks';

function Footer({ setCurrentPage }) {
  return (
    <footer className="footer">
      <div className="footer-inner-wrapper container">
        <div className="footer__block-left">
          <a className="footer__logo" href="./home"
            onClick={(e) => {
              e.preventDefault()
              setCurrentPage('./home')
            }}>
            <img src={FooterLogo} alt="Photosnap Footer Logo" />
          </a>

          <Nav
            className="footer__nav"
            type="footer"
            setCurrentPage={setCurrentPage}
          />

          <SocialLinks className="footer__social-links" />
        </div>

        <div className="footer__block-right">
          <Button
            buttonClassName='footer__invite-btn'
            variant='secondary'
            btnColor='white'
            btnText='Get an invite'
          />
          <p className='footer__copyright'>Copyright 2019. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
