import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from './Input';
import Button from './Button';
import Label from './Label';

const initialState = (filter) => {
    return {
        data: {
            company: filter.company || ''
        }
    }
};

class Filter extends Component {

    constructor(props) {
        super(props);
        this.state = initialState(props.filter);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(id, value) {
        this.setState({
            data: {
                ...this.state.data, [id]: value
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
                <form submit={this.onSubmit}>
                    <Input className="input input-company" type="text" form={this} id="company" placeholder="Company" />
                    <Label text="Minimum Sales ($)" className="label label-sales" htmlFor="minimum-sales" />
                    <Input className="input input-sales" type="number" form={this} id="minimum-sales" />
                    <Button text="FILTER RESULTS" className="button button-sales" onClick={() => this.onSearch()} color="primary"><i className="icon-magnifier pr-1" /></Button>
                    {/* <Button text="REFRESH DATA" className="button" onClick={() => this.onResetSearch()}></Button> */}
                </form>
            </section>
        );
    }
}

Filter.propTypes = {
    filter: PropTypes.object.isRequired,
    onResetSearch: PropTypes.func.isRequired,
    onSearch: PropTypes.func.isRequired
};

export default Filter;