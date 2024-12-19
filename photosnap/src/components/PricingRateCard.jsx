import Button from "./Button";

function PricingCard({ pricingCardData }) {
  return (
    pricingCardData.map((card, index) => {
      const { planHeading, planDescription, rateAmount, cardVariant } = card;
      const variantClass = `pricing-card--${cardVariant}`;
      const btnColor = cardVariant === 'main' ? 'white' : 'black';

      return(
        <div key={index} className={`pricing-card ${variantClass}`}>
          <div className="pricing-card__plan">
            <p className="pricing-card__plan-heading">{planHeading}</p>
            <p className="pricing-card__plan-description text--opacity-lighter">{planDescription}</p>
          </div>

          <div className="pricing-card__rate">
            <p className="pricing-card__rate-amount">{rateAmount}</p>
            <p className="pricing-card__rate-duration text--opacity-lighter">per month</p>
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
