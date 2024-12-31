import * as React from "react";
class MyButton extends React.Component {
  render() {
    const { prop1, xyz } = this.props;
    return <button disabled={prop1}>{xyz}</button>;
  }
}
export default MyButton;