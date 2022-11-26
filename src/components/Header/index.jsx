import React, { memo, useState } from "react";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  AppBar,
  Container,
  Typography,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import FilterDramaIcon from "@mui/icons-material/FilterDrama";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useTheme } from "@mui/material/styles";
import { blueGrey, lightBlue } from "@mui/material/colors";

export default memo((props) => {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const title = "Weather Forcast";
  const theme = useTheme();
  const navigate = useNavigate();

  const RenderAvatar = () => {
    const [profileAnchorEl, setProfileAnchorEl] = useState(null);
    const open = Boolean(profileAnchorEl);
    const handleShowProfileMenu = (event) => {
      setProfileAnchorEl((prev) => (!prev ? event.currentTarget : null));
    };
    const handleCloseProfileMenu = () => {
      setProfileAnchorEl(null);
    };

    return (
      <Avatar
        //if logged in, should be able to show profile menu
        onClick={
          !isAuthenticated ? () => loginWithRedirect() : handleShowProfileMenu
        }
        sx={
          isAuthenticated
            ? { backgroundColor: theme.palette.primary.main }
            : {
                backgroundColor: blueGrey[900],
                "&:hover": {
                  cursor: "pointer",
                  backgroundColor: theme.palette.primary.main,
                },
              }
        }
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        {user?.picture ? (
          <img src={user?.picture} width={45} height={45} />
        ) : (
          <GitHubIcon />
        )}
        <Menu
          id="basic-menu"
          anchorEl={profileAnchorEl}
          open={open}
          onClose={handleCloseProfileMenu}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={() => navigate("/profile")}>Profile</MenuItem>
          <MenuItem onClick={() => logout()}>Logout</MenuItem>
        </Menu>
      </Avatar>
    );
  };

  const MobileView = () => (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: "flex", md: "none" },
        height: "8vh",
        alignItems: "center",
      }}
    >
      <FilterDramaIcon
        sx={{
          mr: 3,
          fontSize: 50,
          color: theme.palette.primary.main,
        }}
      />
      <Typography
        noWrap
        variant="h6"
        sx={{
          flexGrow: 1,
          fontWeight: 400,
        }}
      >
        {title}
      </Typography>
      <RenderAvatar />
    </Box>
  );

  const WebView = () => (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: "none", md: "flex" },
        height: "10vh",
        alignItems: "center",
      }}
    >
      <FilterDramaIcon
        sx={{ mr: 1, fontSize: 70, color: theme.palette.primary.main }}
      />
      <Typography
        noWrap
        variant="h5"
        sx={{
          flexGrow: 1,
          fontWeight: 400,
        }}
      >
        {title}
      </Typography>
      <RenderAvatar />
    </Box>
  );

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "transparent",
        color: blueGrey[900],
        boxShadow: `0px 1px 2px 0 ${blueGrey[100]}`,
      }}
    >
      <Container maxWidth="xl">
        <WebView />
        <MobileView />
      </Container>
    </AppBar>
  );
});
