function ToggleSwitch({ toggleClassName, isChecked, onChange }) {
  return (
    <div className={toggleClassName ? `${toggleClassName} toggle-switch` : 'toggle-switch'}>
      <input
        type="checkbox"
        id="toggle"
        className="toggle-switch__checkbox"
        checked={isChecked}
        onChange={onChange}
      />
      <label htmlFor="toggle" className="toggle-switch__label">
        <span className="toggle-switch__slider"></span>
      </label>
    </div>
  );
}

export default ToggleSwitch;
