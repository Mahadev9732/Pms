import React from "react";
import { TextField, Box } from "@mui/material";

const AccountDetails = ({
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
        label="Job Title *"
        fullWidth
        sx={{ mb: 1 }}
        value={values.jobTitle}
        onChange={(e) => onChange("jobTitle", e.target.value)}
        onBlur={() => onBlur("jobTitle")}
        error={touched.jobTitle && errors.jobTitle}
        helperText={getHelperText("jobTitle")}
      />
      <TextField
        label="Designation *"
        fullWidth
        sx={{ mb: 1 }}
        value={values.designation}
        onChange={(e) => onChange("designation", e.target.value)}
        onBlur={() => onBlur("designation")}
        error={touched.designation && errors.designation}
        helperText={getHelperText("designation")}
      />
      <TextField
        label="Cadre *"
        fullWidth
        sx={{ mb: 1 }}
        value={values.cadre}
        onChange={(e) => onChange("cadre", e.target.value)}
        onBlur={() => onBlur("cadre")}
        error={touched.cadre && errors.cadre}
        helperText={getHelperText("cadre")}
      />
      <TextField
        label="Grade Level *"
        fullWidth
        sx={{ mb: 1 }}
        value={values.gradeLevel}
        onChange={(e) => onChange("gradeLevel", e.target.value)}
        onBlur={() => onBlur("gradeLevel")}
        error={touched.gradeLevel && errors.gradeLevel}
        helperText={getHelperText("gradeLevel")}
      />
    </Box>
  );
};

export default AccountDetails;
