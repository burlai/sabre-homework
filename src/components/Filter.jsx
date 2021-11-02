import React, { Component } from 'react';
import PropTypes from 'prop-types';

import RangeInput from './RangeInput';

const initialState = (filter) => {
    return {
        data: {
            company: filter.company || '',
            minimumSales: filter.minimumSales || ''
        }
    }
};

class Filter extends Component {

    constructor(props) {
        super(props);
        this.state = initialState(props.filter);
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(id, value) {
        this.setState({
            data: {
                ...this.state.data, [id]: value
            }
        });
    }

    handleChange(event) {
        this.setState({
            data: {
                ...this.state.data, [event.target.id]: event.target.value
            }
        });
    }

    onSearch() {
        this.props.onSearch(this.state.data);
    }

    onResetSearch() {
        this.setState(initialState());
        this.props.onResetSearch();
    }

    onSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <section className="sales-filter">
                <form>
                    <input className="input input-company mb-10" type="text" value={this.state.data.company} onChange={this.handleChange} id="company" placeholder="Company" />
                    <label className="label label-sales" htmlFor="minimum-sales">Minimum Sales ($)</label>
                    <RangeInput value={this.state.data.minimumSales}
                                data={this.props.data}
                                onChange={this.handleChange}
                                id="minimumSales"
                                textClassName="input input-sales" />
                    <button className="button button-sales" onClick={() => this.onSearch()}><i className="icon-magnifier pr-1" />FILTER RESULTS</button>
                </form>
            </section>
        );
    }
}

Filter.propTypes = {
    data: PropTypes.array,
    filter: PropTypes.object.isRequired,
    onResetSearch: PropTypes.func.isRequired,
    onSearch: PropTypes.func.isRequired
};

export default Filter;