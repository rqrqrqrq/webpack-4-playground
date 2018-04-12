/**
 * ASYNC AWAIT TEST
 */

import React from 'react';

const delay = ms => new Promise(r => setTimeout(r, ms));

export class AsyncCounter extends React.Component {
  state = {
    value: 0,
  };

  async update() {
    await delay(1000);

    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
  }

  render() {
    return (
      <div>
        {this.state.value}
        <button onClick={() => this.update()}>async inc</button>
      </div>
    );
  }
}
