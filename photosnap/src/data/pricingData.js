// Hero Blocks Imgs
import PricingHeroDesktop from '../assets/pricing/desktop/hero.jpg';
import PricingHeroTablet from '../assets/pricing/tablet/hero.jpg';
import PricingHeroMobile from '../assets/pricing/mobile/hero.jpg';
import PricingHeroBlurred from '../assets/pricing/placeholder/hero.jpg';

export const pricingHeroData = [
  {
    contentsBgColor: 'black',
    heading: 'Pricing',
    paragraph: 'Create a your stories, Photosnap is a platform for photographers and visual storytellers.It’s the simple way to create and share your photos.',
    btnText: 'Get An Invite',
    imgHeight: 's',
    imgSrc: {
      desktop: PricingHeroDesktop,
      tablet: PricingHeroTablet,
      mobile: PricingHeroMobile,
      blurred: PricingHeroBlurred,
    },
  }
];


// Pricing Card Datas
export const pricingCardMainData = [
  {
    planHeading: 'Pro',
    planDescription: 'More advanced features available. Recommended for photography veterans and professionals.',
    rateAmount: 39,
    cardVariant: 'main'
  }
];

export const pricingCardSubData = [
  {
    planHeading: 'Basic',
    planDescription: 'Includes basic usage of our platform. Recommended for new and aspiring photographers.',
    rateAmount: 19,
    cardVariant: 'sub'
  }
];

export const pricingCardSubData2= [
  {
    planHeading: 'Business',
    planDescription: 'Additional features available such as more detailed metrics. Recommended for business owners.',
    rateAmount: 99,
    cardVariant: 'sub'
  }
]
