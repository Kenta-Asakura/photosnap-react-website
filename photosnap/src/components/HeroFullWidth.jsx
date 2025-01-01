import { useAnimation } from "../hooks/useAnimation";
import { useLazyImageLoader } from "../hooks/useLazyImageLoader";

function HeroFullWidth({ heading, subHeading, publishDate, author, paragraph, btnText, btnColor, textColor, bgImgSrc}) {
  const desktopImg = bgImgSrc?.desktop;
  const tabletImg = bgImgSrc?.tablet;
  const mobileImg = bgImgSrc?.mobile;
  const blurredImg = bgImgSrc?.blurred;

  const { ref, animationClass } = useAnimation('', 'slide-from-left');
  const { imageRef } = useLazyImageLoader(); // Use the hook and get the imageRef

  return (
    <section ref={ref} className={`hero-full-width ${animationClass}`}>
      <div className="hero-full-width-inner-wrapper">

        <div
          ref={imageRef}
          className="hero-full-width__bg-image"
          style={{ backgroundImage: `url(${blurredImg})` }}
        >
          <picture>
            <source media="(max-width: 768px)" srcSet={mobileImg} />
            <source media="(max-width: 1024px)" srcSet={tabletImg} />
            <img
              src={desktopImg}
              alt={`${heading} Image`}
              loading="lazy"
            />
          </picture>
        </div>
        <div className="hero-full-width__bg-overlay"></div>

        <div className={`hero-full-width__contents-block hero-full-width__contents-block--${textColor}`}>
          <div className="hero-full-width__contents-block-inner-wrapper">
            <p className="hero-full-width__contents-block__sub-heading">{subHeading}</p>
            <h2 className="hero-full-width__contents-block__heading h2-large">{heading}</h2>

            <div>
              <span className="hero-full-width__contents-block__date text--opacity-light">{publishDate}</span>
              <span className="hero-full-width__contents-block__author">{author}</span>
            </div>

            <p className="hero-full-width__contents-block__description text--opacity-lighter">{paragraph}</p>
            <a href="" className={`hero-full-width__contents-block__btn btn-secondary btn-secondary--${btnColor}`}>
              {btnText}
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default HeroFullWidth;
