
import { useAnimation } from "../hooks/useAnimation";
import { useLazyImageLoader } from "../hooks/useLazyImageLoader";

function HeroTwoBlocks({
  index,
  blocksLayout,
  contentsBgColor,
  heading,
  paragraph,
  btnText,
  imgHeight,
  imgSrc
}) {
  // Settings
  // blocksLayout: default = '', 'reverse'
  // contentsBgColor: 'black', 'white'
  // imgHeight: 's', 'm', 'l'

  const optionalButton = btnText ? (
    <a href="" className={`btn-secondary btn-secondary--${contentsBgColor === 'white' ? 'black' : 'white'}`}>
      {btnText}
    </a>
  ) : null;

  const desktopImg = imgSrc?.desktop;
  const tabletImg = imgSrc?.tablet;
  const mobileImg = imgSrc?.mobile;
  const blurredImg = imgSrc?.blurred;

  const animation = index % 2 === 0 ? 'slide-from-right' : 'slide-from-left';
  const { ref, animationClass } = useAnimation('slide-from-side--initial', animation);
  const { imageRef } = useLazyImageLoader(); // Use the hook and get the imageRef

  return (
    <section ref={ref} className={`hero-two-blocks ${animationClass}`}>

      <div className="container-fluid">
        <div className={`hero-two-blocks-inner-wrapper${blocksLayout ? ` hero-two-blocks-inner-wrapper--${blocksLayout}` : ''}`}>

          <div className={`hero-two-blocks__contents-block hero-two-blocks__contents-block--${contentsBgColor}`}>
            <div className="hero-two-blocks__contents-block-inner-wrapper">
              <h2 className="hero-two-blocks__contents-block__heading h2-large">{heading}</h2>
              <p className="hero-two-blocks__contents-block__description text--opacity-lighter">{paragraph}</p>
              {optionalButton}
            </div>
          </div>

          <div
            ref={imageRef} // Reference to the image element
            className="hero-two-blocks__image-block blurred-img"
            style={{ backgroundImage: `url(${blurredImg})` }}>
              
            <picture>
              <source media="(max-width: 768px)" srcSet={mobileImg} />
              <source media="(max-width: 1024px)" srcSet={tabletImg} />
              <img
                className={`hero-two-blocks__image-block__img--${imgHeight}`}
                src={desktopImg}
                alt={`${heading} Image`}
                loading="lazy"
              />
            </picture>
          </div>

        </div>
      </div>
    </section>
  )
}

export default HeroTwoBlocks;
