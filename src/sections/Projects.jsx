// src/sections/Projects.jsx
import React from 'react';
import { Container, Typography, Grid, Card, CardMedia, CardContent, CardActions, Button, Chip, Box } from '@mui/material';
import { motion } from 'motion/react';
import { projectsData } from '../data/projects.js';

const Projects = () => {
  // データをステータス別に振り分ける
  const completedProjects = projectsData.filter(p => p.status === 'completed');
  const comingSoonProjects = projectsData.filter(p => p.status === 'coming_soon');

  // アニメーションのバリアントを定義
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <Box id="projects" sx={{ py: 8 }}>
      <Container maxWidth="lg">
        {/* --- 完成したプロジェクトのセクション --- */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariants}>
          <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ fontWeight: 'bold', mb: 6 }}>
            Projects
          </Typography>
        </motion.div>
        
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Grid container spacing={4}>
            {completedProjects.map((project, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <motion.div variants={itemVariants} style={{ height: '100%' }}>
                  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', bgcolor: 'background.paper' }}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={project.image}
                      alt={`${project.title} screenshot`}
                      sx={{ borderBottom: '1px solid #444' }}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h3" sx={{ fontWeight: 'bold' }}>
                        {project.title}
                      </Typography>
                      <Typography variant="body2" color="text.primary">
                        {project.description}
                      </Typography>
                      <Box sx={{ mt: 2 }}>
                        {project.tags.map((tag, i) => (
                          <Chip key={i} label={tag} variant="outlined" sx={{ mr: 1, mb: 1 }} />
                        ))}
                      </Box>
                    </CardContent>
                    <CardActions>
                      <Button size="small" href={project.githubUrl} target="_blank">GitHub</Button>
                      <Button size="small" href={project.liveUrl} target="_blank">Live Demo</Button>
                    </CardActions>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* --- Coming Soon セクション --- */}
        {comingSoonProjects.length > 0 && (
          <Box sx={{ mt: 10 }}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariants}>
              <Typography variant="h5" component="h3" gutterBottom align="center" sx={{ fontWeight: 'bold', mb: 6 }}>
                Future Goals
              </Typography>
            </motion.div>
            
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once:true }}>
              <Grid container spacing={4}>
                {comingSoonProjects.map((project, index) => (
                  <Grid item key={index} xs={12} sm={6} md={4}>
                    <motion.div variants={itemVariants} style={{ height: '100%' }}>
                      <Card sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        p: 3,
                        bgcolor: 'transparent',
                        border: '2px dashed',
                        borderColor: 'grey.700',
                        textAlign: 'center'
                      }}>
                        <Box>
                          <Typography variant="h6" component="p" sx={{ fontWeight: 'bold' }}>
                            {project.title}
                          </Typography>
                          <Typography variant="body2" sx={{ my: 2, color: 'text.secondary' }}>
                            {project.description}
                          </Typography>
                          <Box>
                            {project.tags.map(tag => <Chip key={tag} label={tag} variant="outlined" size="small" sx={{ mr: 0.5, mb: 0.5 }} />)}
                          </Box>
                          <Chip label="Coming Soon" color="secondary" size="small" sx={{ mt: 2 }} />
                        </Box>
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Projects;