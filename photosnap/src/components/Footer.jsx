import FooterLogo from '../assets/shared/desktop/logo-white.svg';
import Nav from "./Nav";
import SocialLinks from './SocialLinks';

function Footer(params) {
  return (
    <footer className="footer">
      <div className="footer-inner-wrapper container">
        <div className="footer__block-left">
          <a className="footer__logo" href="">
            <img src={FooterLogo} alt="Photosnap Footer Logo" />
          </a>
          <Nav className="footer__nav" type="footer" />
          <SocialLinks className="footer_social-links" />
        </div>

        <div className="footer__block-right">

        </div>
      </div>
    </footer>
  )
}

export default Footer;
