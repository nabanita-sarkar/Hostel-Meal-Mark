import React from "react";
import { CheckboxToggle } from "react-rainbow-components";

export default class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: false,
    };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(event) {
    return this.setState({ value: !this.state.value });
  }

  render() {
    return (
      <CheckboxToggle
        id="checkbox-toggle-component-1"
        // label="Toggle Label"
        value={this.state.value}
        onChange={this.handleOnChange}
      />
    );
  }
}
