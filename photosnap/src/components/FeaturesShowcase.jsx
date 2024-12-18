function FeaturesShowcase({ featuresData }) {
  return (
    <div className="features-showcase">
      {featuresData.map((feature, index) => {
        const { heading, paragraph, imgSrc } = feature;

        return (
          <div key={index} className="features-showcase__item">
            <img src={imgSrc} alt="" className="features-showcase__img" />
            <h3 className="features-showcase__heading">{heading}</h3>
            <p className="features-showcase__paragraph">{paragraph}</p>
          </div>
        );
      })}
    </div>
  );
}

export default FeaturesShowcase;
