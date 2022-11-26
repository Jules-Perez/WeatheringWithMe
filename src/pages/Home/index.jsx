import React, { Component } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {
  Typography,
  Container,
  Paper,
  styled,
  Box,
  useTheme,
  Button,
} from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import LoginButton from "../../components/LoginButton";

export default (props) => {
  const { isAuthenticated, user } = useAuth0();
  const theme = useTheme();

  //Reduce repetetive code, changes components depending on authentication
  const RenderLoginButton = () => {
    return isAuthenticated ? (
      <Button variant="contained" sx={{ color: "white", flexGrow: 1 }}>
        Go to my profile!
      </Button>
    ) : (
      <LoginButton
        startIcon={<GitHubIcon />}
        variant="contained"
        sx={{ color: "white", flexGrow: 1 }}
      ></LoginButton>
    );
  };

  const RenderIntro = () => {
    return (
      <>
        <Typography>
          <Typography sx={{ color: theme.palette.primary.main }}>
            Welcome to the weather forecast web application!
          </Typography>
          {isAuthenticated
            ? `Open the profile page to  view the
          weather in your city!`
            : `Please login with your Github user to use the application and view the
          weather in your city.`}
        </Typography>
      </>
    );
  };

  //Renders depending on the width of the screen
  //Note on the "display" style usage.
  const WebView = () => (
    <Box
      sx={{
        margin: 10,
        display: { xs: "none", md: "flex" },
        alignItems: "flex-start",
      }}
    >
      <Box sx={{ maxWidth: 500, mr: 5 }}>
        <RenderIntro />
      </Box>
      <RenderLoginButton />
    </Box>
  );

  const MobileView = () => (
    <Box sx={{ m: 5, display: { xs: "block", md: "none" } }}>
      <Box sx={{ mb: 4 }}>
        <RenderIntro />
      </Box>
      <RenderLoginButton />
    </Box>
  );

  return (
    <Container>
      <WebView />
      <MobileView />
    </Container>
  );
};
