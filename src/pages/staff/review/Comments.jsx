import React from "react";
import Acknowledgement from "../../../components/planning/Acknowledgement";

const Comments = () => {
  const acknowledgementData = {
    sectionNumber: "7",
    sectionTitle: "COMMENTS",
    appraiseeComments: {
      label: "Appraisee's Comments:",
      content: "Appraisee",
      isEditable: true,
    },
    appraiserComments: {
      label: "Countersigning Officer's Comments:",
      content: "Satisfactory",
      isEditable: false,
    },
    countersigningOfficerComments: {
      label: "Appraiser's Comments:",
      content: "",
      isEditable: false,
    },
  };
  return (
    <div>
      <Acknowledgement {...acknowledgementData} />
    </div>
  );
};

export default Comments;
