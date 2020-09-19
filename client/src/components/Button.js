import { Button } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
const StyledButton = styled(Button)({
  margin: "5%",
  // display: "inline-block",
  // paddingTop: "13px",
  // paddingBottom: "13px",
  fontSize: "1rem",
  paddingLeft: "30px",
  paddingRight: "30px",
  borderRadius: "50px",
  borderWidth: "2px",
  borderColor: "#f50057",
  color: "white",
  background: "#f50057",

  "&:hover": {
    background: "#f50057",
    color: "white",
    borderWidth: "2px",
    boxShadow:
      "rgba(156, 39, 176, 0.14) 0px 9px 9px 0px, rgba(156, 39, 176, 0.2) 0px 1px 1px -9px",
  },
});

export default StyledButton;
