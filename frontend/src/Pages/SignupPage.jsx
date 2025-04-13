import { useContext, useEffect, useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Alert,
} from "@mui/material";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const { userDetails, setSingleField, signUpUser } = useContext(UserContext);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
  });

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePassword = (password) => password.length >= 8;
  const validateUsername = (username) => username.length >= 3;

  const handleSignup = async (e) => {
    e.preventDefault();
    setMessage(await signUpUser());
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setSingleField({ name, value });

    // Real-time validation
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]:
        name === "email"
          ? validateEmail(value)
            ? ""
            : "Invalid email format"
          : name === "password"
          ? validatePassword(value)
            ? ""
            : "Password must be at least 8 characters"
          : name === "username"
          ? validateUsername(value)
            ? ""
            : "Username must be at least 3 characters"
          : "",
    }));
  };

  // Disable button if there are errors or empty fields
  const isButtonDisabled =
    !userDetails.username ||
    !userDetails.email ||
    !userDetails.password ||
    Object.values(errors).some((error) => error !== "");

  return (
    <Container maxWidth="xs">
      <Box sx={{ mt: 5, textAlign: "center" }}>
        <Typography variant="h5" gutterBottom>
          Sign Up
        </Typography>
        {message && <Alert severity="info">{message}</Alert>}
        <form onSubmit={handleSignup}>
          <TextField
            fullWidth
            label="Username"
            name="username"
            variant="outlined"
            margin="normal"
            value={userDetails.username}
            onChange={handleOnChange}
            error={!!errors.username}
            helperText={errors.username}
            required
          />
          <TextField
            fullWidth
            label="Email"
            type="email"
            name="email"
            variant="outlined"
            margin="normal"
            value={userDetails.email}
            onChange={handleOnChange}
            error={!!errors.email}
            helperText={errors.email}
            required
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            name="password"
            variant="outlined"
            margin="normal"
            value={userDetails.password}
            onChange={handleOnChange}
            error={!!errors.password}
            helperText={errors.password}
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
            disabled={isButtonDisabled}
          >
            Sign Up
          </Button>
        </form>
      </Box>
      <Typography
        sx={{
          marginTop: 2,
          textAlign: "center",
        }}
      >
        Don't have an account?{" "}
        <Button onClick={() => navigate("/login")}>Log in</Button>
      </Typography>
    </Container>
  );
};

export default Signup;
