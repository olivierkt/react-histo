"use strict";

const React = require('react');

const ReactInput = React.createClass({
    getInitialState: function() {
        return {
            min: 0,
            max: 2000
        }
    },
    getDefaultProps: function() {
        return {
            step: 10,
            val1: 0,
            val2: 20
        };
    },
    setValues: function() {
        let val1 = this.props.val1,
            val2 = this.props.val2,
            min, max;

        min = val1 > val2 ? val1 : val2;
        max = val1 > val2 ? val1 : val2;

        return {
            min: min,
            max: max
        }
    },
    handleEvent: function(e) {
        this.setState(this.setValues);
    },
    render: function() {
        return (
            <div className="histo_range">
                <input className="histo_input" type="range" step={this.props.step} value={this.props.val1} min={this.state.min} max={this.state.max} onChange={this.handleEvent} />
                <input className="histo_input" type="range" step={this.props.step} value={this.props.val2} min={this.state.min} max={this.state.max} onChange={this.handleEvent} />
            </div>
        );
    }
});

module.exports = ReactInput;