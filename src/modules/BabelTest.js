import React from 'react';

export class BabelTest extends React.Component {
  render() {
    const { destructure: [{ ...rest }] } = this.props;

    return <pre>{JSON.stringify(rest, null, 2)}</pre>;
  }
}
