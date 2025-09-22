// src/sections/About.jsx
import React from 'react';

// MUI Components
import { Container, Typography, Box, Grid, Chip, Stack } from '@mui/material';

// Third-party Libraries
import Tilt from 'react-parallax-tilt';
import { motion } from 'motion/react';

// Skill data
const skills = [
  'Python', 'PyTorch', 'CUDA', 'JavaScript', 'React', 'Node.js',
  'C++', 'ROS', 'Docker', 'Git', 'Linux'
];

const About = () => {
  // Define variants for staggered animation of child elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Delay between each child element's animation
        delayChildren: 0.2 // Initial delay before child animations start
      },
    },
  };

  // Define variants for individual item animation (slide up and fade in)
  const itemVariants = {
    hidden: { opacity: 0, y: 30 }, // Start slightly below and transparent
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }, // Slide to original position and opaque
  };

  return (
    // Outer motion.div for the entire section's animation
    <motion.div
      initial="hidden" // Initial state for the whole section
      whileInView="visible" // Animate when the section enters the viewport
      viewport={{ once: true, amount: 0.3 }} // Animate only once, when 30% of the section is visible
      variants={containerVariants} // Use containerVariants for staggered children
    >
      <Box id="about" sx={{ bgcolor: 'background.paper', py: 10 }}>
        <Container maxWidth="lg">
          <Grid container spacing={8} alignItems="center" justifyContent="center">
            
            {/* Left Column (Text Content) */}
            <Grid item xs={12} md={6}>
              {/* Each major text block gets its own motion.div with itemVariants */}
              <motion.div variants={itemVariants}>
                <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
                  About Me
                </Typography>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  「便利そう！」と思ったものを、とにかく作っています。
                  <br/>
                  💡 アイデアをすぐ形にすること
                  <br/>
                  🤖 LLMなど生成AIの可能性を探ること
                  <br/>
                  🎮 ゲームを作ること（目標）
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Typography variant="body1" component="div">
                  <b>経験:</b>
                  <br/>
                  自動運転AIchallenge2024 advancedクラスにて、チームで準優勝
                  <br/>
                  同時に広報賞も受賞
                </Typography>
              </motion.div>
            </Grid>

            {/* Right Column (Visuals) */}
            <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Stack direction="column" spacing={4} alignItems="center">
                {/* Profile Image with Tilt effect and motion animation */}
                <motion.div variants={itemVariants}>
                  <Tilt
                    glareEnable={true}
                    glareMaxOpacity={0.4}
                    glarePosition="all"
                    scale={1.05}
                  >
                    <Box
                      component="img"
                      src="/toki.png"
                      alt="Profile Picture"
                      sx={{
                        width: 280,
                        height: 280,
                        borderRadius: '50%',
                        objectFit: 'cover',
                        boxShadow: '0px 10px 40px rgba(48, 37, 89, 0.7)', 
                      }}
                    />
                  </Tilt>
                </motion.div>
                
                {/* Skills section with motion animation */}
                <motion.div variants={itemVariants} sx={{ width: '100%', maxWidth: 400 }}> {/* Ensure width for centering */}
                  <Box sx={{ 
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: 1,
                  }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2, width: '100%', textAlign: 'center' }}>
                      Skills
                    </Typography>
                    {skills.map((skill) => (
                      // Each Chip can also be animated individually for more granular control if desired
                      // For now, they animate as part of the parent Box
                      <Chip key={skill} label={skill} sx={{ bgcolor: 'primary.main', color: 'primary.contrastText' }}/>
                    ))}
                  </Box>
                </motion.div>
              </Stack>
            </Grid>

          </Grid>
        </Container>
      </Box>
    </motion.div>
  );
};

export default About;