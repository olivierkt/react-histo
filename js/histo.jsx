"use strict";

const React = require('react');
const bars = [2, 20, 40, 13, 5, 9];
const width = 15;

const HistoBars = React.createClass({
    getInitialState: function(){
        return {
            class: "histo_bars animate"
        }
    },
    handleClick: function() {
        this.setState({ class: "histo_bars"});
        setTimeout(() => {
            this.setState({ class: "histo_bars animate"});
        }, 300);
    },
    render: function() {
        const histoBars = bars.map((bar, index) => {
            let classNme = "histo_bar histo_bar--" + index;
            return <li key={index} className={classNme} style={{ height: bar + "px"}}></li>
        });
        return (
           <div>
               <h2>Animated histogram</h2>
               <div className="histo_cont">
                   <ul className={this.state.class}>{histoBars}</ul>
                   <button className="histo_btn" onClick={this.handleClick }>Animate</button>
               </div>
           </div>
        );
    }
});

module.exports = HistoBars;

