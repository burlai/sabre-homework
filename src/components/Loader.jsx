import React, { Component } from "react";
import PropTypes from 'prop-types';

class Loader extends Component {

    render() {
        if (this.props.visible) {
            return (<div><div className="loading-spinner"><div /><div /><div /><div /><div /><div /><div /><div /></div></div>);
        }
        if (this.props.dataLoaded) {
            return this.props.children;
        }
        return null;
    }
}

Loader.propTypes = {
    children: PropTypes.node,
    visible: PropTypes.bool,
    dataLoaded: PropTypes.bool
};

export default Loader;
