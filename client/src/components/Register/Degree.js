import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

export default function Degree() {
  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset" className="mb-3">
      <FormLabel
        component="legend"
        style={{ color: "black", fontWeight: "bold" }}
      >
        Degree
      </FormLabel>
      <RadioGroup
        style={{ justifyContent: "space-between" }}
        row
        aria-label="Depatment"
        name="Department"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="B. Tech" control={<Radio />} label="B. Tech" />
        <FormControlLabel value="M. Tech" control={<Radio />} label="M. Tech" />
        <FormControlLabel value="MCA" control={<Radio />} label="MCA" />
      </RadioGroup>
    </FormControl>
  );
}
