import React from "react";

class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      val: 0
    };
  }
  add2 = () => {
    this.setState({
      val: this.state.val + 2
    });
  };
  squarenum = () => {
    this.setState({
      val: this.state.val * this.state.val
    });
  };
  doublenum = () => {
    this.setState({
      val: this.state.val + this.state.val
    });
  };
  dividenum = () => {
    if (this.state.val <= 0) return;
    this.setState({
      val: this.state.val / 2
    });
  };
  subnum = () => {
    if (this.state.val <= 0) return;
    this.setState({
      val: this.state.val - 2
    });
  };
  render() {
    const { val } = this.state;
    return (
      <div className="calc">
        <div className="upper">
          <h1>{val}</h1>
        </div>
        <div className="lower">
          <button onClick={this.add2}>Add 2</button>
          <button onClick={this.squarenum}>Square</button>
          <button onClick={this.doublenum}>Double</button>
          <button onClick={this.dividenum}>DivideBy 2</button>
          <button onClick={this.subnum}>SubtractBy 2</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
