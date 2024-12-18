// Hero Blocks Imgs
import CreateAndShareDesktop from '../assets/home/desktop/create-and-share.jpg';
import CreateAndShareTablet from '../assets/home/tablet/create-and-share.jpg';
import CreateAndShareMobile from '../assets/home/mobile/create-and-share.jpg';
import BeautifulStoriesDesktop from '../assets/home/desktop/beautiful-stories.jpg';
import BeautifulStoriesTablet from '../assets/home/tablet/beautiful-stories.jpg';
import BeautifulStoriesMobile from '../assets/home/mobile/beautiful-stories.jpg';
import DesignedForEveryoneDesktop from '../assets/home/desktop/designed-for-everyone.jpg';
import DesignedForEveryoneTablet from '../assets/home/tablet/designed-for-everyone.jpg';
import DesignedForEveryoneMobile from '../assets/home/mobile/designed-for-everyone.jpg';

// Stories Grid Imgs
import MountainsDesktop from '../assets/stories/desktop/mountains.jpg';
import MountainsMobile from '../assets/stories/mobile/mountains.jpg';
import CityScapesDesktop from '../assets/stories/desktop/cityscapes.jpg';
import CityScapesMobile from '../assets/stories/mobile/cityscapes.jpg';
import EighteenDaysDesktop from '../assets/stories/desktop/18-days-voyage.jpg';
import EighteenDaysMobile from '../assets/stories/mobile/18-days-voyage.jpg';
import ArchitecturalsDesktop from '../assets/stories/desktop/architecturals.jpg';
import ArchitecturalsMobile from '../assets/stories/mobile/architecturals.jpg';

export const heroBlocksData = [
  {
    contentsBgColor: 'black',
    heading: 'Create and share your photo Stories',
    paragraph: 'Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.',
    btnText: 'Get An Invite',
    imgHeight: 'l',
    imgSrc: {
      desktop: CreateAndShareDesktop,
      tablet: CreateAndShareTablet,
      mobile: CreateAndShareMobile,
    },
  },
  {
    blocksLayout: 'reverse',
    contentsBgColor: 'white',
    heading: 'Beautiful stories every time',
    paragraph: 'We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.',
    btnText: 'View the stories',
    imgHeight: 'm',
    imgSrc: {
      desktop: BeautifulStoriesDesktop,
      tablet: BeautifulStoriesTablet,
      mobile: BeautifulStoriesMobile,
    },
  },
  {
    contentsBgColor: 'white',
    heading: 'Designed for everyone',
    paragraph: 'Photosnap can help you create stories that resonate with your audience. Our tool is designed for photographers of all levels, brands, businesses you name it.',
    btnText: 'View the stories',
    imgHeight: 'm',
    imgSrc: {
      desktop: DesignedForEveryoneDesktop,
      tablet: DesignedForEveryoneTablet,
      mobile: DesignedForEveryoneMobile,
    },
  },
];

export const storiesGridData = [
  {
    heading: 'The Mountains',
    author: 'John Appleseed',
    btnText: 'Read Story',
    imgSrc: {
      desktop: MountainsDesktop,
      mobile: MountainsMobile,
    },
  },
  {
    heading: 'Sunset Cityscapes',
    author: 'Benjamin Cruz',
    btnText: 'Read Story',
    imgSrc: {
      desktop: CityScapesDesktop,
      mobile: CityScapesMobile,
    },
  },
  {
    heading: '18 Days Voyage',
    author: 'Alexei Borodin',
    btnText: 'Read Story',
    imgSrc: {
      desktop: EighteenDaysDesktop,
      mobile: EighteenDaysMobile,
    },
  },
  {
    heading: 'Architecturals',
    author: 'Samantha Brooke',
    btnText: 'Read Story',
    imgSrc: {
      desktop: ArchitecturalsDesktop,
      mobile: ArchitecturalsMobile,
    },
  },
];
