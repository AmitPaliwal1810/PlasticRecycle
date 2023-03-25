import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import React from "react";
import Home from "./src/Components/home";
import Navbar from "./src/Components/Navbar";

const Dashboard = () => {
  return (
    <>
      <StyledOuterContainer>
        <Navbar />
        <Home />
      </StyledOuterContainer>
    </>
  );
};

export default Dashboard;

const StyledOuterContainer = styled(Box)(({ theme }) => ({
  height: "100vh",
  width: "100%",
  background: "#fff",
}));
