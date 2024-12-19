import HeroTwoBlocks from "../components/HeroTwoBlocks";
import Newsletter from "../components/Newsletter";
import PricingCard from "../components/PricingRateCard";
import { pricingHeroData, pricingCardMainData, pricingCardSubData, pricingCardSubData2 } from "../data/pricingData";

function Pricing() {
  return (
    <>
      {pricingHeroData.map((block, index) => (
        <HeroTwoBlocks
          key={index}
          blocksLayout={block.blocksLayout}
          contentsBgColor={block.contentsBgColor}
          heading={block.heading}
          paragraph={block.paragraph}
          imgHeight={block.imgHeight}
          imgSrc={block.imgSrc}
        />
      ))}

      <PricingCard pricingCardData={pricingCardSubData} />
      <PricingCard pricingCardData={pricingCardMainData} />
      <PricingCard pricingCardData={pricingCardSubData2} />

      <Newsletter />
    </>
  )
}

export default Pricing;
