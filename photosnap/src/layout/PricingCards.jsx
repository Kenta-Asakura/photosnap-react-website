import { useState } from "react";
import { useAnimation } from "../hooks/useAnimation";
import PricingCard from "../components/PricingRateCard";
import ToggleSwitch from "../components/ToggleSwitch";
import {
  pricingCardMainData,
  pricingCardSubData,
  pricingCardSubData2,
} from "../data/pricingData";

function PricingCards() {
  const [isYearly, setIsYearly] = useState(false);

  const handleToggle = () =>
    setIsYearly((prev) => !prev);

  const getToggleOptionClassName = (isActive) =>
    `pricing-cards__toggle-option${isActive ? " pricing-cards__toggle-option--active" : ""}`;

  const { ref, animationClass } = useAnimation('', 'slide-from-right');

  return (
    <div
      ref={ref}
      className={`pricing-cards ${animationClass}`}>

      <div className="container">
        <div className="pricing-cards__toggle-wrapper">
          <span className={getToggleOptionClassName(!isYearly)}>Monthly</span>

          <ToggleSwitch
            toggleClassName="pricing-cards__toggle-switch"
            isToggled={isYearly}
            onChange={handleToggle}
          />

          <span className={getToggleOptionClassName(isYearly)}>Yearly</span>
        </div>

        <div className="pricing-cards__cards-wrapper">
          <PricingCard
            pricingCardData={pricingCardSubData}
            isYearly={isYearly}
          />

          <PricingCard
            pricingCardData={pricingCardMainData}
            isYearly={isYearly}
          />

          <PricingCard
            pricingCardData={pricingCardSubData2}
            isYearly={isYearly}
          />
        </div>
      </div>
    </div>
  )
};

export default PricingCards;
