// src/App.jsx
import React from 'react';
import { Box, Container } from '@mui/material';
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx'; // Import Footer
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Projects from './sections/Projects.jsx';
import Contact from './sections/Contact.jsx'; // Import Contact

function App() {
  return (
    // Set a minHeight to ensure the footer stays at the bottom on short pages
    <Box sx={{ bgcolor: 'background.default', color: 'text.primary', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      {/* Set main to grow and fill available space */}
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Container maxWidth="lg">
            <Hero />
            <About />
            <Projects />
            <Contact />
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;