import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Container } from "@mui/material";

import ProfileDetailContainer from "../../components/ProfileDetailContainer";
import CitySearchbar from "../../components/CitySearchbar";

export default (props) => {
  const { user } = useAuth0();

  return (
    <Container>
      <ProfileDetailContainer user={user} />
      <CitySearchbar path="/weatherResult" />
    </Container>
  );
};
