import React from "react";
import { Card, CardHeader, CardMedia, CardContent, Avatar, Typography, IconButton, Box } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useSelector } from "react-redux";
import cakeImage from "../assests/images/birthday.webp";
import coverImage from "../assests/images/cover.jpg";
import profileImage from "../assests/images/avatar.webp";

export default function Profile() {
    const name = useSelector(state=>state.user.name);
  return (
    <Box
      flex={4}
      p={5}
      >
    <Card sx={{ maxWidth: 400, margin: "auto", mt: 5, borderRadius: 3, boxShadow: 3 }}>
      <CardMedia
        component="img"
        height="150"
        image={coverImage}
        alt="Cover Image"
      />
      <CardHeader
        avatar={<Avatar sx={{ padding: 2, width: 80, height: 80 }} src={profileImage} />}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={<Typography variant="h6" sx={{ fontWeight: "bold" }}>{name}</Typography>}
        subheader={
          <Typography variant="body2" color="text.secondary">
            <LocationOnIcon fontSize="small" /> Paris, France
          </Typography>
        }
        sx={{ display: "flex", alignItems: "center", mt: -5, padding: 2 }}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          🌸 I love flowers, books, and soft jazz. Exploring new places and capturing memories. ✨
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        height="200"
        image={cakeImage}
        alt="Birthday Celebration"
        sx={{ borderRadius: 2, margin: 2 }}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          🎂 Celebrating my birthday with lots of love and laughter!
        </Typography>
        
      </CardContent>
    </Card>
    </Box>
  );
}
