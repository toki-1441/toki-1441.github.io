// src/components/layout/Header.jsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const Header = () => {
  return (
    // AppBar provides a standard top navigation bar.
    <AppBar position="static" sx={{ bgcolor: 'background.paper', boxShadow: 'none' }}>
      <Toolbar>
        {/* 'sx' prop is used for custom styling. 'flexGrow: 1' pushes items to the right. */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
        toki-1441
        </Typography>

        {/* Navigation links */}
        <Box>
          <Button color="inherit" href="#about">About</Button>
          <Button color="inherit" href="#projects">Projects</Button>
          <Button color="inherit" href="#contact">Contact</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;