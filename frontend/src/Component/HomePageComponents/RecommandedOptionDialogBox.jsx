import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { Box, Grid2, Typography } from "@mui/material";
import { forwardRef, useContext, useEffect, useState } from "react";
import { UserPreferencesContext } from "../../context/UserPreferencesContext";
import { CourseContext } from "../../context/CourseContext";
import CourseCard from "../Cards/CourseCard";
import TutorialCard from "../Cards/TutorialCard";
const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function RecommandedOptionDialogBox(props) {
  const { open, handleClose } = props;
  const { selectedCareer } = useContext(UserPreferencesContext);
  const { courses, tutorials } = useContext(CourseContext);
  const [recommandedCourses, setRecommandedCourses] = useState([]);
  const [recommandedTutorials, setRecommandedTutorials] = useState([]);
  useState(() => {
    setRecommandedCourses(
      courses.filter((item) => item.category === selectedCareer)
    );
    setRecommandedTutorials(
      tutorials.filter((item) => item.category === selectedCareer)
    );
    console.log(selectedCareer);
  }, [selectedCareer]);
  useEffect(() => {
    console.log("Recommanded", recommandedCourses);
    console.log(recommandedTutorials);
  }, [recommandedCourses, recommandedTutorials]);
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      maxWidth="md"
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogContent>
        <Typography
          sx={{
            mb: 2,
          }}
          variant="h4"
          component="h4"
        >
          Courses
        </Typography>
        <Box display="flex" gap={2}>
          {recommandedCourses.map((item, index) => (
            <CourseCard key={index} course={item} />
          ))}
        </Box>
        <Typography
          sx={{
            mt: 5,
            mb: 2,
          }}
          variant="h4"
          component="h4"
        >
          Tutorials
        </Typography>
        <Grid2
          container
          spacing={{ xs: 1, md: 2 }}
          columns={12}
          sx={{
            alignItems: "stretch",
          }}
        >
          {recommandedTutorials.map((item, index) => (
            <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
              <TutorialCard key={index} tutorial={item} />
            </Grid2>
          ))}
        </Grid2>
      </DialogContent>

      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
