import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";

export default (props) => {
  const { logout, isAuthenticated } = useAuth0();
  return (
    !isAuthenticated && (
      <Button {...props} onClick={() => logout()}>
        Logout
      </Button>
    )
  );
};
