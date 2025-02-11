import React, { useEffect, useRef, useState } from "react";
import useNetworkStatus from "../../hooks/useNetworkStatus";

const NetworkStatusAlert = () => {
  const { isOnline } = useNetworkStatus();
  const previousStatus = useRef(isOnline);
  const [message, setMessage] = useState("");

  useEffect(() => {
    let timeoutId;

    if (previousStatus.current !== isOnline) {
      if (isOnline) {
        setMessage("Connection restored");
      } else {
        setMessage("No network connection");
      }

      // Clear the message after 3 seconds
      timeoutId = setTimeout(() => setMessage(""), 3000);
    }

    previousStatus.current = isOnline;

    return () => clearTimeout(timeoutId);
  }, [isOnline]);

  return (
    message && (
      <div
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 p-4 mb-4 text-sm rounded-lg ${
          isOnline ? "bg-blue-50 text-blue-800" : "bg-red-50 text-red-800"
        }`}
        role="alert"
      >
        <span className="font-medium">
          {isOnline ? "Info alert!" : "Danger alert!"}
        </span>{" "}
        {message}
      </div>
    )
  );
};

export default NetworkStatusAlert;
