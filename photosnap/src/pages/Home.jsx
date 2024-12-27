import HeroTwoBlocks from "../components/HeroTwoBlocks";
import StoriesGrid from "../components/StoriesGrid";
import FeaturesShowcase from "../components/FeaturesShowcase";

import { heroBlocksData } from "../data/homeData";
import { storiesGridData } from "../data/storiesData";
import { featuresShowcaseData } from "../data/featuresData";

const processedstoriesGridData = storiesGridData.map(story => ({
  ...story,
  date: null,
}));

function Home() {
  return (
    <>
      {heroBlocksData.map((block, index) => (
        <HeroTwoBlocks
          key={index}
          index={index + 1}
          blocksLayout={block.blocksLayout}
          contentsBgColor={block.contentsBgColor}
          heading={block.heading}
          paragraph={block.paragraph}
          btnText={block.btnText}
          imgHeight={block.imgHeight}
          imgSrc={block.imgSrc}
        />
      ))}

      <StoriesGrid storiesData={processedstoriesGridData} />

      <FeaturesShowcase featuresData={featuresShowcaseData} />
    </>
  )
}

export default Home;
