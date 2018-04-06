import React from 'react';

const FormInner = ({ value, ...props }) => (
  <>
    <input value={value} {...props} />
    <button type="reset">reset</button>
  </>
);

export default class App extends React.Component {
  state = {
    value: '',
  };

  handleChange = e => this.setState({ value: e.target.value });

  handleSubmit = e => e.preventDefault();

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormInner
          value={this.state.value}
          type="text"
          onChange={this.handleChange}
        />
      </form>
    );
  }
}
