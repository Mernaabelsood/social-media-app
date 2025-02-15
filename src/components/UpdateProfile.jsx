
import React from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
  useTheme,
} from "@mui/material";

export default function UpdateProfile() {
  const theme = useTheme();
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");

  return (
    <Box
      flex={4}
      p={3}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      sx={{
        bgcolor: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
    >
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        Update Profile
      </Typography>

      <Box
        component="form"
        sx={{
          width: { xs: "90%", sm: "400px" },
          backgroundColor: theme.palette.background.paper, // Use theme color
          padding: 3,
          borderRadius: 2,
          boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <TextField
          label="Username"
          name="username"
          variant="outlined"
          size="medium"
          fullWidth
          onChange={(e) => setName(e.target.value)}
        />

        <TextField
          label="Email Address"
          name="email"
          type="email"
          variant="outlined"
          size="medium"
          fullWidth
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          label="Password"
          name="password"
          variant="outlined"
          size="medium"
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end"></IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Button type="submit" variant="contained" color="primary" fullWidth>
          Update
        </Button>
      </Box>
    </Box>
  );
}

