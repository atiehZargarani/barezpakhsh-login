
function CustomInput({
  name,
  label,
  placeholder,
  classNamees,
  type,
  value,
  setValue,
}) {
  return (
    <>
      <div className="custom-input-component">
        <label className="custom-input-component__labels">{label}</label>

        <div className="custom-input-component__content">
          <input
            type={type}
            className="custom-input-component__inputs custom-input-component__inputs--focus"
            id={name}
            placeholder={placeholder}
            onInput={(e) => {
              setValue(e.target.value);
            }}
          />
        </div>
      </div>
    </>
  );
}

export default CustomInput;
