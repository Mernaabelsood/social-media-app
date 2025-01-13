import {
  Avatar,
  Box,
  Button,
  Fab,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import ImageIcon from "@mui/icons-material/Image";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
export default function Add() {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Add"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={280}
          p={3}
          borderRadius={5}
          sx={{ bgcolor: "background.default", color: "text.primary" }}
        >
         
          <Typography variant="h6" color="gray" textAlign={"center"}>
            Create A New Post
          </Typography>
          <Box marginTop={2} display={"flex"} alignItems={"center"} gap={1}>
            <Avatar sx={{ width: 30, height: 30 }} />
            <Typography>John Doe</Typography>
          </Box>
          <TextField
            sx={{ width: "100%" }}
            margin="normal"
            placeholder="What's on your mind?"
            multiline
            minRows={5}
          />
          <Box display={"flex"} justifyContent={"space-between"}>
            <Stack direction={"row"} gap={1} mt={1}>
              <EmojiEmotionsIcon color="primary" />
              <ImageIcon color="secondary" />
              <VideoCameraBackIcon color="success" />
              <PersonAddIcon color="error" />
            </Stack>
            <Button variant="contained" color="primary">
              Post
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
