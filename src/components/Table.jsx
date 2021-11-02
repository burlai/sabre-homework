import React from 'react';
import PropTypes from 'prop-types';

const Table = ({ headers, data, activePage, pageSize, pageSumText, totalSumText }) => {
    const tableHeader = headers.map((element, idx) => (
        <th key={idx}>{element}</th>
    ));
    let dataToRender = [];

    if (activePage !== undefined && pageSize !== undefined) {
        dataToRender = data.slice(((activePage - 1) * pageSize), (activePage * pageSize));
    }

    let tableBody = dataToRender.map((row, idx) => {
        delete row.id;
        return (
            <tr key={idx}>
                {(row.sales >= 800) ? <td className="winner-icon"></td> : <td></td>}
                {(Object.values(row)).map((field) => (
                <td key={field}>
                    {(typeof field === 'number') ? Math.ceil(field) : field}
                </td>))}
            </tr>
        );
    });

    const pageSum = dataToRender.map((element) => element.sales).reduce((prev, next) => (prev + next), 0);
    const totalSum = data.map((element) => element.sales).reduce((prev, next) => (prev + next), 0);

    if (dataToRender.length < 1) {
        return <div>No data available</div>;
    }

    return (
        <section>
            <table className="table">
            <col style={{width: 30}} />
                <tbody>
                    <tr><th></th>{tableHeader}</tr>
                    {tableBody}
                </tbody>
                {(pageSumText !== undefined && totalSumText !== undefined) ? (
                    <tfoot className="text-dark-gray">
                        <tr>
                            <td>{pageSumText}</td>
                            <td></td>
                            <td></td>
                            <td>{Math.ceil(pageSum)}</td>
                        </tr>
                        <tr>
                            <td>{totalSumText}</td>
                            <td></td>
                            <td></td>
                            <td>{Math.ceil(totalSum)}</td>
                        </tr>
                    </tfoot>
                ) : ''}
            </table>
        </section>
    );
};

Table.propTypes = {
    activePage: PropTypes.number,
    data: PropTypes.array,
    filter: PropTypes.object,
    headers: PropTypes.array.isRequired,
    pageSize: PropTypes.number,
    pageSumText: PropTypes.string,
    totalSumText: PropTypes.string
};

export default Table;