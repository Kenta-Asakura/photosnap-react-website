import Button from "./Button";

function PricingCard({ pricingCardData, isYearly }) {
  return (
    pricingCardData.map((card, index) => {
      const { planHeading, planDescription, rateAmount, cardVariant } = card;
      const variantClass = `pricing-card--${cardVariant}`;
      const btnColor = cardVariant === 'main' ? 'white' : 'black';

      const displayedRateAmount = isYearly ? rateAmount * 10 : rateAmount;
      const rateDuration = isYearly ? "year" : "month";

      return(
        <div key={index} className={`pricing-card ${variantClass}`}>
          <div className="pricing-card__plan">
            <h2 className="pricing-card__plan-heading">{planHeading}</h2>
            <p className="pricing-card__plan-description text--opacity-lighter">{planDescription}</p>
          </div>

          <div className="pricing-card__rate">
            <p className="pricing-card__rate-amount">${displayedRateAmount}.00</p>
            <p className="pricing-card__rate-duration text--opacity-lighter">per {rateDuration}</p>
          </div>

          <Button
            buttonClassName='pricing-card__btn'
            variant='primary'
            btnColor={btnColor}
            btnText='Pick plan'
          />
        </div>
      );
    })
  )
}

export default PricingCard;
