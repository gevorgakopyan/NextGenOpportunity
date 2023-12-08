import { Box, Container, Grid, Typography } from '@mui/material';
import React, { Fragment, useEffect, useRef } from 'react';
import './Projects.css';
import YujiImg from './img/YujiImg.png'
import CarolynImg from './img/CarolynImg.JPEG'
import LjungImg from './img/LjungImg.jpg'
import RachelImg from './img/RachelImg.jpg'
import GevImg from './img/GevImg.jpg'
import Navbar from './Navbar';


function MeetTheTeam() {
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
      <Box textAlign={'center'}>
        <Typography variant='h5' sx={{color: '#046c75'}} mt={3}>
          Meet the Team
        </Typography>
        {/* <p style={{ marginBottom: '10vh', color: '#046c75'}}><center><h1>Meet the Team</h1></center></p> */}
        <Typography
              variant='body1'
              sx={{
                margin: '0.5rem auto',
                maxWidth: 'calc(min(90%, 850px))',
                textAlign: 'justify',
                color: 'black'
              }}
            >
              Meet the team behind NextGenOpportunity. We are five undergraduate students in the Fall 2023 Digital Humanities 101 course deeply interested in exploring educational disparities across the United States. Together, we built this website, specializing in our specific roles
        </Typography>
      </Box>
      <br/>
      {/* <center><p style={{ marginBottom: '10vh', color: '#046c75', width:'70%'}}><h2>Meet the team behind NextGenOpportunity. We are five undergraduate students in the Fall 2023 Digital Humanities 101 course deeply interested in exploring educational disparities across the United States. Together, we built this website, specializing in our specific roles</h2></p></center> */}
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
                    borderRadius: '50%',
                    width: 'calc(min(90vw, 250px))',
                    height: 'calc(min(90vw, 250px))',
                    aspectRatio: '1/1',
                    objectFit: 'cover',
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
              <Typography mt={{ xs: '0', sm: '30px', color: '#037e8c' }} mb={1} variant='h4'>
                {title}
              </Typography>
              <Typography variant='body2' mb={1} color='#05a1b3'>
                {skills}
              </Typography>
                {bullets.map((bullet) => (
                  <p>
                    <Typography variant='body2' mb={1} mt = {{color:'black', width:'75%'}}>
                        {bullet}
                    </Typography>
                  </p>
                ))}
            </Grid>
          </Fragment>
        ))}
      </Grid>
    </Container>
  );
}

const projects = [
  {
    img: RachelImg,
    title: 'Rachel Lei',
    skills: 'Role: Content developer',
    bullets: [
      'Rachel is a third year undergraduate majoring in Anthropology and minoring in Digital Humanities. As the content developer, she supervised the project’s narrative flow, integrating photos and visualizations with the site’s textual content.'
    ],
  },
  {
    img: CarolynImg,
    title: 'Carolyn Wang',
    skills: 'Role: Project Manager',
    bullets: [
      'Carolyn is a third year undergraduate studying Public Affairs and Statistics and Data Science at UCLA. As the project manager, she managed the project\'s schedule, deadlines, and milestones using Trello. Carolyn also managed the team’s shared Google Drive, ensured that communication among team members was harmonious, and communicated team needs externally.',
    ],
  },
  {
    img: YujiImg,
    title: 'Yuji Kusuyama',
    skills: 'Role: Data Manager',
    bullets: [
      'Yuji is a senior-year undergraduate majoring in Statistics and Data Science and minoring in Data Science Engineering. As the data manager, he is responsible for cleaning the data and managing the dataset. He also helped with data analysis and visualization to contribute to this project.',
    ],
  },
  {
    img: LjungImg,
    title: "Ijung Park",
    skills: 'Role: Data Visualisation Specialist',
    bullets: [
      'Ijung is a senior-year undergraduate majoring in Statistics and Data Science. As the data manager, he is responsible for managing the data set and visualizing the data using Tableau. He also helped with data cleaning and EDA to contribute to this project.'
    ],
  },
  {
    img: GevImg,
    title: "Gevorg Akopyan",
    skills: 'Role: Web Developer',
    bullets: [
      'Gevorg is a senior-year undergraduate majoring in Computer Science. As the web developer, Gevorg is in charge of building the website. He integrates all the different parts together to make it work as a whole, and he makes sure the website stays up-to-date and runs smoothly.'
    ],
  },
];

export default MeetTheTeam;
