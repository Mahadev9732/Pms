import React from "react";
import PmsPolicy from "../../assets/pdf/DRAFT Reviewed-1736234548.pdf";
import GuideLine from "../../assets/pdf/DRAFT Performance management guidelines-1736235301.pdf";
import Sop from "../../assets/pdf/SOP-1736235303.pdf";

const DownloadsSection = () => {
  const downloads = [
    {
      title: "Click here to download the OHCSF PMS Policy.",
      file: PmsPolicy,
    },
    {
      title: "Click here to Download - PMS Guideline and Manual.",
      file: GuideLine,
    },
    {
      title: "Click here to Download - SOP.",
      file: Sop,
    },
  ];

  // Function to handle the download
  const handleDownload = (file) => {
    const link = document.createElement("a");
    link.href = file;
    link.download = file.split("/").pop();
    link.click();
  };

  return (
    <div className="flex flex-col items-center justify-center mt-0 sm:mt-14">
      {downloads.map((download, index) => (
        <div
          key={index}
          className="text-white rounded-lg py-2 px-4 mb-4 bg-green-700 text-center w-full"
        >
          <button
            onClick={() => handleDownload(download.file)}
            className="w-full"
          >
            {download.title}
          </button>
        </div>
      ))}
    </div>
  );
};

export default DownloadsSection;
