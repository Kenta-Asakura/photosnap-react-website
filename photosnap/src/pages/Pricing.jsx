// import { useState } from "react";
import HeroTwoBlocks from "../components/HeroTwoBlocks";
import PricingCards from "../layout/PricingCards";
import Newsletter from "../components/Newsletter";
// import PricingCard from "../components/PricingRateCard";
// import ToggleSwitch from "../components/ToggleSwitch";
import {
  pricingHeroData,
  // pricingCardMainData,
  // pricingCardSubData,
  // pricingCardSubData2,
} from "../data/pricingData";
// import { useAnimation } from "../hooks/useAnimation";

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

      <Newsletter />
    </>
  );
}

export default Pricing;
