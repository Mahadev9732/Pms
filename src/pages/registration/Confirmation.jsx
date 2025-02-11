import React from "react";
import { Box, Typography } from "@mui/material";

const Confirmation = ({ values = {} }) => {
  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Confirm your details:
      </Typography>
      <Typography>First Name: {values.firstName || "N/A"}</Typography>
      <Typography>Middle Name: {values.middleName || "N/A"}</Typography>
      <Typography>Last Name: {values.lastName || "N/A"}</Typography>
      <Typography>Gender: {values.gender || "N/A"}</Typography>
      <Typography>Job Title: {values.jobTitle || "N/A"}</Typography>
      <Typography>Designation: {values.designation || "N/A"}</Typography>
      <Typography>Cadre: {values.cadre || "N/A"}</Typography>
      <Typography>IPPIS No: {values.ippisNo || "N/A"}</Typography>
      <Typography>Email: {values.email || "N/A"}</Typography>
      <Typography>Recovery Email: {values.recoveryEmail || "N/A"}</Typography>
    </Box>
  );
};

export default Confirmation;
