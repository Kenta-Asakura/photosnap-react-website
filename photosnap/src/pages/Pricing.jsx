import HeroTwoBlocks from "../components/HeroTwoBlocks";
import PricingCards from "../layout/PricingCards";
import PricingTable from "../components/PricingTable";
import Newsletter from "../layout/Newsletter";
import { pricingHeroData } from "../data/pricingData";

function Pricing() {
  return (
    <>
      {pricingHeroData.map((block, index) => (
        <HeroTwoBlocks
          key={index}
          index={index + 1}
          blocksLayout={block.blocksLayout}
          contentsBgColor={block.contentsBgColor}
          heading={block.heading}
          paragraph={block.paragraph}
          imgHeight={block.imgHeight}
          imgSrc={block.imgSrc}
        />
      ))}
      <PricingCards />
      {/* <PricingTable /> */}
      <Newsletter />
    </>
  );
}

export default Pricing;
