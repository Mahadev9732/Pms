import { useEffect, useRef } from "react";

const useInactivityLogout = (logoutCallback, timeout = 15 * 60 * 1000) => {
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      logoutCallback();
    }, timeout);
  };

  useEffect(() => {
    // List of events to detect activity
    const activityEvents = [
      "mousemove",
      "keydown",
      "mousedown",
      "scroll",
      "touchstart",
    ];
    // Reset the timeout on activity
    const handleActivity = () => resetTimeout();

    // Add event listeners
    activityEvents.forEach((event) =>
      window.addEventListener(event, handleActivity)
    );

    // Start the initial timeout
    resetTimeout();

    // Cleanup event listeners and timeout on component unmount
    return () => {
      activityEvents.forEach((event) =>
        window.removeEventListener(event, handleActivity)
      );
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [logoutCallback, timeout]);

  return null;
};

export default useInactivityLogout;
