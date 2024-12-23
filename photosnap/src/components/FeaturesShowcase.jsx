import { useAnimation } from "../hooks/useAnimation";

function FeaturesShowcase({ featuresData, showcaseLayout = 'single' }) {
  return (
    <div className="features-showcase">
      <div className="container">
        <div className={`features-showcase-inner-wrapper features-showcase--${showcaseLayout}`}>
          {featuresData.map((feature, index) => {
            const { heading, paragraph, imgSrc } = feature;
            const { ref, animationClass } = useAnimation('fade-in--initial', 'fade-in');

            return (
              <div key={index} ref={ref} className={`features-showcase__item ${animationClass}`}>
                <div className="features-showcase__img-wrapper">
                  <img src={imgSrc} alt="" className="features-showcase__img" />
                </div>

                <div className="features-showcase__contents">
                  <h3 className="features-showcase__contents-heading">{heading}</h3>
                  <p className="features-showcase__contents-paragraph text--opacity-lighter">{paragraph}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FeaturesShowcase;
