import HeroFullWidth from "../components/HeroFullWidth";

import MoonOfAppalaciaDesktop from '../assets/stories/desktop/moon-of-appalacia.jpg';
import MoonOfAppalaciaTablet from '../assets/stories/tablet/moon-of-appalacia.jpg';
import MoonOfAppalaciaMobile from '../assets/stories/mobile/moon-of-appalacia.jpg';

function Stories() {
  const heroFullWidthData = {
    subHeading: "Last month's featured story",
    heading: '  Hazy full moon of Appalachia',
    publishDate: 'March 2nd 2020',
    author: 'by John Appleseed',
    paragraph: 'The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.',
    btnText: 'Read the story',
    btnColor: 'white',
    textColor: 'white',
    bgImgSrc: {
      desktop: MoonOfAppalaciaDesktop,
      tablet: MoonOfAppalaciaTablet,
      mobile: MoonOfAppalaciaMobile,
    }
  }

  return (
    <div>
      <HeroFullWidth {...heroFullWidthData}/>
    </div>
  )
}

export default Stories;
