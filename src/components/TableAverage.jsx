import React from 'react';
import PropTypes from 'prop-types';

const TableAverage = ({ data, averageNumberText, averageSumText, boundaryNumber }) => {

    let dataToRender = [];
    if (boundaryNumber !== undefined) {
        dataToRender = data.filter((element) => element.sales >= boundaryNumber);
    } else {
        dataToRender = data;
    }

    const sum = dataToRender.map((element) => element.sales).reduce((prev, next) => (prev + next), 0);

    return (
        <section>
            <table className="table table-small">
                <tbody>
                    <tr>
                        <td>{(averageSumText !== undefined) ? averageSumText : 'Number of Elements'}</td>
                        <td>{(dataToRender.length > 0) ? `$${Math.ceil(sum / dataToRender.length)}` : '-'}</td>
                    </tr>
                    <tr>
                        <td>{(averageNumberText !== undefined) ? averageNumberText : 'Average'}</td>
                        <td>{(dataToRender.length > 0) ? dataToRender.length : '-'}</td>
                    </tr>
                    <tr>
                        <td>Top performers %</td>
                        <td>{(dataToRender.length > 0) ? `${(dataToRender.length / data.length * 100)}%` : '-'}</td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
};

TableAverage.propTypes = {
    averageNumberText: PropTypes.string,
    averageSumText: PropTypes.string,
    boundaryNumber: PropTypes.number,
    data: PropTypes.array
};

export default TableAverage;