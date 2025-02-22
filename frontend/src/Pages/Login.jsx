import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
  Box,
  Modal,
  Backdrop,
  Fade,
} from "@mui/material";
import { Google, LinkedIn, GitHub } from "@mui/icons-material";

const Login = () => {
  const [open, setOpen] = useState(false);
  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container maxWidth="xs" sx={{ mt: 5, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <TextField fullWidth margin="normal" label="Username or Email" variant="outlined" />
      <TextField fullWidth margin="normal" label="Password" type="password" variant="outlined" />
      <Box display="flex" justifyContent="space-between" alignItems="center" mt={1}>
        <FormControlLabel control={<Checkbox />} label="Remember Me" />
        <Button onClick={handleOpen} sx={{ textTransform: "none" }}>Forgot Password?</Button>
      </Box>
      <Button fullWidth variant="contained" color="primary" sx={{ mt: 2 }}>
        Login
      </Button>
      <Typography variant="body2" mt={2}>or sign in with</Typography>
      <Box display="flex" justifyContent="center" gap={2} mt={1}>
        <Button variant="outlined" startIcon={<Google />}>
          Google
        </Button>
        <Button variant="outlined" startIcon={<LinkedIn />}>
          LinkedIn
        </Button>
        <Button variant="outlined" startIcon={<GitHub />}>
          GitHub
        </Button>
      </Box>
      <Typography mt={2}>
        Don't have an account? <Button href="/signup">Create Account</Button>
      </Typography>
      
      {/* Forgot Password Modal */}
      <Modal open={open} onClose={handleClose} closeAfterTransition BackdropComponent={Backdrop} BackdropProps={{ timeout: 500 }}>
        <Fade in={open}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 300,
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
              borderRadius: 2,
            }}
          >
            <Typography variant="h6">Reset Password</Typography>
            <TextField fullWidth margin="normal" label="Email" variant="outlined" />
            <Button fullWidth variant="contained" color="primary" sx={{ mt: 2 }}>
              Send Reset Link
            </Button>
          </Box>
        </Fade>
      </Modal>
    </Container>
  );
};

export default Login;
