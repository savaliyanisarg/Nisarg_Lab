import * as React from "react";
class StateABC extends React.Component {
    state = {
        first : true,
        second : 3.14,
        third : "hello world",
        fourth : "red",
        fifth : "green",
    };
    render() {
        const { first,second,third,fourth,fifth } = this.state;
        return(
            <div>
                <button disabled={first}>my button</button>
                <p style={{color: fourth}}>
                value of float variable is <strong>{second}</strong></p>
                <p style={{color: fifth}}>value of string variable is <strong>{third}</strong></p>
            </div>
        )
    }
};

export default StateABC;