import { useState } from "react";
import HeroTwoBlocks from "../components/HeroTwoBlocks";
import Newsletter from "../components/Newsletter";
import PricingCard from "../components/PricingRateCard";
import ToggleSwitch from "../components/ToggleSwitch";
import { pricingHeroData, pricingCardMainData, pricingCardSubData, pricingCardSubData2 } from "../data/pricingData";

function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const handleToggle = () => {
    setIsYearly((prev) => !prev);
  };

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

      <div className="pricing-cards">
        <div className="container">
          <div className="pricing-cards__toggle-wrapper">
            <span className={!isYearly ? "pricing-cards__toggle-option pricing-cards__toggle-option--active" : "pricing-cards__toggle-option"}>Monthly</span>
            <ToggleSwitch
              toggleClassName='pricing-cards__toggle-switch'
              isToggled={isYearly}
              onChange={handleToggle}
            />
            <span className={isYearly ? "pricing-cards__toggle-option pricing-cards__toggle-option--active" : "pricing-cards__toggle-option"}>Yearly</span>
          </div>

          <div className="pricing-cards__cards-wrapper">
            <PricingCard pricingCardData={pricingCardSubData} isYearly={isYearly} />
            <PricingCard pricingCardData={pricingCardMainData}  isYearly={isYearly} />
            <PricingCard pricingCardData={pricingCardSubData2}  isYearly={isYearly} />
          </div>
        </div>
      </div>

      <Newsletter />
    </>
  )
}

export default Pricing;
