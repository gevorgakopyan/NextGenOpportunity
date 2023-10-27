import { Box, Container, Grid, Typography } from '@mui/material';
import React, { Fragment, useEffect, useRef } from 'react';
import './Projects.css';
import Navbar from './Navbar';
import './Experience.css';
import GAGALogo from './img/Logo-GAGA-US.png'
import AmazonLogo from './img/amazon.jpeg';
import GCC from './img/LearningCenter.jpeg';

function Experience() {
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
        {experiences.map(({ img, title, position, duration, bullets }) => (
          <Fragment key={duration}>
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
                    backgroundColor: 'white',
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
              <Box
                sx={{ display: 'flex', justifyContent: 'left', gap: '0.8rem' }}
              >
                <Typography variant='body2' mb={1} color='secondary'>
                  {position}
                </Typography>
                <hr
                  style={{
                    width: '1.2rem',
                    border: 'none',
                    borderTop: '1px solid #a0a0a0',
                    margin: '10px 0',
                  }}
                />
                <Typography variant='body2' color='secondary'>
                  {duration}
                </Typography>
              </Box>
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

const experiences = [
  {
    img: AmazonLogo,
    title: 'Amazon Prime Air',
    position: 'Software Dev Intern',
    duration: 'Jun 2023 - Sep 2023',
    bullets: [
      'Constructed a full-stack customer-facing mobile application for 150+ associates',
      'Incorporated an Amazon internal authentication system to ensure product’s security and privacy using AWS services',
      'Leveraged phone camera to set up bar code scanner to accelerate workflow process',
      'Conceptualized the complete design of the project, and spearheaded the development of an end-to-end pipeline',
      'Initiated meetings with product and business teams to determine short-term and long-term project goals',
    ],
  },
  {
    img: AmazonLogo,
    title: 'Amazon Alexa',
    position: 'Software Dev Intern',
    duration: 'Jun 2022 - Sep 2022',
    bullets: [
      'Constructed 2 end-to-end Android mobile components using React Native and internal tools for Alexa users',
      'Collaborated with engineering and design teams to come up with final product design for bottom sheet component',
      'Engineered multi-functional custom React components with scrolling functionalities to enhance user experience',
      'Implemented 4 back-end APIs to generate, map, and distribute payload schema correctly',
    ],
  },
  {
    img: GAGALogo,
    title: 'GAGA US Construction',
    position: 'Software Developer',
    duration: 'June 2021 - Present',
    bullets: [
      '%link%https://gagaconstruction.com/',
      'Built an optimized website for a construction firm, increasing click-to-lead conversion rate by 25%',
      'Created SEO campaign to receive and integrate 200+ keywords, improving website’s visibility by 40%',
      'Designed and sustained 4 distinct landing pages, dynamically fetching real-time data sourced from MySQL database',
    ],
  },
  {
    img: GCC,
    title: 'Glendale Community College Learning Center',
    position: 'STEM Tutor',
    duration: 'Sep 2019 - Aug 2021',
    bullets: [
      'Mentored coursework preparation for 50+ students by generating detailed, personalized performance reports',
      'Optimized student experiences by adding adaptive learning platforms, resulting in 9% increase in course completion rate',
    ],
  },
];
export default Experience;
