import HeroTwoBlocks from "../components/HeroTwoBlocks";
import FeaturesShowcase from "../components/FeaturesShowcase";
import Newsletter from "../components/Newsletter";
import { heroBlocksData, featuresShowcaseData, featuresShowcaseData2 } from "../data/featuresData";

const combinedFeaturesShowcaseData = [...featuresShowcaseData, ...featuresShowcaseData2];

function Features() {
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
      <FeaturesShowcase
        featuresData={combinedFeaturesShowcaseData}
        showcaseLayout="double"
      />
      <Newsletter />
    </>
  )
}

export default Features;
