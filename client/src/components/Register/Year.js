import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

export default function Year() {
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
        Year
      </FormLabel>
      <RadioGroup
        style={{ justifyContent: "space-between" }}
        row
        aria-label="Depatment"
        name="Department"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="1st" control={<Radio />} label="1st" />
        <FormControlLabel value="2nd" control={<Radio />} label="2nd" />
        <FormControlLabel value="3rd" control={<Radio />} label="3rd" />
        <FormControlLabel value="4th" control={<Radio />} label="4th" />
      </RadioGroup>
    </FormControl>
  );
}
