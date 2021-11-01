import React from 'react';
import PropTypes from 'prop-types';

const Table = ({ headers, data }) => {

    const tableHeader = headers.map((element, idx) => (
        <th key={idx}>{element}</th>
    ));

    let tableData = data.map((row, idx) => {
        delete row.id;
        return (
            <tr key={idx}>
                {(Object.values(row)).map((field) => (<td key={field}>{field}</td>))}
            </tr>
        )
    });

    if (tableData.length < 1) {
        tableData = (<div>No data available</div>);
    }

    return (<table>
        <thead><tr>{tableHeader}</tr></thead>
        <tbody>{tableData}</tbody>
    </table>);
};

Table.propTypes = {
    data: PropTypes.array.isRequired,
    headers: PropTypes.array.isRequired
};

export default Table;