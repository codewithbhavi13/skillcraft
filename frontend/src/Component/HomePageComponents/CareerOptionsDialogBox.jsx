import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { Box } from "@mui/material";
import { forwardRef, useContext, useRef } from "react";
import { UserContext } from "../../context/UserContext";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CareerOptionsDialogBox(props) {
  const { open, handleClose, handleOpenRecommandations } = props;
  const { setCareerChanged, setSingleField } = useContext(UserContext);
  const handleCareerOptionChange = async (option) => {
    setSingleField({ name: "selectedCareer", value: option });
    handleClose();
    setCareerChanged(true);
    setTimeout(() => handleOpenRecommandations(), 100);
  };
  const options = ["AI & ML", "DevOps", "Web Development", "Cyber Security"];
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      maxWidth="sm"
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>Choose Your Career Option</DialogTitle>
      <DialogContent>
        <Box display="flex" justifyContent="center" alignItems="center" gap={2}>
          {options.map((item, index) => (
            <Button
              key={index}
              onClick={() => handleCareerOptionChange(item)}
              variant="outlined"
            >
              {item}
            </Button>
          ))}
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
