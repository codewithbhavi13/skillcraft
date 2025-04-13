import React, { useContext, useState } from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { styled } from "@mui/system";
import HomeImg from "../../assets/homeimg.png"; // Import your image
import CareerOptionsDialogBox from "./CareerOptionsDialogBox";
import RecommandedOptionDialogBox from "./RecommandedOptionDialogBox";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { MessageContext } from "../../context/MessageContext";

// Styled components using Material-UI
const GradientText = styled(Typography)({
  fontSize: "2.5rem",
  fontWeight: "bold",
  background: "linear-gradient(to right,rgb(95, 170, 255),rgb(123, 169, 254))",
  WebkitBackgroundClip: "text",
  color: "transparent",
});

const Recommendation = () => {
  const navigate = useNavigate();
  const [openDialog, setOpenDialog] = useState(false);
  const [openRecommandations, setOpenRecommandations] = useState(false);
  const { isCareerChanged, isLogin, setCareerChanged } =
    useContext(UserContext);
  const { setErrorMsg } = useContext(MessageContext);
  const handleOpenDialog = () => {
    if (!isLogin) {
      navigate("/login");
      setErrorMsg("Please Login First For Recommandations");
      return;
    }
    setOpenDialog(true);
  };
  const handleCloseDialog = () => setOpenDialog(false);
  const handleOpenRecommandations = () => setOpenRecommandations(true);
  const handleCloseRecommandations = () => {
    setOpenRecommandations(false);
    setCareerChanged(false);
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 4,
        py: 6, // Padding top & bottom
      }}
    >
      {/* Left Side - Image */}
      <Box
        component="img"
        src={HomeImg}
        alt="Recommendation"
        sx={{
          width: { xs: "100%", md: "45%" }, // Responsive width
          borderRadius: "12px",
        }}
      />

      {/* Right Side - Text & Button */}
      <Box sx={{ maxWidth: "500px" }}>
        <GradientText variant="h4">Unlock Your Coding Potential!</GradientText>
        <Typography variant="body1" color="text.secondary" sx={{ my: 2 }}>
          Get personalized recommendations tailored to your learning path.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ fontWeight: "bold", borderRadius: "8px", px: 4, py: 1 }}
          onClick={handleOpenDialog}
        >
          Get Recommendation
        </Button>
      </Box>
      <CareerOptionsDialogBox
        open={openDialog}
        handleClose={handleCloseDialog}
        handleOpenRecommandations={handleOpenRecommandations}
      />
      {isCareerChanged && ( // for any this component is not get reloaded for any reason so rendering like this make it get reloaded
        <RecommandedOptionDialogBox
          open={openRecommandations}
          handleClose={handleCloseRecommandations}
        />
      )}
    </Container>
  );
};

export default Recommendation;
