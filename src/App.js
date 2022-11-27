import React from "react";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import WeatherResult from "./pages/WeatherResult";
import Loading from "./pages/Loading";

import NavigationWrapper from "./components/NavigationWrapper";

// Pages accessble to logged in users
const ProtectedProfile = withAuthenticationRequired(Profile);
const ProtectedWeatherResult = withAuthenticationRequired(WeatherResult);

function App() {
  const { isLoading } = useAuth0();

  // Show loading page when page is loading.
  if (isLoading) {
    return <Loading />;
  }

  return (
    <NavigationWrapper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<ProtectedProfile />} />
        <Route path="/weatherResult" element={<ProtectedWeatherResult />} />
        {/* Add 404 Page */}
      </Routes>
    </NavigationWrapper>
  );
}

export default App;
