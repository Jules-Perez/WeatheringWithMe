import React, { memo } from "react";
import { Box, useTheme } from "@mui/material";

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
      }}
    ></Box>
  );
});
