import { useState } from "react";
import { Container, TextField, Button, Typography, Box, Alert } from "@mui/material";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:5000/api/auth/signup", { name, email, password });
      localStorage.setItem("userInfo", JSON.stringify(data));  // Store user info in local storage
      setMessage("Signup successful!");
    } catch (error) {
      setMessage(error.response?.data?.message || "Error signing up");
    }
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ mt: 5, p: 3, boxShadow: 3, borderRadius: 2, textAlign: "center" }}>
        <Typography variant="h5" gutterBottom>Sign Up</Typography>
        {message && <Alert severity="info">{message}</Alert>}
        <form onSubmit={handleSignup}>
          <TextField fullWidth label="Name" variant="outlined" margin="normal" 
            value={name} onChange={(e) => setName(e.target.value)} required />
          <TextField fullWidth label="Email" type="email" variant="outlined" margin="normal" 
            value={email} onChange={(e) => setEmail(e.target.value)} required />
          <TextField fullWidth label="Password" type="password" variant="outlined" margin="normal" 
            value={password} onChange={(e) => setPassword(e.target.value)} required />
          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>Sign Up</Button>
        </form>
      </Box>
    </Container>
  );
};

export default Signup;
