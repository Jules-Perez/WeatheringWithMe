import Header from "../Header";
import Footer from "../Footer";
import { createTheme, ThemeProvider } from "@mui/material";
import { green } from "@mui/material/colors";

export default (props) => {
  const { children } = props;
  const theme = createTheme({
    palette: {
      primary: {
        main: "#23395d",
      },
      secondary: {
        main: green[500],
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Header />
      {children}
      <Footer />
    </ThemeProvider>
  );
};
