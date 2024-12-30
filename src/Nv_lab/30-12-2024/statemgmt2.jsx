import * as React from "react";
class StateXYZ extends React.Component {
    state = {
        first : true,
        second : 3.14,
        third : "hello world",
        fourth : "red",
        fifth : "green",
    };

    constructor(){
        super();
        setTimeout(() => {
            this.setState({
                first : false,
                second : 2.71,
                third : "hello world again",
                fourth : "blue",
                fifth : "yellow",
 
            });
        }, 3000);
    }
    render() {
        const { first,second,third,fourth,fifth } = this.state;
        return(
            <div>
                <button disabled={first}>my button</button>
                <p style={{color: fourth}}>
                value of float variable is <strong>{second}</strong></p>
                <p style={{color: fifth}}>value of string variable is <strong>{third}</strong></p>
            </div>
        );
    }
}

export default StateXYZ;