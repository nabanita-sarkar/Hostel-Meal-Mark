import { Button } from "@material-ui/core";
import { styled } from "@material-ui/core/styles";
const StyledButton = styled(Button)({
  margin: "10%",
  display: "block",
  padding: "15px",
  borderRadius: "50px",
  borderWidth: "2px",
  borderColor: "#f50057",
  color: "#f50057",

  "&:hover": {
    background: "#f50057",
    color: "white",
    borderWidth: "2px",
  },
});

export default StyledButton;
