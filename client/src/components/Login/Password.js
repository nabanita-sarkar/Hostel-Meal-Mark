import React, { useState } from "react";
import { StrongPasswordInput } from "react-rainbow-components";

const containerStyles = {
  //   maxWidth: 500,
};

function PasswordInput(props) {
  const [value, setValue] = useState("");

  function handleOnChange(event) {
    setValue(event.target.value);
  }

  function getStrength() {
    const length = value.length;
    if (length === 0) {
      return undefined;
    }
    if (length <= 3) {
      return "weak";
    }
    if (length > 3 && length < 8) {
      return "average";
    }
    return "strong";
  }

  const passwordState = getStrength();

  return (
    <StrongPasswordInput
      //   id="strong-password-input-7"
      //   label="Password"
      //   placeholder="Placeholder text"
      bottomHelpText="Your password must be at least 8 characters long."
      className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
      //   error="This field is required"
      style={containerStyles}
      value={value}
      passwordState={passwordState}
      onChange={handleOnChange}
      //   required
    />
  );
}

{
  /* <ControlledStrongPasswordInput /> */
}

export default PasswordInput;
