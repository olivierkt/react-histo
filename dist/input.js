"use strict";

var React = require('react');

var ReactInput = React.createClass({
    displayName: "ReactInput",

    getInitialState: function getInitialState() {
        return {
            min: 0,
            max: 2000
        };
    },
    getDefaultProps: function getDefaultProps() {
        return {
            step: 10,
            val1: 0,
            val2: 20
        };
    },
    setValues: function setValues() {
        var val1 = this.props.val1,
            val2 = this.props.val2,
            min = void 0,
            max = void 0;

        min = val1 > val2 ? val1 : val2;
        max = val1 > val2 ? val1 : val2;

        return {
            min: min,
            max: max
        };
    },
    handleEvent: function handleEvent(e) {
        this.setState(this.setValues);
    },
    render: function render() {
        return React.createElement(
            "div",
            { className: "histo_range" },
            React.createElement("input", { className: "histo_input", type: "range", step: this.props.step, value: this.props.val1, min: this.state.min, max: this.state.max, onChange: this.handleEvent }),
            React.createElement("input", { className: "histo_input", type: "range", step: this.props.step, value: this.props.val2, min: this.state.min, max: this.state.max, onChange: this.handleEvent })
        );
    }
});

module.exports = ReactInput;