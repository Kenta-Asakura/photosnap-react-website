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

      <div className="pricing-cards">
        <div className="container">

          <div className="pricing-cards__toggle-wrapper">
            <span className="pricing-cards__toggle-option">Monthly</span>
            <button className="pricing-cards__toggle-switch"></button>
            <span className="pricing-cards__toggle-option">Yearly</span>
          </div>

          <div className="pricing-cards__cards-wrapper">
            <PricingCard pricingCardData={pricingCardSubData} />
            <PricingCard pricingCardData={pricingCardMainData} />
            <PricingCard pricingCardData={pricingCardSubData2} />
          </div>

        </div>
      </div>

      <Newsletter />
    </>
  )
}

export default Pricing;
