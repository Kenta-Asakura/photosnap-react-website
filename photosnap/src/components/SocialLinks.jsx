import FacebookIcon from '../assets/shared/desktop/facebook.svg';
import InstagramIcon from '../assets/shared/desktop/instagram.svg';
import PinterestIcon from '../assets/shared/desktop/pinterest.svg';
import TwitterIcon from '../assets/shared/desktop/twitter.svg';
import YoutubeIcon from '../assets/shared/desktop/youtube.svg';

const socialLinks = [
  { name: "Facebook", icon: FacebookIcon, href: "https://www.facebook.com" },
  { name: "Instagram", icon: InstagramIcon, href: "https://www.instagram.com" },
  { name: "Pinterest", icon: PinterestIcon, href: "https://www.pinterest.com" },
  { name: "Twitter", icon: TwitterIcon, href: "https://www.twitter.com" },
  { name: "YouTube", icon: YoutubeIcon, href: "https://www.youtube.com" },
];

function SocialLinks({ className }) {
  return(
    <ul className={`social-links ${className}`}>
      {socialLinks.map((link) => (
        <li className="social-links__item" key={link.name}>
          <a href={link.href} target="_blank  " rel="noopener noreferrer">
            <img src={link.icon} alt={`${link.name} Icon`} />
          </a>
        </li>
      ))}
    </ul>
  )
}

export default SocialLinks;
