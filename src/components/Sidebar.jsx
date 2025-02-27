import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import LayersIcon from "@mui/icons-material/Layers";
import GroupIcon from "@mui/icons-material/Group";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import Switch from "@mui/material/Switch";

import ModeNightIcon from "@mui/icons-material/ModeNight";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { HomeMaxTwoTone, HomeRepairService, HomeRepairServiceRounded } from "@mui/icons-material";

export default function Sidebar({ mode, setMode }) {
  const name = useSelector(state=>state.user.name);

  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position={"fixed"}>
        <List sx={{ display: "flex", flexDirection: "column" }}>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
  <ListItemButton component={Link} to="/feed">
    <ListItemIcon>
      <HomeIcon />
    </ListItemIcon>
    <ListItemText primary="Home" />
  </ListItemButton>
</ListItem>
          <ListItem disablePadding>
  <ListItemButton component={Link} to="/update-profile">
    <ListItemIcon>
      <SettingsIcon />
    </ListItemIcon>
    <ListItemText primary="Update Profile" />
  </ListItemButton>
</ListItem>
       
<ListItem disablePadding>
  <ListItemButton component={Link} to="/profile">
    <ListItemIcon>
    <AccountBoxIcon />
    </ListItemIcon>
    <ListItemText  primary={`${name} profile`} />
  </ListItemButton>
</ListItem>
         
      
         
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ModeNightIcon />
              </ListItemIcon>
              <Switch
                onChange={(e) => setMode(mode === "light" ? "dark" : "light")}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}
