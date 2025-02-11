import React from "react";

// Reusable SectionHeader Component
const SectionHeader = ({ sectionTitle, sectionNumber }) => (
  <div className="text-base text-white bg-[#679c66] p-2.5 w-full">
    <strong className="text-lg">{`SECTION ${sectionNumber} :`}</strong>{" "}
    {sectionTitle}
  </div>
);

// Reusable CommentBox Component
const CommentBox = ({ label, placeholder, content, isEditable }) => (
  <div className={`mt-3 ${isEditable ? "" : "p-3 shadow-lg bg-gray-200"}`}>
    <label className="block mb-2">{label}</label>
    {isEditable ? (
      <textarea
        rows={4}
        placeholder={placeholder}
        className="w-full border rounded p-2 shadow-lg"
      >
        {content}
      </textarea>
    ) : (
      <p className="mt-4 border border-gray-400 rounded p-3">
        {content || "N/A"}
      </p>
    )}
  </div>
);

// Main Acknowledgement Component
const Acknowledgement = ({
  sectionNumber,
  sectionTitle,
  appraiseeComments,
  appraiserComments,
  countersigningOfficerComments,
}) => {
  return (
    <div className="mt-8">
      {/* Section Header */}
      <SectionHeader
        sectionNumber={sectionNumber}
        sectionTitle={sectionTitle}
      />

      {/* Content Area */}
      <div className="bg-white p-3">
        {/* Appraisee's Comments */}
        <CommentBox {...appraiseeComments} />

        {/* Appraiser's Comments */}
        <CommentBox {...appraiserComments} />

        {/* Countersigning Officer's Comments */}
        <CommentBox {...countersigningOfficerComments} />
      </div>
    </div>
  );
};

export default Acknowledgement;
