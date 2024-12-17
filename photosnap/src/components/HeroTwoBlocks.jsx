function HeroTwoBlocks({ blocksLayout, contentsBgColor, heading, paragraph, btnText, imgHeight, imgSrc }) {
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

  return (
    <section className="hero-two-blocks">
      <div className="container-fluid">
        <div className={`hero-two-blocks-inner-wrapper${blocksLayout ? ` hero-two-blocks-inner-wrapper--${blocksLayout}` : ''}`}>

          <div className={`hero-two-blocks__contents-block hero-two-blocks__contents-block--${contentsBgColor}`}>
            <div className="hero-two-blocks__contents-block-inner-wrapper">
              <h2 className="hero-two-blocks__contents-block__heading h2-large">{heading}</h2>
              <p className="hero-two-blocks__contents-block__description">{paragraph}</p>
              {optionalButton}
            </div>
          </div>

          <div className="hero-two-blocks__image-block">
            <picture>
              <source media="(max-width: 768px)" srcSet={mobileImg} sizes=""/>
              <source media="(max-width: 1024px)" srcSet={tabletImg} />
              <img
                className={`hero-two-blocks__image-block__img--${imgHeight}`}
                src={desktopImg}
                alt={`${heading} Image`}
              />
            </picture>
          </div>

        </div>
      </div>
    </section>
  )
}

export default HeroTwoBlocks;
