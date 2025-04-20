import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../context/AdminContext";
import { Box, Grid2, Typography } from "@mui/material";
import UserDetailsCard from "./UserDetailsCard";

export default function AdminDashboardContainer() {
  const { users } = useContext(AdminContext);
  console.log(users);

  useEffect(() => {}, []);
  return (
    <Box>
      <Typography variant="h5">Users Progress</Typography>
      <Box>
        <Grid2 container sx={{ my: 2 }} spacing={2}>
          {users.map((user, index) => (
            <Grid2 key={index} size={{ xs: 12, md: 6 }}>
              <UserDetailsCard
                name={user.username}
                progress={"70"}
                selectedCareer={user.selectedCareer}
                enrolledTutorials={user.enrolledTutorials}
                key={1}
              />
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </Box>
  );
}
