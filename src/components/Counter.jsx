import { Component } from "react";
import styles from "./counter.module.css";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      valueOfCount: 0,
    };
  }

  onclickHandler(label) {
    this.setState((prevState) => ({
      valueOfCount:
        label === "Increment"
          ? prevState.valueOfCount + 1
          : prevState.valueOfCount - 1,
    }));
  }

  render() {
    return (
      <>
        <div className={styles.parentContainer}>
          <h1>Counter App</h1>
          <p style={{ fontSize: "1.5rem" }}>Count: {this.state.valueOfCount}</p>
          <div className={styles.childContainer}>
            <button
              onClick={() => this.onclickHandler("Increment")}
              style={{ padding: "0.2rem" }}
            >
              Increment
            </button>
            <button
              onClick={() => this.onclickHandler("Decrement")}
              style={{ padding: "0.2rem", marginLeft: "0.5rem" }}
            >
              Decrement
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Counter;
