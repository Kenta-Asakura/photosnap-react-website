import HeroTwoBlocks from "../components/HeroTwoBlocks";
import StoriesGrid from "../components/StoriesGrid";
import FeaturesShowcase from "../components/FeaturesShowcase";

import { heroBlocksData } from "../data/homeData";
import { storiesGridData } from "../data/storiesData";
import { featuresShowcaseData, featuresShowcaseData2 } from "../data/featuresData";

const processedstoriesGridData = storiesGridData.map(story => ({
  ...story,
  date: null,
}));

const combinedFeaturesShowcaseData = [...featuresShowcaseData, ...featuresShowcaseData2];

function Home() {
  return (
    <>
      {heroBlocksData.map((block, index) => (
        <HeroTwoBlocks
          key={index}
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
      {/* <FeaturesShowcase
        featuresData={combinedFeaturesShowcaseData}
        showcaseLayout="double"
      /> */}
    </>
  )
}

export default Home;
