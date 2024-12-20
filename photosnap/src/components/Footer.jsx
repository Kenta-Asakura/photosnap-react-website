import FooterLogo from '../assets/shared/desktop/logo-white.svg';
import Button from './Button';
import Nav from "./Nav";
import SocialLinks from './SocialLinks';

function Footer({ setCurrentPage }) {
  return (
    <footer className="footer">
      <div className="footer-inner-wrapper container">
        <div className="footer__block-left">
          <a className="footer__logo" href="">
            <img src={FooterLogo} alt="Photosnap Footer Logo" />
          </a>
          <Nav className="footer__nav" type="footer" setCurrentPage={setCurrentPage} />
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
