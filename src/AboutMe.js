import React from 'react';
import Navbar from './Navbar';
import { Box, Container, Typography } from '@mui/material';
import Headshot from './img/headshot.jpg';

const AboutMe = () => {
  return (
    <>
      <Navbar />
      <Container mt={0} sx={{ paddingBottom: '2rem' }}>
        <Box textAlign={'center'}>
          <Box
            component='img'
            src={Headshot}
            alt='headshot'
            className='my-picture'
            sx={{
              borderRadius: '100%',
              width: 'calc(min(90vw, 400px))',
              height: 'calc(min(90vw, 400px))',
              aspectRatio: '1/1',
              objectFit: 'cover',
            }}
          />
          <Typography variant='h4' mt={3}>
            Gevorg Akopyan
          </Typography>
          <Typography
            variant='body1'
            sx={{
              margin: '0.5rem auto',
              maxWidth: 'calc(min(90%, 550px))',
              textAlign: 'justify',
            }}
          >
            I am a rising senior at UCLA with a genuine passion for software engineering and technology. Throughout my academic journey, I have tested my skills in a diverse range of computer science topics, ensuring a broad yet profound understanding of the field.
            Through my internship experiences, I have had the opportunity to translate theoretical knowledge into practical solutions, working collaboratively in fast-paced environments. 
          </Typography>

          <Typography
            variant='body1'
            sx={{
              margin: '0.5rem auto',
              maxWidth: 'calc(min(90%, 550px))',
              fontWeight: 'bold',
              textAlign: 'justify',
            }}
          >
            I am seeking a full-time Software Engineering position for a new graduate where I can further contribute, learn, and grow.
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default AboutMe;
