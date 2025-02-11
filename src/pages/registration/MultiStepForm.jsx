import React, { useState } from "react";
import { Stepper, Step, StepLabel, Button, Box } from "@mui/material";
import Swal from "sweetalert2";
import PersonalInfo from "./PersonalInfo";
import AccountDetails from "./AccountDetails";
import Credentials from "./Credentials";
import Security from "./Security";
import Confirmation from "./Confirmation";
import {
  validationSchema,
  passwordRequirements,
} from "../../Utility/validation";

const MultiStepForm = () => {
  const steps = [
    "Personal Information",
    "Account Details",
    "Credentials",
    "Security",
    "Confirmation",
  ];
  const [activeStep, setActiveStep] = useState(0);
  const [touched, setTouched] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [formValues, setFormValues] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    gender: "",
    jobTitle: "",
    designation: "",
    cadre: "",
    gradeLevel: "",
    ippisNo: "",
    email: "",
    recoveryEmail: "",
    password: "",
    confirmPassword: "",
  });
  const validateField = (field, value) => {
    if (field === "confirmPassword") {
      return validationSchema[field](value, formValues);
    }
    return validationSchema[field](value);
  };

  const validateStep = (step) => {
    const stepFields = {
      0: ["firstName", "lastName", "gender"],
      1: ["jobTitle", "designation", "cadre", "gradeLevel"],
      2: ["ippisNo", "email", "recoveryEmail"],
      3: ["password", "confirmPassword"],
    };

    const errors = {};
    let isValid = true;
    const emptyFields = [];

    stepFields[step].forEach((field) => {
      const value = formValues[field];
      if (!value) {
        emptyFields.push(field);
      }

      const fieldValid = validateField(field, value);
      errors[field] = !fieldValid;
      if (!fieldValid) isValid = false;
    });

    setFormErrors(errors);

    // Show swal alert for empty fields
    if (emptyFields.length > 0) {
      Swal.fire({
        title: "All Fields Required",
        text: "Please fill out all required fields before proceeding.",
        icon: "warning",
        confirmButtonText: "OK",
      });
      return false;
    }

    return isValid;
  };

  const handleNext = () => {
    if (validateStep(activeStep)) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleBack = () => setActiveStep((prev) => prev - 1);

  const handleChange = (field, value) => {
    setFormValues((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      setFormErrors((prev) => ({
        ...prev,
        [field]: !validateField(field, value),
      }));
    }
  };

  const handleBlur = (field) => {
    if (!touched[field]) {
      setTouched((prev) => ({ ...prev, [field]: true }));
    }
    setFormErrors((prev) => ({
      ...prev,
      [field]: !validateField(field, formValues[field]),
    }));
  };

  const getHelperText = (field) => {
    if (!touched[field]) return "";
    if (formErrors[field]) {
      switch (field) {
        case "email":
        case "recoveryEmail":
          return "Invalid email address";
        case "password":
          return passwordRequirements;
        case "confirmPassword":
          return "Passwords must match";
        default:
          return "This field is required";
      }
    }
    return "";
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Form submitted successfully:", data);
        alert("Form submitted successfully!");
      } else {
        const errorData = await response.json();
        console.error("Error submitting form:", errorData);
        alert("Error submitting form. Please try again.");
      }
    } catch (error) {
      console.error("Network error:", error);
      alert("Network error. Please check your connection.");
    }
  };

  const renderStepContent = (step) => {
    const commonProps = {
      values: formValues,
      errors: formErrors,
      touched,
      onChange: handleChange,
      onBlur: handleBlur,
      getHelperText,
    };

    switch (step) {
      case 0:
        return <PersonalInfo {...commonProps} />;
      case 1:
        return <AccountDetails {...commonProps} />;
      case 2:
        return <Credentials {...commonProps} />;
      case 3:
        return (
          <Security
            {...commonProps}
            passwordRequirements={passwordRequirements}
          />
        );
      case 4:
        return <Confirmation values={formValues} />;
      default:
        return null;
    }
  };

  return (
    <div className="border-4 bg-[rgba(129,255,169,0.60)] p-4 rounded-lg shadow-md max-w-sm w-full mx-auto relative">
      <h1 className="text-2xl font-bold text-center text-black mb-6">
        Create New Account
      </h1>

      <Box
        sx={{
          width: "100%",
          paddingX: 2,
          "& .MuiStepLabel-label": {
            fontSize: { xs: "0.6rem", sm: "0.8rem" },
            whiteSpace: "normal",
          },
        }}
      >
        <Stepper
          activeStep={activeStep}
          alternativeLabel
          sx={{
            display: "flex",
            justifyContent: "center",
            paddingY: 2,
            "& .MuiStepConnector-line": {
              minHeight: 0,
              borderTop: "2px solid #000",
            },
            "& .MuiStepper-root": {
              flexDirection: "row",
            },
            "& .MuiStepLabel-label": {
              fontSize: { xs: "0.6rem", sm: "0.8rem" },
              whiteSpace: "normal",
            },
          }}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel className="break-words">{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <Box
          sx={{
            minHeight: "200px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {activeStep === steps.length ? (
            <Box textAlign="center" p={2}>
              <h3 className="text-lg font-semibold">
                Thank you for completing the registration!
              </h3>
            </Box>
          ) : (
            <>
              <Box sx={{ flexGrow: 1 }}>{renderStepContent(activeStep)}</Box>

              <Box
                sx={{
                  mt: 2,
                  display: "flex",
                  justifyContent: "space-between",
                  paddingX: 2,
                }}
              >
                <Button
                  variant="contained"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                  sx={{ minWidth: "80px" }}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ minWidth: "80px" }}
                >
                  {activeStep === steps.length - 1 ? "Submit" : "Next"}
                </Button>
              </Box>
            </>
          )}
        </Box>
      </Box>
    </div>
  );
};

export default MultiStepForm;
