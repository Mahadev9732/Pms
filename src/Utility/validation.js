export const validateEmail = (email) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

export const validatePassword = (password) =>
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
    password
  );

export const validationSchema = {
  firstName: (value) => !!value.trim(),

  lastName: (value) => !!value.trim(),
  gender: (value) => !!value,
  jobTitle: (value) => !!value.trim(),
  designation: (value) => !!value.trim(),
  cadre: (value) => !!value.trim(),
  gradeLevel: (value) => !!value.trim(),
  ippisNo: (value) => /^\d+$/.test(value.trim()),
  email: (value) => validateEmail(value.trim()),
  recoveryEmail: (value) => validateEmail(value.trim()),
  password: (value) => validatePassword(value),
  confirmPassword: (value, allValues) => value === allValues.password,
};

export const passwordRequirements = `Password must contain:
  - Minimum 8 characters
  - At least one uppercase letter
  - At least one lowercase letter
  - At least one number
  - At least one special character (@$!%*?&)`;
