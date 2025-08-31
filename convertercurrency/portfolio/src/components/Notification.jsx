import { createContext, useState, useContext } from "react";
import Alert from "@mui/material/Alert";
import { Snackbar } from "@mui/material";

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState({
    message: "",
    severity: "",
  });
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const triggerNotification = (message, severity) => {
    setNotification({ message, severity });
    setOpen(true);
  };

  const setSuccessNotification = (message) => {
    triggerNotification(message, "success");
  };

  const setErrorNotification = (message) => {
    triggerNotification(message, "error");
  };

  const setInfoNotification = (message) => {
    triggerNotification(message, "info");
  };

  const setWarningNotification = (message) => {
    triggerNotification(message, "warning");
  };

  const clearNotification = () => {
    setNotification({ message: "", severity: "" });
    setOpen(false);
  };

  return (
    <NotificationContext.Provider
      value={{
        setSuccessNotification,
        setErrorNotification,
        setInfoNotification,
        setWarningNotification,
        clearNotification,
      }}
    >
      {children}
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          severity={notification.severity}
          onClose={clearNotification}
          sx={{ width: "100%" }}
        >
          {notification.message}
        </Alert>
      </Snackbar>
    </NotificationContext.Provider>
  );
};

export const useNotification = () => useContext(NotificationContext);