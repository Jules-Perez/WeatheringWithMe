import React, { useState } from "react";
import { Box, Button, TextField, InputAdornment } from "@mui/material";
import { createSearchParams, useNavigate } from "react-router-dom";
import { Search } from "@mui/icons-material";

//Renders a City bar search
//path : where the search input query will land.
export default (props) => {
  const { path } = props;
  const navigate = useNavigate();
  const [citySearch, setCitySearch] = useState(null);

  const handleSearchWeather = () => {
    navigate({
      pathname: path ?? "/",
      search: createSearchParams({ city: citySearch }).toString(),
    });
  };

  return (
    <Box
      m="auto"
      maxWidth={700}
      minHeight={20}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <TextField
        value={citySearch}
        onChange={(e) => setCitySearch(e.target.value)}
        variant="outlined"
        label="Search Weather in City"
        fullWidth
        InputProps={{
          sx: { borderRadius: "35px" },
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
      ></TextField>
      <Box mt={2}>
        <Button
          sx={{ color: "white" }}
          variant="contained"
          onClick={handleSearchWeather}
        >
          Display Weather
        </Button>
      </Box>
    </Box>
  );
};
