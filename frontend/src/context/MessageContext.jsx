import { Alert, Snackbar } from "@mui/material";
import { createContext, useState } from "react";

export const MessageContext = createContext();

export const MessageProvider = ({ children }) => {
  const [successMsg, setSuccessMsg] = useState("");
  const [warningMsg, setWarningMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  return (
    <>
      <ErrorSnackBar msg={errorMsg} handleClose={() => setErrorMsg("")} />
      <SuccessSnackBar msg={successMsg} handleClose={() => setSuccessMsg("")} />
      <WarningSnackBar msg={warningMsg} handleClose={() => setWarningMsg("")} />
      <MessageContext.Provider
        value={{ setErrorMsg, setSuccessMsg, setWarningMsg }}
      >
        {children}
      </MessageContext.Provider>
    </>
  );
};

const ErrorSnackBar = ({ msg, handleClose }) => {
  return (
    <Snackbar open={msg !== ""} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="error" variant="filled">
        {msg}
      </Alert>
    </Snackbar>
  );
};
const SuccessSnackBar = ({ msg, handleClose }) => {
  return (
    <Snackbar open={msg !== ""} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="success" variant="filled">
        {msg}
      </Alert>
    </Snackbar>
  );
};
const WarningSnackBar = ({ msg, handleClose }) => {
  return (
    <Snackbar open={msg !== ""} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="warning" variant="filled">
        {msg}
      </Alert>
    </Snackbar>
  );
};
