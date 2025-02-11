import React from "react";
import AuthLayout from "../../layouts/AuthLayout";
import BaseContent from "../../components/common/BaseContent";
import Registration from "./RegistrationForm";
import MultiStep from "./MultiStepForm";
const Index = () => {
  return (
    <AuthLayout>
      <BaseContent>
        <MultiStep />
      </BaseContent>
    </AuthLayout>
  );
};

export default Index;
