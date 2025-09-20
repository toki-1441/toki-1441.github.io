// src/sections/Projects.jsx
import React from 'react';
import { Container, Typography, Grid, Card, CardMedia, CardContent, CardActions, Button, Chip, Box } from '@mui/material';
import { motion } from 'motion/react';
import { projectsData } from '../data/projects.js'; // データを外部ファイルからインポート

const Projects = () => {
  // アニメーションのバリアントを定義
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // 子要素を0.2秒ずつ遅延させて表示
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
        {/* タイトルにアニメーションを適用 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={itemVariants}
        >
          <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ fontWeight: 'bold', mb: 6 }}>
            Projects
          </Typography>
        </motion.div>

        {/* Gridコンテナに親バリアントを適用 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Grid container spacing={4}>
            {projectsData.map((project, index) => (
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
      </Container>
    </Box>
  );
};

export default Projects;