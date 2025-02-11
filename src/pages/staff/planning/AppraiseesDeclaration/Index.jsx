import React, { useState, useEffect } from "react";
import Dropdown from "../../../../components/dropdown/Dropdown";
import DateField from "../../../../components/dateField/DateField";
import SignatureField from "../../../../components/signatureField/SignatureField";
import SignatureModal from "../../../../components/signatureModal/SignatureModal";

const Index = ({
  dropdownEditable = true,
  dateEditable = true,
  labels = {
    declaration: "Appraisee's Declaration:",
    date: "Date:",
    signature: "Appraisee's Signature:",
  },
}) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [signatureImage, setSignatureImage] = useState(null);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveSignature = (signatureData) => {
    setSignatureImage(signatureData);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isModalOpen]);

  return (
    <div className="flex flex-wrap bg-white border-b-2 border-gray-400">
      {/* Customizable Dropdown */}

      <Dropdown
        label={labels.declaration}
        options={[
          { value: "1", label: "Agree" },
          { value: "2", label: "Disagree" },
        ]}
        editable={dropdownEditable}
        onChange={(e) => console.log(e.target.value)}
      />

      {/* Customizable Date Picker */}

      <DateField
        label={labels.date}
        selectedDate={selectedDate}
        onDateChange={(date) => setSelectedDate(date)}
        editable={dateEditable}
      />

      {/* Customizable Signature Field */}

      <SignatureField
        label={labels.signature}
        signatureImage={signatureImage}
        onAddSignature={handleOpenModal}
      />

      {/* Signature Modal */}
      <SignatureModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSaveSignature={handleSaveSignature}
      />
    </div>
  );
};

export default Index;
