import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import ShareIcon from "@mui/icons-material/Share";

import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import paellaImage from "../assests/images/image1.jpg";
import burger from "../assests/images/image2.jpg";
import cat from "../assests/images/image3.jpg";
import coffe from "../assests/images/image4.jpg";

import girl from "../assests/images/image6.jpg";

export default function Post() {
  const posts = [
    {
      index: "1",
      avatar: "R",
      title: "Indian House",
      subheader: "January 14, 2025",
      src: paellaImage,
      description:
        "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
      color: "red",
    },
    {
      index: "2",
      avatar: "S",
      title: "Burgereto",
      subheader: "January 14, 2025",
      src: burger,
      description:
        "A classic burger that is juicy, delicious, and sure to satisfy your cravings. Pair it with fries for the ultimate meal.",
      color: "green",
    },
    {
      index: "3",
      avatar: "F",
      title: "Steven John",
      subheader: "January 14, 2025",
      src: cat,
      description: "My Cat Loves Her New Toy.",
      color: "blue",
    },
    {
      index: "4",
      avatar: "L",
      title: "Julia Roberts",
      subheader: "January 14, 2025",
      src: coffe,
      description: "Coffe is the best start for the day.",
      color: "grey",
    },

    {
      index: "7",
      avatar: "P",
      title: "Lucy Sam",
      subheader: "January 14, 2025",
      src: girl,
      description: "My girl love flowers so much.",
      color: "pink",
    },
  ];

  return (
    <>
      {posts.map((post) => (
        <Card key={post.index} sx={{ margin: 5 }}>
          <CardHeader
            avatar={<Avatar sx={{ bgcolor: post.color }}>{post.avatar}</Avatar>}
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={post.title}
            subheader={post.subheader}
          />
          <CardMedia
            component="img"
            height="20%"
            image={post.src}
            alt={post.title}
          />
          <CardContent>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {post.description}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite color="error" />}
              />
              <Checkbox
                icon={<BookmarkBorderIcon />}
                checkedIcon={<BookmarkIcon />}
              />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </>
  );
}
