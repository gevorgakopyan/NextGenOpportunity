import { Box, Container, Grid, Typography } from '@mui/material';
import React, { Fragment, useEffect, useRef } from 'react';
import './Projects.css';
import GregImg from './img/greg.png';
import Maze from './img/maze.png';
import RecGreg from './img/GameRecommendationEngineGreg.png';
import Greg from './img/RobotGreg.png'
import Navbar from './Navbar';

function Projects() {
  const fadeInDivs = useRef([]);

  const handleScroll = (intersections) => {
    fadeInDivs.current.forEach((div) => {
      if (
        div.getBoundingClientRect().top >=
        (window.innerHeight || document.documentElement.clientHeight)
      ) {
        div.classList.remove('visible');
      } else {
        div.classList.add('visible');
      }
    });
  };

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    setTimeout(() => {
      handleScroll();
    }, 100);
    fadeInDivs.current = document.querySelectorAll('.fade-in');

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container>
      <Navbar />
      <Grid container spacing={5} pb={3}>
        {projects.map(({ img, title, skills, bullets }) => (
          <Fragment key={title}>
            <Grid
              item
              xs={12}
              sm={5}
              mb={1}
              sx={{ textAlign: { xs: 'center', sm: 'right' } }}
              className='fade-in'
            >
              <Box
                sx={{
                  aspectRatio: '1 / 1',
                  maxWidth: { xs: 'none', sm: '325px' },
                  maxHeight: { xs: 'none', sm: '325px' },
                  display: 'flex',
                  paddingLeft: { xs: '0', sm: 'calc(100% - 325px)' },
                }}
              >
                <Box
                  component='img'
                  sx={{
                    height: 'auto',
                    width: '100%',
                    objectFit: 'contain',
                    backgroundColor: '#0f0f0f',
                  }}
                  src={img}
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={7}
              className='fade-in'
              sx={{ paddingTop: { xs: '5px !important', sm: 'auto' } }}
            >
              <Typography mt={{ xs: '0', sm: '30px' }} mb={1} variant='h4'>
                {title}
              </Typography>
              <Typography variant='body2' mb={1} color='secondary'>
                {skills}
              </Typography>
              <ul>
                {bullets.map((bullet) => (
                  <li key={bullet}>
                    <Typography variant='body2' mb={1}>
                      {bullet.startsWith('%link%') ? (
                        <a
                          href={bullet.split('%link%')[1]}
                          rel='noreferrer'
                          style={{ color: 'white' }}
                          target='_blank'
                        >
                          {bullet.split('%link%')[1]}
                        </a>
                      ) : (
                        bullet
                      )}
                    </Typography>
                  </li>
                ))}
              </ul>
            </Grid>
          </Fragment>
        ))}
      </Grid>
    </Container>
  );
}

const projects = [
  {
    img: GregImg,
    title: 'React Online Shader Workspace Greg',
    skills: 'WebGL, MongoDB, Express.js, Reacts.js, Node.js, CSS, JavaScript',
    bullets: [
      '%link%https://shadygreg.netlify.app',
      'Collaborated with 3 peers to construct an online, MERN-based platform for developing, sharing, and viewing GLSL shaders',
      'Developed secure sign-up via Bcrypt salting, and Google OAuth with JWT for an OpenGL shader website',
      'Adapted Code Mirror framework for OpenGL syntax highlighting in integrated code editor',
      'Devised a user project ‘liking’ system to rank and showcase top-rated projects',
    ],
  },
  {
    img: Greg,
    title: 'Interactive Pathfinder Simulator',
    skills: 'JavaScript, WebGL',
    bullets: [
      '%link%https://github.com/gevorgakopyan/Robot-Greg',
      'Led a team of 4 people to build a graphics application using JavaScript and WebGL API',
      'Implemented A* algorithm, enhancing pathfinding efficiency from initial point to final destination by reducing computation time by an average of 26% compared to DFS and BFS algorithms',
      'Defined API contracts for enemy, player, and game functionality to coordinate efficient team collaboration',
      'Applied an observer design pattern via C# events to synchronize rhythm-dependent enemy and player behavior',
      'Devised obstacle detection and applied texture mapping on different types of surfaces',
    ],
  },
  {
    img: RecGreg,
    title: 'Game Recommendation Engine Greg',
    skills: 'Python, C++',
    bullets: [
      '%link%https://github.com/gevorgakopyan/Greg-Game-Engine',
      'Developed a GUI application which provides game recommendations based on user ratings or Steam ID',
      'Engineered functionalities such as theme-changing, data retrieval through web requests, efficient data storage and manipulation using Python’s pickle and pandas moduless',
    ],
  },
  {
    img: Maze,
    title: "Multi-Level JavaFX Maze Game",
    skills: 'Java, JavaFX',
    bullets: [
      '%link%https://github.com/gevorgakopyan/Maze-Game',
      'Leveraged OOP concepts to incorporate MVC paradigm with collision detection between 7 distinct objects in a maze',
      'Collaborated with UX designers to create animated sprites and immersive audio experiences for gameplay',
      'Designed a level generation algorithm allowing for 5 unique mazes to challenge players',
    ],
  },
];

export default Projects;
