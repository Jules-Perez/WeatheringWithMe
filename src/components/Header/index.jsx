import React, { memo } from "react";
import { Box, AppBar, Container, Typography, Avatar } from "@mui/material";
import FilterDramaIcon from "@mui/icons-material/FilterDrama";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useTheme } from "@mui/material/styles";
import { blueGrey } from "@mui/material/colors";

export default memo((props) => {
  const title = "Weather Forcast";
  const theme = useTheme();

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "transparent",
        color: blueGrey[900],
        boxShadow: 1,
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "flex", md: "none" },
            height: "10vh",
            alignItems: "center",
          }}
        >
          <FilterDramaIcon sx={{ mr: 3, fontSize: 50 }} />
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
          <Avatar sx={{ backgroundColor: blueGrey[900] }}>
            <GitHubIcon />
          </Avatar>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            height: "10vh",
            alignItems: "center",
          }}
        >
          <FilterDramaIcon sx={{ mr: 1, fontSize: 70 }} />
          <Typography
            noWrap
            variant="h5"
            sx={{
              letterSpacing: ".1rem",
              fontWeight: 500,
              flexGrow: 1,
            }}
          >
            {title}
          </Typography>
          <Avatar sx={{ backgroundColor: blueGrey[900], flexGrow: 0 }}>
            <GitHubIcon />
          </Avatar>
        </Box>
      </Container>
    </AppBar>
  );
});
