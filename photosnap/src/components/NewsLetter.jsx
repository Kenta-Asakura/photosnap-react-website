import Button from "./Button";

function NewsLetter() {
  return (
    <div className="newsletter">
      <div className="container">
        <div className="newsletter-inner-wrapper">
          <h2 className="newsletter__heading h2-large text--color-white">We’re in beta. Get your invite today!</h2>

          <Button
            variant='secondary'
            btnColor='white'
            btnText='Get an invite'
          />
        </div>
      </div>
    </div>
  )
}

export default NewsLetter;
