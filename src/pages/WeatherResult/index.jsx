import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Button,
  responsiveFontSizes,
  CircularProgress,
} from "@mui/material";
import moment from "moment/moment";
import { useNavigate } from "react-router-dom";

import { getWeatherReportByCity } from "../../utils";

export default (props) => {
  const [serachParams] = useSearchParams();
  const [Results, setResults] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (serachParams.get("city")) fetchWeatherApi();
  }, []);

  const fetchWeatherApi = async () => {
    const response = await getWeatherReportByCity(serachParams.get("city"));
    createWeatherData(response);
  };

  function createWeatherData(data) {
    const { temp, humidity, pressure } = data.main;
    const { description, main } = data.weather[0];
    const date = moment(new Date()).format("L");
    setResults({ date, temp, description, main, pressure, humidity });
  }

  const renderWeatherData = useMemo(() => {
    return Results ? (
      <TableRow
        key={Results.date}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          {Results.date}
        </TableCell>
        <TableCell>{Results.temp}</TableCell>
        <TableCell>{Results.description}</TableCell>
        <TableCell>{Results.main}</TableCell>
        <TableCell>{Results.pressure}</TableCell>
        <TableCell>{Results.humidity}</TableCell>
      </TableRow>
    ) : (
      <CircularProgress primary />
    );
  }, [Results]);

  const renderWeatherDataMobile = useMemo(() => {
    return Results ? (
      <TableRow
        key={Results.date}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          {Results.date}
        </TableCell>
        <TableCell>{Results.temp}</TableCell>
      </TableRow>
    ) : (
      <CircularProgress primary />
    );
  }, [Results]);

  const WebView = () => (
    <Box sx={{ display: { xs: "none", md: "flex" }, margin: 2 }}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Date (mm/dd/yyyy)</TableCell>
            <TableCell>Temp (F)</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Main</TableCell>
            <TableCell>Pressure</TableCell>
            <TableCell>Humidity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{renderWeatherData}</TableBody>
      </Table>
    </Box>
  );

  const MobileView = () => (
    <Box sx={{ display: { xs: "flex", md: "none" }, margin: 2 }}>
      <Table sx={{ minWidth: 50 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Date (mm/dd/yyyy)</TableCell>
            <TableCell>Temp (F)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{renderWeatherDataMobile}</TableBody>
      </Table>
    </Box>
  );

  return (
    <>
      <TableContainer>
        <WebView />
        <MobileView />
      </TableContainer>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          margin: 5,
        }}
      >
        <Button
          onClick={() => navigate("/profile")}
          sx={{ color: "white", padding: " 5px 35px" }}
          variant="contained"
        >
          Back
        </Button>
      </Box>
    </>
  );
};
