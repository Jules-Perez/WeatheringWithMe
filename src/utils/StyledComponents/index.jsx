import {
  Typography,
  Container,
  Paper,
  styled,
  Box,
  useTheme,
  Button,
} from "@mui/material";
import { indigo } from "@mui/material/colors";

export default () => null;

const BluePaper = ({ sx, children }) => {
  const theme = useTheme();
  const StyledComponent = styled(
    Paper,
    {}
  )({
    background:
      "linear-gradient(90deg, rgba(39,158,227,1) 0%, rgba(71,177,238,1) 34%, rgba(68,180,246,1) 100%)",
    boxShadow: `2px 2px 0px 0px ${indigo[100]}`,
    padding: "15px 20px",
    color: "white",
  });
  return <StyledComponent sx={sx}> {children}</StyledComponent>;
};

export { BluePaper };
