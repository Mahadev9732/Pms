import React from "react";
import {
  TextField,
  Box,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

const PersonalInfo = ({
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
        label="First Name *"
        fullWidth
        sx={{ mb: 1 }}
        value={values.firstName}
        onChange={(e) => onChange("firstName", e.target.value)}
        onBlur={() => onBlur("firstName")}
        error={touched.firstName && errors.firstName}
        helperText={getHelperText("firstName")}
      />
      <TextField
        label="Middle Name "
        fullWidth
        sx={{ mb: 1 }}
        value={values.middleName}
        onChange={(e) => onChange("middleName", e.target.value)}
      />
      <TextField
        label="Last Name *"
        fullWidth
        sx={{ mb: 1 }}
        value={values.lastName}
        onChange={(e) => onChange("lastName", e.target.value)}
        onBlur={() => onBlur("lastName")}
        error={touched.lastName && errors.lastName}
        helperText={getHelperText("lastName")}
      />
      <FormControl
        component="fieldset"
        error={touched.gender && errors.gender}
        sx={{ mt: 1 }}
      >
        <FormLabel component="legend">Gender *</FormLabel>
        <RadioGroup
          row
          value={values.gender}
          onChange={(e) => onChange("gender", e.target.value)}
          onBlur={() => onBlur("gender")}
        >
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="female" control={<Radio />} label="Female" />
        </RadioGroup>
        {touched.gender && errors.gender && (
          <span className="text-red-500 text-sm">
            {getHelperText("gender")}
          </span>
        )}
      </FormControl>
    </Box>
  );
};

export default PersonalInfo;
