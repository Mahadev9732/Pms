import React from "react";

const TemplateList = () => {
  const templates = [
    "Performance Contract Form (PCF)",
    "Monthly Performance Dialogue Form (MPDF)",
    "Quarterly Performance Review Form (QPRF)",
    "End-of-Year Performance Appraisal Form (EYPAF)",
    "Performance Appraisal Dispute Form (PADF)",
    "Performance Improvement Plan (PIP)",
    "Individual Development Plans Form (IDPF)",
  ];

  return (
    <ul className="list-disc text-lg lg:text-[20px] font-medium leading-6 text-[#212529]">
      {templates.map((template, index) => (
        <li key={index} className="mb-2.5">
          {template}
        </li>
      ))}
    </ul>
  );
};

export default TemplateList;
