import React from 'react';
import PropTypes from 'prop-types';

const RangeInput = ({ data, id, rangeClassName, textClassName, disabled, placeholder, onChange, value }) => {

    const rangeArray = data.map((element) => element.sales);

    return (
        <div>
            <input id={id}
                type="range"
                min={Math.min(...(rangeArray))}
                max={Math.max(...(rangeArray))}
                className={(rangeClassName !== undefined) ? rangeClassName : "range-input"}
                disabled={disabled}
                onChange={onChange}
                value={value}>
            </input>
            <input id={id}
                type="text"
                className={(textClassName !== undefined) ? textClassName : "text-input"}
                disabled={disabled}
                placeholder={placeholder}
                onChange={onChange}
                value={value}>
            </input>
        </div>
    );
}

RangeInput.propTypes = {
    data: PropTypes.array,
    disabled: PropTypes.bool,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    rangeClassName: PropTypes.string,
    id: PropTypes.string.isRequired,
    textClassName: PropTypes.string,
    value: PropTypes.any
};

export default RangeInput;