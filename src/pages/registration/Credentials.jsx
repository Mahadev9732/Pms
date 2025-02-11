import React from "react";
import { TextField, Box } from "@mui/material";

const Credentials = ({
  values,
  errors,
  touched,
  onChange,
  onBlur,
  getHelperText,
}) => {
  return (
    <Box>
      <TextField
        label="IPPIS Number *"
        fullWidth
        sx={{ mb: 2 }}
        value={values.ippisNo}
        onChange={(e) => onChange("ippisNo", e.target.value)}
        onBlur={() => onBlur("ippisNo")}
        error={touched.ippisNo && errors.ippisNo}
        helperText={
          touched.ippisNo && errors.ippisNo && "Must be a numeric value"
        }
        inputProps={{
          inputMode: "numeric",
          pattern: "[0-9]*",
        }}
      />
      <TextField
        label="Email *"
        fullWidth
        sx={{ mb: 2 }}
        value={values.email}
        onChange={(e) => onChange("email", e.target.value)}
        onBlur={() => onBlur("email")}
        error={touched.email && errors.email}
        helperText={getHelperText("email")}
      />
      <TextField
        label="Recovery Email *"
        fullWidth
        sx={{ mb: 2 }}
        value={values.recoveryEmail}
        onChange={(e) => onChange("recoveryEmail", e.target.value)}
        onBlur={() => onBlur("recoveryEmail")}
        error={touched.recoveryEmail && errors.recoveryEmail}
        helperText={getHelperText("recoveryEmail")}
      />
    </Box>
  );
};

export default Credentials;
