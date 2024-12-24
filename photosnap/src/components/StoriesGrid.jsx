import { useAnimation } from "../hooks/useAnimation";

function StoriesGrid({ storiesData }) {
  return (
    <div className="stories-grid">
      {storiesData.map((story, index) => {
        const { date, heading, author, imgSrc } = story;
        const { ref, animationClass } = useAnimation('fade-in--initial', 'fade-in');

        return (
          <div key={index} ref={ref} className={`stories-grid__item ${animationClass} `}>

            <div className="stories-grid__bg-image">
              <picture>
                <source media="(max-width: 768px)" srcSet={imgSrc?.mobile} />
                <img
                  className="stories-grid__bg-image__img"
                  src={imgSrc?.desktop}
                  alt={`${heading} Image`}
                />
              </picture>
              <div className="stories-grid__bg-image-overlay"></div>
            </div>

            <div className="stories-grid__contents-overlay">
              {date && (
                <p className="stories-grid__contents-overlay__date text-small">{date}</p>
              )}
              <h3 className="stories-grid__contents-overlay__heading">{heading}</h3>
              <p className="stories-grid__contents-overlay__author text-small">by {author}</p>
              <a href="#" className="stories-grid__contents-overlay__btn btn-secondary btn-secondary--white">Read Story</a>
            </div>

            <div className="stories-grid__border-btm gradient-bar"></div>
          </div>
        );
      })}
    </div>
  );
}

export default StoriesGrid;
