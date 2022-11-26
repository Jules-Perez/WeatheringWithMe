import { CircularProgress, Typography, Container } from "@mui/material";
export default () => {
  return (
    <Container
      sx={{
        flex: 1,
        textAlign: "center",
        marginTop: 10,
      }}
    >
      <Typography color="primary" variant="h3">
        Redirecting...
      </Typography>
      <CircularProgress color="primary" />
    </Container>
  );
};
