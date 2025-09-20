// src/sections/Contact.jsx
import React from 'react';
import { Container, Typography, Box, Button, Stack } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email'; // Using MUI icons for a polished look
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Contact = () => {
  return (
    <Box id="contact" sx={{ py: 8 }}>
      <Container maxWidth="sm">
        <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ fontWeight: 'bold' }}>
          Contact
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 4 }}>
          お気軽にご連絡ください。以下のリンクからコンタクトが可能です。/ Feel free to reach out to me through the link below.
        </Typography>
        {/* Stack component is great for arranging items in a column or row */}
        <Stack direction="column" spacing={2} alignItems="center">
          <Button
            variant="outlined"
            startIcon={<EmailIcon />}
            href="mailto:raicakn729@gmail.com" // --- Replace with your email ---
            sx={{ minWidth: '250px' }}
          >
            Send an Email
          </Button>
          <Button
            variant="outlined"
            startIcon={<GitHubIcon />}
            href="https://github.com/toki-1441" // --- Replace with your GitHub URL ---
            target="_blank"
            rel="noopener noreferrer"
            sx={{ minWidth: '250px' }}
          >
            GitHub Profile
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default Contact;