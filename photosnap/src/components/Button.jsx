function Button({ buttonClassName, variant, btnColor, btnText, btnSrc ='' }) {
  const variantClass = `btn-${variant}`;
  const variantColorClass = `${variantClass}--${btnColor}`;

  return (
    <a href={btnSrc} className={`${buttonClassName ? `${buttonClassName} ` :''}${variantClass} ${variantColorClass}`}>{btnText}</a>
  );
}

export default Button;
