import React from 'react';
import PropTypes from 'prop-types';

const Label = ({ id, htmlFor, className, text }) => (
    <label id={id} htmlFor={htmlFor} className={className}>{text}</label>
);

Label.propTypes = {
    className: PropTypes.string,
    htmlFor: PropTypes.string.isRequired,
    id: PropTypes.string,
    text: PropTypes.string.isRequired
};

export default Label;