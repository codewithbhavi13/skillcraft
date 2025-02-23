import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { useNavigate, useParams } from "react-router-dom";

export default function TutorialCard({ tutorial, width }) {
  const parms = useParams();
  const navigate = useNavigate();
  const handleOnTutorialClick = () => {
    const addToPath = tutorial.title.toLowerCase().replaceAll(" ", "-");
    if (parms.course) {
      navigate(addToPath);
    } else {
      navigate("/tutorial/" + addToPath);
    }
  };
  return (
    <Card
      sx={{
        width: width ? width : "auto",
        height: "100%",
        borderRadius: 3,
      }}
    >
      <CardActionArea
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
        onClick={handleOnTutorialClick}
      >
        <CardMedia
          component="img"
          height="170"
          image={tutorial.thumbnail}
          alt=""
        />
        <CardContent sx={{ width: "inherit" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ whiteSpace: "wrap" }}
          >
            {tutorial.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", whiteSpace: "normal" }}
          >
            {tutorial.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
