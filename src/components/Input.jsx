import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ id, type, className, disabled, placeholder, onChange, value }) => (
    <input id={id} type={type} className={className} disabled={disabled} placeholder={placeholder} onChange={onChange} value={value}></input>
);

Input.propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.string.isRequired
};

export default Input;