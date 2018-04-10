import './Form.css';

import React from 'react';

const FormInner = ({ value, ...props }) => (
  <>
    <input value={value} {...props} />
    <button className="Form__Button" type="reset">
      reset
    </button>
  </>
);

export class Form extends React.Component {
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
