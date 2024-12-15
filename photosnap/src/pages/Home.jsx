import HeroTwoBlocks from "../components/HeroTwoBlocks";

import BeautifulStoriesDesktop from '../assets/home/desktop/beautiful-stories.jpg';
import BeautifulStoriesTablet from '../assets/home/tablet/beautiful-stories.jpg';
import BeautifulStoriesMobile from '../assets/home/mobile/beautiful-stories.jpg';

// import BeautifulStoriesDesktop from '../assets/home/desktop/beautiful-stories.jpg';
// import BeautifulStoriesTablet from '../assets/home/tablet/beautiful-stories.jpg';
// import BeautifulStoriesMobile from '../assets/home/mobile/beautiful-stories.jpg';

// import BeautifulStoriesDesktop from '../assets/home/desktop/beautiful-stories.jpg';
// import BeautifulStoriesTablet from '../assets/home/tablet/beautiful-stories.jpg';
// import BeautifulStoriesMobile from '../assets/home/mobile/beautiful-stories.jpg';

function Home() {
  const beautifulStoriesImgSrc = {
    desktop: BeautifulStoriesDesktop,
    tablet: BeautifulStoriesTablet,
    mobile: BeautifulStoriesMobile,
  };

  return (
    <>
      <HeroTwoBlocks
        contentsBgColor={'black'}
        heading={'Create and share your photo Stories'}
        paragraph={'Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.'}
        btnText={'Get An Invite'}
        imgHeight={'l'}
        imgSrc={BeautifulStoriesDesktop}
        // imgSrc={beautifulStoriesImgSrc}
      />

      <HeroTwoBlocks
        blocksLayout={'reverse'}
        contentsBgColor={'white'}
        heading={'Beautiful stories every time'}
        paragraph={'We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.'}
        btnText={'View the stories'}
        imgHeight={'m'}
      />

       <HeroTwoBlocks
        contentsBgColor={'white'}
        heading={'Designed for everyone'}
        paragraph={'Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it.'}
        btnText={'View the stories'}
        imgHeight={'m'}
      />
    </>
  )
}

export default Home;
