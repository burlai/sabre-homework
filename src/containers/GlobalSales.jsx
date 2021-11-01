import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getSales } from '../actions';
import Filter from '../components/Filter';
import Loader from '../components/Loader';
import Table from '../components/Table';
import Pagination from '../components/Pagination';

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
        this.props.getSales(filter, { size: this.state.paging.size, active: 1 });
    }

    onResetSearch() {
        this.setState({ filter: this.resetFilter() });
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
            <section>
                <div id="GlobalSales">
                    <div>
                        <Filter filter={this.state.filter}
                            onSearch={(e) => this.onSearch(e)}
                            onResetSearch={(e) => this.onResetSearch(e)} />
                        <div className="p-relative">
                            <h2 className="mt-20 mb-10 heading-h2">Sales Data</h2>
                            <button className="button button-link button-refresh-data" onClick={() => this.onResetSearch()}>REFRESH DATA</button>
                        </div>
                        <Loader visible={!!this.props.loader.data} dataLoaded={!!this.props.sales.data}>
                            <Table
                                headers={['NAME', 'COMPANY', 'MONTHLY SALES']}
                                data={data}
                                activePage={this.state.paging.active}
                                pageSize={this.state.paging.size}
                                filter={this.state.filter} />
                            <div className="mt-20 mb-10">
                                <Pagination pages={pages || 0} paginationId="itemsPagination"
                                    maxButtons={4}
                                    activePage={this.state.paging.active}
                                    onPageSelected={(page) => this.onPaginationChange(page)} />
                            </div>
                        </Loader>
                    </div>
                </div>
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
        getSales: (filter, paging) => {
            dispatch(getSales(filter, paging));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(GlobalSales);
