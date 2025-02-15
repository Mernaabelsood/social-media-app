


import { createTheme, Stack, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Box from "@mui/material/Box";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Add from "./components/Add";
import UpdateProfile from "./components/UpdateProfile"; 
import { useState } from "react";

function App() {
  const [name, setName] = useState('');
  const [mode, setMode] = useState('light');

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Router> 
        <Box sx={{ bgcolor: 'background.default', color: 'text.primary' }}>
          <Navbar name={name} />
          <Stack direction="row" spacing={2} justifyContent={"space-between"}>
            <Sidebar setMode={setMode} mode={mode} />
            
            <Routes>
              <Route path="/update-profile" element={<UpdateProfile />} />
              <Route path="/*" element={<Feed />} /> 
            </Routes>

            <Rightbar />
          </Stack>
          <Add />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
