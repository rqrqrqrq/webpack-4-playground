/**
 * GENERATORS TEST
 */

import React from 'react';

function* counterCorutine(init, amount) {
  let value = init;

  while (true) {
    yield value;

    value = value + amount;
  }
}

export class CoroutineCounter extends React.Component {
  constructor(props) {
    super(props);

    this.stateIterator = counterCorutine(
      props.initialValue,
      props.incrementAmount,
    );

    this.state = {
      value: this.stateIterator.next().value,
    };
  }

  getNextValue() {
    return this.stateIterator.next().value;
  }

  updateValue = () => {
    this.setState({
      value: this.getNextValue(),
    });
  };

  render() {
    return (
      <div>
        {this.state.value}
        <button onClick={this.updateValue}>inc</button>
      </div>
    );
  }
}
