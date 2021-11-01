import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ id, text, className, disabled, onClick }) => (
    <button id={id} className={className} disabled={disabled} onClick={onClick}>{text}</button>
);

Button.propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    id: PropTypes.string,
    onClick: PropTypes.func,
    text: PropTypes.string.isRequired
};

export default Button;