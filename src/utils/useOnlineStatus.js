// online custom hook

import { useState, useEffect } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });

    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);
  //  console.log("Online status", onlineStatus);
  return onlineStatus; //here Online status state variable  is behaving like a boolean.
};

export default useOnlineStatus;

// import { useState, useEffect } from "react";

// const useOnlineStatus = () => {
//   const [onlineStatus, setOnlineStatus] = useState(navigator.onLine);

//   useEffect(() => {
//     const handleOnline = () => setOnlineStatus(true);
//     const handleOffline = () => setOnlineStatus(false);

//     window.addEventListener("online", handleOnline);
//     window.addEventListener("offline", handleOffline);

//     return () => {
//       window.removeEventListener("online", handleOnline);
//       window.removeEventListener("offline", handleOffline);
//     };
//   }, []);

//   return onlineStatus;
// };

// export default useOnlineStatus;
