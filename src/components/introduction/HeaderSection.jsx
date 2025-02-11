import React from "react";

const HeaderSection = () => {
  return (
    <div>
      <h1 className="font-oswald font-semibold text-2xl lg:text-[35px] mt-4 mb-2 text-[#020048] text-center">
        Welcome
      </h1>
      <div className="text-lg lg:text-[22px] uppercase font-medium text-[#242424] border-b border-[#d1d1d1] pb-2 text-center">
        Employee Performance Database Section
      </div>
      <div className="mt-2 px-4">
        The Federal Ministry of Education Employee (FME) Performance Management
        System Assessment Tools and Templates have been developed and Automated,
        these templates are administered at different stages in the
      </div>
      <div className="mt-5 sm:px-20 px-4">
        Performance Management Cycle, and the templates are:
      </div>
    </div>
  );
};

export default HeaderSection;
