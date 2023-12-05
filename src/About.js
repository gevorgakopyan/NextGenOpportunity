import React from 'react';
import Navbar from './Navbar';
import { Box, Container, Typography } from '@mui/material';

const About = () => {
  return (
    <>
      <Navbar />
      <Container mt={0} sx={{ paddingBottom: '2rem' }}>
        <Box textAlign={'center'}>
          <Typography variant='h4' sx={{color: '#046c75'}} mt={3}>
            About the Project
          </Typography>
          <Typography
            variant='body1'
            sx={{
              margin: '0.5rem auto',
              maxWidth: 'calc(min(90%, 550px))',
              textAlign: 'justify',
              color: 'black'
            }}
          >
            NextGenOpportunity is an undergraduate project created as part of UCLA’s Introduction to Digital Humanities course. Using a publically-available database of their choosing, students applied computational methods to conduct humanistic inquiry on their database.
            The resulting narrative is presented in an engaging, interactive website.
          </Typography>
          <Typography variant='h5' sx={{color: '#046c75'}} mt={3}>
            Our Research Questions 
          </Typography>
          <Typography
            variant='body1'
            sx={{
              margin: '0.5rem auto',
              maxWidth: 'calc(min(90%, 550px))',
              textAlign: 'justify',
              color: 'black'
            }}
          >
            1. What role do local population numbers play in children’s educational opportunities in the U.S.?
           </Typography>
           <Typography
            variant='body1'
            sx={{
              margin: '0.5rem auto',
              maxWidth: 'calc(min(90%, 550px))',
              textAlign: 'justify',
              color: 'black'
            }}
          >
            2. What patterns exist between income, education opportunity, and population?
          </Typography>
          <Typography variant='h5' sx={{color: '#046c75'}} mt={3}>
            Sources
          </Typography>
          <Typography
            variant='body1'
            sx={{
              margin: '0.5rem auto',
              maxWidth: 'calc(min(90%, 550px))',
              textAlign: 'justify',
              color: 'black'
            }}
          >
            Our team used data from the 2015 Child Opportunity Index (COI) zip code dataset, provided by the organization DiversityDataKids. The COI aggregates 29 indicators across education, social and economic, and health and environment sectors into one comprehensive score on a scale of 1 to 100. In the case of our dataset, the COI scores were estimated for each ZIP Code area. The education domain of this dataset was our main point of focus. Specifically, we investigated the education COI scores in relation with high and low populated zip codes. To supplement our analysis, we collected relevant existing research covering education, child achievement, and family income gaps across different geographical spaces throughout the United States.
          </Typography>
          <Typography variant='h5' sx={{color: '#046c75'}} mt={3}>
            Processing
          </Typography>
          <Typography
            variant='body1'
            sx={{
              margin: '0.5rem auto',
              maxWidth: 'calc(min(90%, 550px))',
              textAlign: 'justify',
              color: 'black'
            }}
          >
            Once we downloaded our raw dataset, we set about getting to know and cleaning the data in R. We found that there were many missing values when it came to data collected on the metropolitan level. However, these missing values were unimportant as we wanted to explore differences in education by zip code, not by metro. We also created a new categorical variable, high_low_pop, that designated each zip code as low or high population, depending on whether its population, indicated by the existing pop variable, fell lower or higher than the median value of the pop variable. This newly created variable was incredibly important for our analysis which compared education levels across high or low populated zip codes. 
          </Typography>
          <Typography
            variant='body1'
            sx={{
              margin: '0.5rem auto',
              maxWidth: 'calc(min(90%, 550px))',
              textAlign: 'justify',
              color: 'black'
            }}
          >
            We conducted our statistical analysis for the project in R and Python and created data visualizations in Tableau. 
          </Typography>
          <Typography variant='h5' sx={{color: '#046c75'}} mt={3}>
            Presentation 
          </Typography>
          <Typography
            variant='body1'
            sx={{
              margin: '0.5rem auto',
              maxWidth: 'calc(min(90%, 550px))',
              textAlign: 'justify',
              color: 'black'
            }}
          >
            This website, crafted using React and Material-UI (MUI), features an innovative and engaging interface centered around a 3D rotating cube. Each face of the cube represents a different page or section of the site, allowing users to navigate by simply rotating the cube. This interactive element adds a unique and visually appealing aspect to the user experience.
            Material-UI enhances this with its sleek, modern design elements, ensuring a visually appealing and consistent look across the site.
            All images, including those on the cube faces, have descriptive alt text, making the content accessible to screen reader users.
            he website's color scheme is designed with high contrast in mind, aiding visibility for users with visual impairments and ensuring compliance with standards.
          </Typography>
          <Typography variant='h5' sx={{color: '#046c75'}} mt={3}>
            Acknowledgements
          </Typography>
          <Typography
            variant='body1'
            sx={{
              margin: '0.5rem auto',
              maxWidth: 'calc(min(90%, 550px))',
              textAlign: 'justify',
              color: 'black'
            }}
          >
            Special thanks to Theresa Edwards for her continued support on our project. We could not have created our final product without all of your feedback and guidance throughout the process. 
          </Typography>
          <Typography
            variant='body1'
            sx={{
              margin: '0.5rem auto',
              maxWidth: 'calc(min(90%, 550px))',
              textAlign: 'justify',
              color: 'black'
            }}
          >
            We would also like to thank Dr. Wendy Perla Kertz for sharing your passion and knowledge about the Digital Humanities and giving us the tools needed to succeed in this project!
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default About;
