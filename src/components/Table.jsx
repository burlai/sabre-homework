import React from 'react';
import PropTypes from 'prop-types';

const Table = ({ headers, data, activePage, pageSize }) => {
    const tableHeader = headers.map((element, idx) => (
        <th key={idx}>{element}</th>
    ));
    let dataToRender = [];

    if (activePage !== undefined && pageSize !== undefined) {
        dataToRender = data.slice(((activePage - 1) * pageSize), (activePage * pageSize));
    }

    let tableData = dataToRender.map((row, idx) => {
        delete row.id;
        return (
            <tr key={idx}>
                {(Object.values(row)).map((field) => (<td key={field}>{field}</td>))}
            </tr>
        );
    });

    if (tableData.length < 1) {
        tableData = (<div>No data available</div>);
    }

    return (
        <table className="table">
            <tbody>
                <tr>{tableHeader}</tr>
                {tableData}
            </tbody>
        </table>);
};

Table.propTypes = {
    activePage: PropTypes.number,
    data: PropTypes.array.isRequired,
    headers: PropTypes.array.isRequired,
    pageSize: PropTypes.number
};

export default Table;