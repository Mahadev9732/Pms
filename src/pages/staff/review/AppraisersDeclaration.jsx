import React, { useState } from "react";
import Dropdown from "../../../components/dropdown/Dropdown";
import DateField from "../../../components/dateField/DateField";
import SignatureField from "../../../components/signatureField/SignatureField";

const AppraisersDeclaration = ({
  labels = {
    declaration: "Appraiser's Declaration :",
    date: "Date:",
    signature: "Appraiser's Signature :",
  },
}) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const isDropdownDisabled = true;

  return (
    <div className="flex flex-wrap bg-white border-b-2 border-gray-400 p-2.5">
      {/* Customizable Dropdown */}

      <Dropdown
        label={labels.declaration}
        options={[
          { value: "1", label: "Agree" },
          { value: "2", label: "Disagree" },
        ]}
        onChange={(e) => console.log(e.target.value)}
        disabled={isDropdownDisabled}
      />

      {/* Customizable Date Picker */}

      <DateField
        label={labels.date}
        selectedDate={selectedDate}
        onDateChange={(date) => setSelectedDate(date)}
      />

      {/* Customizable Signature Field */}
      <SignatureField
        label={labels.signature}
        showButton={false}
        showUploadButton={false}
      />
    </div>
  );
};

export default AppraisersDeclaration;
