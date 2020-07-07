import { Button } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
const StyledButton = styled(Button)({
  margin: "5%",
  display: "inline-block",
  paddingTop: "13px",
  paddingBottom: "13px",
  fontSize: "1rem",
  paddingLeft: "30px",
  paddingRight: "30px",
  borderRadius: "50px",
  borderWidth: "2px",
  borderColor: "#f50057",
  color: "#f50057",
  background: "white",

  "&:hover": {
    background: "#f50057",
    color: "white",
    borderWidth: "2px",
  },
});

export default StyledButton;
