// export const Card = () => {
//   <div className="wrappCard"></div>;
// };
// import CardMediaPicture from "../../../assets/booking.jpg";

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, CardHeader } from "@mui/material";

export default function ActionAreaCard({
  title,
  description,
  picture,
  gitHub,
  demo,
}) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        borderRadius: 3,
        boxShadow: "3px 3px 6px rgba(0, 0, 0, 0.07)",
      }}
    >
      <CardActionArea href={demo} target="_blank">
        <CardHeader title={title}></CardHeader>
        <CardMedia
          component="img"
          height="140"
          image={picture}
          alt="Card picture"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href={gitHub} target="_blank">
          Github
        </Button>
        <Button size="small" color="primary" href={demo} target="_blank">
          Demo
        </Button>
      </CardActions>
    </Card>
  );
}
