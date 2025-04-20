import { useContext, useState } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { MessageContext } from "../../context/MessageContext";
import { Button, CardActions } from "@mui/material";

export default function TutorialCard({ tutorial, width }) {
  const parms = useParams();
  const navigate = useNavigate();
  const { isLogin } = useContext(UserContext);
  const { setErrorMsg } = useContext(MessageContext);
  const [expanded, setExpanded] = useState(false);
  const toggleReadMore = () => {
    setExpanded((prev) => !prev);
  };
  const descriptionlimit = 100;
  const titlelimit = 50;
  const isLongDescriptoin = tutorial.description.length > descriptionlimit;
  const isLongTitle = tutorial.title.length > titlelimit;
  const displayedDescription =
    expanded || !isLongDescriptoin
      ? tutorial.description
      : tutorial.description.substring(0, descriptionlimit) + "…";
  const displayedTitle =
    expanded || !isLongTitle
      ? tutorial.title
      : tutorial.title.substring(0, titlelimit) + "…";
  const handleOnTutorialClick = () => {
    if (!isLogin) return setErrorMsg("Please Login First");
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
      <CardActionArea onClick={handleOnTutorialClick}>
        <CardMedia
          component="img"
          height="170"
          image={tutorial.thumbnail}
          alt=""
        />
        <CardContent sx={{ width: "inherit" }}>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ whiteSpace: "wrap" }}
          >
            {displayedTitle}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary", whiteSpace: "collapse" }}
          >
            {displayedDescription}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {(isLongDescriptoin || isLongTitle) && (
          <Button onClick={toggleReadMore} size="small">
            {expanded ? "Read less" : "Read more"}
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
