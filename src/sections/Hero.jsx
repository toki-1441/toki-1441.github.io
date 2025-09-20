// src/sections/Hero.jsx
import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { motion } from 'motion/react';
import ParticleBackground from '../components/common/ParticleBackground'; // Import the new background component

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh',
        textAlign: 'center',
        overflow: 'hidden',
        backgroundColor: '#100340', // Set the base dark background color
      }}
    >
      <ParticleBackground />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ position: 'relative', zIndex: 1 }} // Set zIndex to 1 to appear above the canvas
      >
        <Container maxWidth="md">
          <motion.div variants={itemVariants}>
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              sx={{ fontWeight: 700, color: 'primary.contrastText' }}
            >
              AI & Robotics Engineer
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography variant="h5" component="p" sx={{ mb: 4, color: '#A6A3BF' }}>
              From autonomous vehicles to interactive entertainment, I engineer the next generation of intelligent systems.
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Button variant="contained" color="primary" size="large" href="#projects">
              View My Work
            </Button>
          </motion.div>
        </Container>
      </motion.div>
    </Box>
  );
};

export default Hero;