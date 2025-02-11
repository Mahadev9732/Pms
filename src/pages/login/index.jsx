import React from "react";
import AuthLayout from "../../layouts/AuthLayout";
import BaseContent from "../../components/common/BaseContent";
import LoginForm from "./LoginForm";

const index = () => {
  return (
    <AuthLayout>
      <BaseContent>
        <LoginForm />
      </BaseContent>
    </AuthLayout>
  );
};

export default index;
