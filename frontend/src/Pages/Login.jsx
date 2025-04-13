import React, { useContext, useEffect, useState } from "react";
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
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Login = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { userDetails, setSingleField, loginUser } = useContext(UserContext);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setSingleField({ name, value });

    if (name === "email") {
      setErrors({
        ...errors,
        email: validateEmail(value) ? "" : "Invalid email format",
      });
    } else if (name === "password") {
      setErrors({
        ...errors,
        password: validatePassword(value)
          ? ""
          : "Password must be at least 8 characters",
      });
    }
  };

  const [errors, setErrors] = useState({ email: "", password: "" });
  const isButtonDisabled =
    !userDetails.email ||
    !userDetails.password ||
    Object.values(errors).some((error) => error !== "");

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailValid = validateEmail(userDetails.email);
    const passwordValid = validatePassword(userDetails.password);

    if (!emailValid || !passwordValid) {
      setErrors({
        email: emailValid ? "" : "Invalid email format",
        password: passwordValid ? "" : "Password must be at least 8 characters",
      });
      return;
    }

    loginUser();
  };

  const { isLogin } = useContext(UserContext);
  useEffect(() => {
    if (isLogin) {
      navigate("/");
    }
  }, [isLogin]);

  return (
    <Container maxWidth="xs" sx={{ mt: 5, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <TextField
        fullWidth
        margin="normal"
        label="Email"
        variant="outlined"
        name="email"
        value={userDetails.email}
        onChange={handleOnChange}
        error={!!errors.email}
        helperText={errors.email}
        required
      />
      <TextField
        fullWidth
        margin="normal"
        label="Password"
        type="password"
        name="password"
        value={userDetails.password}
        onChange={handleOnChange}
        error={!!errors.password}
        helperText={errors.password}
        variant="outlined"
        required
      />
      {/* <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mt={1}
      >
        <FormControlLabel control={<Checkbox />} label="Remember Me" />
        <Button onClick={handleOpen} sx={{ textTransform: "none" }}>
          Forgot Password?
        </Button>
      </Box> */}
      <Button
        fullWidth
        variant="contained"
        onClick={handleSubmit}
        color="primary"
        disabled={isButtonDisabled}
        sx={{ mt: 2 }}
      >
        Login
      </Button>
      {/* <Typography variant="body2" mt={2}>
        or sign in with
      </Typography>
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
      </Box> */}
      <Typography mt={2}>
        Don't have an account?{" "}
        <Button onClick={() => navigate("/signup")}>Create Account</Button>
      </Typography>

      {/* Forgot Password Modal */}
      {/* <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
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
            <TextField
              fullWidth
              margin="normal"
              label="Email"
              variant="outlined"
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
            >
              Send Reset Link
            </Button>
          </Box>
        </Fade>
      </Modal> */}
    </Container>
  );
};

export default Login;
