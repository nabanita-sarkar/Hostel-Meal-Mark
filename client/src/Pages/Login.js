import React from "react";
// import axios from "axios";
// import { Redirect } from "react-router";
import { TextField } from "@material-ui/core";
import StyledButton from "../components/Button";
// import Layout from "../components/Layout";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

// class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "",
//       year: "",
//       V_NV: "",
//     };
//     this.nameChange = this.nameChange.bind(this);
//     this.yearChange = this.yearChange.bind(this);
//     this.v_nvChange = this.v_nvChange.bind(this);
//     this.addUser = this.addUser.bind(this);
//   }
//   nameChange(e) {
//     this.setState({ name: e.target.value });
//   }
//   yearChange(e) {
//     this.setState({ year: e.target.value });
//   }
//   v_nvChange(e) {
//     this.setState({ V_NV: e.target.value });
//   }

//   addUser(event) {
//     event.preventDefault();
//     const userAdd = {
//       name: this.state.name,
//       year: this.state.year,
//       V_NV: this.state.V_NV,
//     };
//     console.log(userAdd);
//     axios
//       .post("http://localhost:4000/register", userAdd)
//       .then((res) => {
//         console.log(res);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }

// render() {
function Login() {
  // const classes = useStyles();
  const [values, setValues] = React.useState({
    name: "",
    password: "",
    // weight: "",
    // weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    // <Layout>
    <div className="text-center">
      {/* <form onSubmit={this.addUser} method="user"> */}
      <div style={{ margin: "1rem" }}>
        <TextField
          label="Name"
          hint="Enter Your Name"
          type="text"
          variant="outlined"
          color="secondary"
          onChange={handleChange("name")}
          fullWidth
          // onChange={this.nameChange}
          // name={this.state.name}
          style={{
            borderRadius: "50px",
          }}
        />
      </div>
      <div style={{ margin: "1rem" }}>
        <TextField
          label="Password"
          hint="Enter Your Pssword"
          type={values.showPassword ? "text" : "password"}
          variant="outlined"
          color="secondary"
          fullWidth
          // onChange={this.yearChange}
          // name={this.state.year}
          value={values.password}
          onChange={handleChange("password")}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </div>

      <StyledButton type="submit" variant="outlined" href="./Dashboard">
        Login
      </StyledButton>
      {/* </form> */}
      {/* <Redirect to={"/Dashboard"} /> */}
    </div>
    // </Layout>
  );
}

export default Login;
