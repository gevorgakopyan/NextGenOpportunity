import React from 'react';
import ResumeImg from './img/Resume.png';
import Navbar from './Navbar';
import { Box, Container, Link } from '@mui/material';

const Resume = () => {
  return (
    <>
      <Navbar />
      <Container sx={{ textAlign: 'center' }}>
        <Link
          href='https://drive.google.com/file/d/1C5T42fexhZ_YetqwXb2nn7ohVtELd-fr/view?usp=share_link'
          rel='noreferrer'
          target='_blank'
          download
        >
          <Box
            component='img'
            sx={{ height: 'calc(100vh - 100px)' }}
            src={ResumeImg}
            alt='Resume'
          />
        </Link>
      </Container>
    </>
  );
};

export default Resume;
