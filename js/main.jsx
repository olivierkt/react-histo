"use strict";

const React = require('react');
const ReactDOM = require('react-dom');
const ReactInput = require('./input.js');
const Histobars = require('./histo.js');

const App = React.createClass({
    render: function() {
        return (
            <div className="histo">
                <Histobars />
                <ReactInput />
            </div>
        );
    }
});

ReactDOM.render(
    <App />,
    document.getElementById("app")
);


