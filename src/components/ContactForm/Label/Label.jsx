import React from 'react';
import PropTypes from 'prop-types';
import s from './Label.module.css';

const Label = ({ name, type, value, inputChange }) => {
  return (
    <>
      <label className={s.label}>
        {name}
        <input
          className={s.input}
          type={type}
          name={name}
          value={value}
          onChange={inputChange}
          required
        />
      </label>
    </>
  );
};

Label.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  inputChange: PropTypes.func.isRequired,
};

export default Label;
