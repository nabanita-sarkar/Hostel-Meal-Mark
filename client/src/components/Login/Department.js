import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

export default function Department() {
  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset" className="my-3">
      <FormLabel
        component="legend"
        style={{ color: "black", fontWeight: "bold" }}
      >
        Department
      </FormLabel>
      <RadioGroup
        style={{ justifyContent: "space-between" }}
        row
        aria-label="Depatment"
        name="Department"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="CSE" control={<Radio />} label="CSE" />
        <FormControlLabel value="ECE" control={<Radio />} label="ECE" />
        <FormControlLabel value="EE" control={<Radio />} label="EE" />
        <FormControlLabel value="ME" control={<Radio />} label="ME" />
        <FormControlLabel value="IT" control={<Radio />} label="IT" />
        {/* <FormControlLabel value="CSE" control={<Radio />} label="CSE" /> */}
      </RadioGroup>
    </FormControl>
  );
}
