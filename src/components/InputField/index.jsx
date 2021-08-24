import React from 'react';
import PropTypes from 'prop-types';

function InputField({
  labelClassName = '',
  labelText,
  placeholder,
  type,
  inputClassNames = '',
  required,
}) {
  return (
    <div>
      <label className={`font-bold block ${labelClassName}`}>{labelText}</label>
      <input
        placeholder={placeholder}
        type={type}
        className={`focus:outline-none bg-w-gray-light w-1/2 rounded-md p-2 mt-2 ${inputClassNames}`}
        required={required}
      />
    </div>
  );
}

InputField.prototype = {
  labelClassName: PropTypes.string,
  inputClassNames: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default InputField;
