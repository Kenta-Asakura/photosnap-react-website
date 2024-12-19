// Hero Blocks Imgs
import FeaturesHeroDesktop from '../assets/features/desktop/hero.jpg';
import FeaturesHeroTablet from '../assets/features/tablet/hero.jpg';
import FeaturesHeroMobile from '../assets/features/mobile/hero.jpg';

// Features Showcase 1 SVGs
import ResponsiveSVG from '../assets/features/desktop/responsive.svg'
import NoLimitSVG from '../assets/features/desktop/no-limit.svg';
import EmbedSVG from '../assets/features/desktop/embed.svg';

// Features Showcase 2 SVGs
import CustomDomainSVG from '../assets/features/desktop/custom-domain.svg';
import BoostExposureSVG from '../assets/features/desktop/boost-exposure.svg';
import DragDropSVG from '../assets/features/desktop/drag-drop.svg';


export const heroBlocksData = [
  {
    contentsBgColor: 'black',
    heading: 'Features',
    paragraph: 'We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.',
    btnText: 'Get An Invite',
    imgHeight: 's',
    imgSrc: {
      desktop: FeaturesHeroDesktop,
      tablet: FeaturesHeroTablet,
      mobile: FeaturesHeroMobile,
    },
  }
];

export const featuresShowcaseData = [
  {
    heading: '100% Responsive',
    paragraph: 'No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.',
    imgSrc: ResponsiveSVG,
  },
  {
    heading: 'No Photo Upload Limit',
    paragraph: 'Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.',
    imgSrc: NoLimitSVG,
  },
  {
    heading: 'Available to Embed',
    paragraph: 'Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.',
    imgSrc: EmbedSVG,
  }
]

export const featuresShowcaseData2 = [
  {
    heading: 'Custom Domain',
    paragraph: 'With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!',
    imgSrc: CustomDomainSVG,
  },
  {
    heading: 'Boost Your Exposure',
    paragraph: 'Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.',
    imgSrc: BoostExposureSVG,
  },
  {
    heading: 'Drag & Drop Image',
    paragraph: 'Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.',
    imgSrc: DragDropSVG,
  }
]
