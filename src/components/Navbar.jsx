import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import PetsIcon from "@mui/icons-material/Pets";
import MailIcon from "@mui/icons-material/Mail";

import NotificationsIcon from "@mui/icons-material/Notifications";
import { useSelector } from "react-redux";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  const name = useSelector(state=>state.user.name);
  return (
    <AppBar position="fixed">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          MY APP
        </Typography>
        <PetsIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Box
          sx={{
            backgroundColor: "white",
            padding: "0 10px",
            borderRadius: "10px",
          }}
        >
          <InputBase placeholder="search..." />
        </Box>
        <Box display="flex" justifyContent="flex-end" gap={2}>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={4} color="error">
            <NotificationsIcon />
          </Badge>
          <Box display="flex" alignItems="center" gap={1}>
            <Avatar
              sx={{ width: 30, height: 30 }}
              alt="Merna"
              src="/static/images/avatar/1.jpg"
              onClick={(e) => setOpen(true)}
            />
            <Typography>{name}</Typography>
          </Box>
        </Box>
      </Toolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}
