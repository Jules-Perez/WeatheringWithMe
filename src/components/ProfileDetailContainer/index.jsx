import React, { useEffect, useState } from "react";
import { Typography, Box, Link } from "@mui/material";

//Renders Basic user profile
// user : Auth0.user
export default (props) => {
  const { user } = props;
  const [userLink, setUserLink] = useState(null);

  useEffect(() => {
    if (user?.nickname) setUserLink(`https://github.com/${user?.nickname}`);
  }, [props]);

  return (
    <Box
      sx={{
        textAlign: "center",
        padding: 4,
      }}
    >
      <Typography color="primary" variant="h5">
        {user?.name ?? "User Name"}
      </Typography>
      <Link color="primary" underline="hover" href={userLink ?? "#"}>
        {userLink ?? "Web Link"}
      </Link>
    </Box>
  );
};
