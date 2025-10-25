import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  //check if online
  const [onlineStatus, setonlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("online", () => {
      setonlineStatus(true);
    });
    window.addEventListener("offline", () => {
      setonlineStatus(false);
    });
  }, []);
  // boolean value
  return onlineStatus;
};

export default useOnlineStatus;
