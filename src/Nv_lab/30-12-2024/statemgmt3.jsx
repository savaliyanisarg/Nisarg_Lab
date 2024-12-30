import * as React from "react";
class StateMerge extends React.Component {
  state = {
    first: "loading....",
    second: "loading....",
    third: "loading....",
    fourth: "loading....",
    donemsg: "loading complete",
  };
  constructor() {
    super();
    setTimeout(() => {
      this.setState({ first: "done" });
    }, 2000);
    setTimeout(() => {
      this.setState({ second: "done" });
    }, 4000);
    setTimeout(() => {
      this.setState({ third: "done" });
    }, 6000);
    setTimeout(() => {
      this.setState((state) => ({
        ...state,
        first: state.donemsg,
        second: state.donemsg,
        third: state.donemsg,
        fourth: state.donemsg,
      }));
    }, 8000);
  }

  render() {
    return (
      <ul>
        {Object.keys(this.state)
          .filter((key) => key !== "donemsg")
          .map((key) => (
            <li key={key}>
              <strong>{key} : </strong>
              {this.state[key]}
            </li>
          ))}
      </ul>
    );
  }
}
export default StateMerge;