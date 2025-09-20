// src/components/layout/Footer.jsx
import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto', // Push footer to the bottom
        bgcolor: 'background.paper',
        borderTop: '1px solid #444'
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body2" color="text.secondary" align="center">
          {'© '}
          {new Date().getFullYear()}
          {' toki-1441. All Rights Reserved.'}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;