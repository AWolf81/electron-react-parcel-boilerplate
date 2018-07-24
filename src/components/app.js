import React, { Component } from "react";

type Props = {
  /* ... */
};

type State = {
  hello: string,
  count: number
};

const initialState = {
  hello:
    "Hello from React! Start editing src/app.js with hot-reloading 'yarn start'",
  count: 0
};

export default class App extends Component<Props, State> {
  state = initialState;

  handleClick = () => {
    this.setState(({ count }) => ({
      count: count + 1
    }));
  };

  resetCount = () => {
    this.setState({
      count: 0
    });
  };

  // flow check!!
  multiply(a: number, b: number) {
    return a * b;
  }

  render() {
    // just a test
    const c = this.multiply(10, 10);
    // const d = this.multiply("10", 20); // fails

    return (
      <div>
        <section className="hero is-light is-bold">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Hello from Electron</h1>
              <p>{this.state.hello}</p>
              <h2 data-test="counter">{this.state.count}</h2>
              <button
                className="button"
                data-test="incButton"
                onClick={this.handleClick}
              >
                Inc count
              </button>
              <button
                className="button"
                data-test="resetButton"
                onClick={this.resetCount}
              >
                Reset
              </button>
            </div>
          </div>
          <h1 />
        </section>
      </div>
    );
  }
}
