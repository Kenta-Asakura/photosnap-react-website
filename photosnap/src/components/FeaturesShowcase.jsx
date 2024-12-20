import { useAnimation } from "../hooks/useAnimation";

function FeaturesShowcase({ featuresData, showcaseLayout = 'single' }) {
  const { ref, animationClass } = useAnimation('features-showcase', 'fade-in');

  return (
    <div ref={ref} className={`features-showcase ${animationClass}`}>
      <div className="container">
        <div className={`features-showcase-inner-wrapper features-showcase--${showcaseLayout}`}>
          {featuresData.map((feature, index) => {
            const { heading, paragraph, imgSrc } = feature;

            return (
              <div key={index} className="features-showcase__item">
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
