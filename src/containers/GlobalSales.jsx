import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getSales } from '../actions';
import Filter from '../components/Filter';
import Loader from '../components/Loader';
import Table from '../components/Table';

class GlobalSales extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filter: this.getDefaultFilter()
        };
    }

    componentDidMount() {
        this.props.getSales();
    }

    getDefaultFilter() {
        return {
            companyName: ''
        }
    }

    resetFilter() {
        return {
            companyName: ''
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
        this.setState({ ...this.state.filter, paging: { size: this.state.paging.size, active: activePage } }, () => {
            this.props.getSales(this.state.filter, { size: this.state.paging.size, active: activePage });
        });
    }

    render() {
        let pages = 0;
        if (this.props.sales.data && this.props.sales.data.total) {
            const totalPageCount = this.props.sales.data.total;
            pages = Math.ceil(totalPageCount / this.state.paging.size);
        }

        return (
            <section>
                <div id="GlobalSales">
                    <div>
                        <Filter filter={this.state.filter}
                            onSearch={(e) => this.onSearch(e)}
                            onResetSearch={(e) => this.onResetSearch(e)} />
                        <Loader visible={!!this.props.loader.data} dataLoaded={!!this.props.sales.data}>
                            <div>data loaded</div>
                            <Table
                                headers={['NAME', 'COMPANY', 'MONTHLY SALES']}
                                data={this.props.sales.data ? Object.values(this.props.sales.data) : []} />
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
