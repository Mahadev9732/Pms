import React from "react";
import { TextField, Box, Typography } from "@mui/material";

const Security = ({
  values,
  errors,
  touched,
  onChange,
  onBlur,
  getHelperText,
  passwordRequirements,
}) => {
  return (
    <Box>
      <TextField
        label="Password *"
        type="password"
        fullWidth
        sx={{ mb: 2 }}
        value={values.password}
        onChange={(e) => onChange("password", e.target.value)}
        onBlur={() => onBlur("password")}
        error={touched.password && errors.password}
        helperText={
          touched.password &&
          errors.password && (
            <Typography variant="caption" component="div">
              {passwordRequirements}
            </Typography>
          )
        }
      />
      <TextField
        label="Confirm Password *"
        type="password"
        fullWidth
        sx={{ mb: 2 }}
        value={values.confirmPassword}
        onChange={(e) => onChange("confirmPassword", e.target.value)}
        onBlur={() => onBlur("confirmPassword")}
        error={touched.confirmPassword && errors.confirmPassword}
        helperText={getHelperText("confirmPassword")}
      />
    </Box>
  );
};

export default Security;
