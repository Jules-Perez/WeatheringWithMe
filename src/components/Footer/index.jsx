import React, { memo } from "react";
import { Box, Typography, useTheme } from "@mui/material";

export default memo((props) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        height: "5vh",
        backgroundColor: theme.palette.primary.main,
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography>Erlich Coding Challeng by Jules Perez</Typography>
    </Box>
  );
});
