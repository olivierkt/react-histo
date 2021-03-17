"use strict";

var React = require('react');
var bars = [2, 20, 40, 13, 5, 9];
var width = 15;

var HistoBars = React.createClass({
    displayName: "HistoBars",

    getInitialState: function getInitialState() {
        return {
            class: "histo_bars animate"
        };
    },
    handleClick: function handleClick() {
        var _this = this;

        this.setState({ class: "histo_bars" });
        setTimeout(function () {
            _this.setState({ class: "histo_bars animate" });
        }, 300);
    },
    render: function render() {
        var histoBars = bars.map(function (bar, index) {
            var classNme = "histo_bar histo_bar--" + index;
            return React.createElement("li", { key: index, className: classNme, style: { height: bar + "px" } });
        });
        return React.createElement(
            "div",
            null,
            React.createElement(
                "h2",
                null,
                "Animated histogram"
            ),
            React.createElement(
                "div",
                { className: "histo_cont" },
                React.createElement(
                    "ul",
                    { className: this.state.class },
                    histoBars
                ),
                React.createElement(
                    "button",
                    { className: "histo_btn", onClick: this.handleClick },
                    "Animate"
                )
            )
        );
    }
});

module.exports = HistoBars;