import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getSales } from '../actions';
import Filter from '../components/Filter';
import Loader from '../components/Loader';
import Table from '../components/Table';
import Pagination from '../components/Pagination';
import TableAverage from '../components/TableAverage';

class GlobalSales extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filter: this.getDefaultFilter(),
            paging: {
                size: 10,
                active: 1
            }
        };
    }

    componentDidMount() {
        this.props.getSales();
    }

    getDefaultFilter() {
        return {
            company: '',
            minimumSales: ''
        }
    }

    resetFilter() {
        return {
            company: '',
            minimumSales: ''
        }
    }

    onSearch(filter) {
        this.setState({ filter });
        this.props.getSales();
    }

    onResetSearch() {
        this.setState({ filter: this.resetFilter() });
        this.props.getSales();
    }

    onPaginationChange(activePage) {
        this.setState({ ...this.state.filter, paging: { size: this.state.paging.size, active: activePage } });
    }

    render() {
        let pages = 0;
        let data = this.props.sales.data;
        if (this.state.filter.company.length > 0) {
            data = data.filter((element) => element.company === this.state.filter.company);
        }

        if (this.state.filter.minimumSales.length > 0) {
            data = data.filter((element) => element.sales > this.state.filter.minimumSales);
        }

        if (this.props.sales.data) {
            const elementsCount = data.length;
            pages = Math.ceil(elementsCount / this.state.paging.size);
        }

        return (
            <section id="GlobalSales">
                <Loader visible={!!this.props.loader.data} dataLoaded={!!this.props.sales.data}>
                    <Filter filter={this.state.filter}
                        data={data}
                        onSearch={(e) => this.onSearch(e)}
                        onResetSearch={(e) => this.onResetSearch(e)} />
                    <div className="p-relative">
                        <h2 className="mt-20 mb-10 heading-h2">Sales Data</h2>
                        <button className="button button-link button-refresh-data" onClick={() => this.onResetSearch()}>REFRESH DATA</button>
                    </div>
                    <Table
                        headers={['NAME', 'COMPANY', 'MONTHLY SALES']}
                        data={data}
                        activePage={this.state.paging.active}
                        pageSize={this.state.paging.size}
                        filter={this.state.filter}
                        pageSumText="Page Sales Subtotal"
                        totalSumText="Total Sales" />
                    <div className="mt-30 mb-10">
                        <Pagination pages={pages || 0} paginationId="itemsPagination"
                            maxButtons={4}
                            activePage={this.state.paging.active}
                            onPageSelected={(page) => this.onPaginationChange(page)} />
                    </div>
                    <div className="p-relative mt-30 mb-20">
                        <h2 className="heading-h2">Top Performers ($800+ / month)</h2>
                    </div>
                    <TableAverage data={data}
                        boundaryNumber={800}
                        averageNumberText="Number of Clients"
                        averageSumText="Average Monthly Sales" />
                </Loader>
            </section>
        );
    }
}

GlobalSales.propTypes = {
    loader: PropTypes.object.isRequired,
    sales: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return {
        loader: state.loader,
        sales: state.sales
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getSales: () => {
            dispatch(getSales());
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(GlobalSales);
