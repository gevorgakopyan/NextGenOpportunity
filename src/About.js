import React from 'react';
import Navbar from './Navbar';
import Logo from './img/logongo.png'
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
          <Box component="img" 
                 src= {Logo} 
                 alt="logo"
                 sx={{
                    maxWidth: '35%',
                    alignItems:'left',
                    height: '35%',
                    marginTop: '1rem',
                    marginBottom: '1rem'
                 }}
            />
          <Typography
            variant='body1'
            sx={{
              margin: '0.5rem auto',
              maxWidth: 'calc(min(90%, 850px))',
              textAlign: 'justify',
              color: 'black'
            }}
          >
            NextGenOpportunity is an undergraduate project created as part of UCLA's Introduction to Digital Humanities course (Digital Humanities 101). Using a publically-available database of their choosing, students applied computational methods to conduct humanistic inquiry on their database. The resulting narrative is presented in an engaging, interactive website.
          </Typography>
          <Typography
            variant='body1'
            sx={{
              margin: '0.5rem auto',
              maxWidth: 'calc(min(90%, 850px))',
              textAlign: 'justify',
              color: 'black'
            }}
          >
            This website, <a href="/">Next Gen Opportunity</a>, is our team's digital humanities project exploring the role of location and geography in shaping child education and opportunity across the United States.
          </Typography>
          <Typography variant='h5' sx={{color: '#046c75'}} mt={3}>
            Our Research Questions 
          </Typography>
          <Typography
            variant='body1'
            sx={{
              margin: '0.5rem auto',
              maxWidth: 'calc(min(90%, 850px))',
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
              maxWidth: 'calc(min(90%, 850px))',
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
              maxWidth: 'calc(min(90%, 850px))',
              textAlign: 'justify',
              color: 'black'
            }}
          >
            Our team used data from the <a href="https://data.diversitydatakids.org/dataset/coi20_zipcodes-child-opportunity-index-2-0-zip-code-data">2015 Child Opportunity Index (COI)</a> zip code dataset, provided by the organization DiversityDataKids.  The COI aggregates 29 indicators across education, social and economic, and health and environment sectors into one comprehensive score on a scale of 1 to 100 while also retaining the scores across each of the domains. In the case of our dataset, the COI scores as well as scores for each domain were estimated for each Zip Code area. 
          </Typography>
          <Typography
            variant='body1'
            sx={{
              margin: '0.5rem auto',
              maxWidth: 'calc(min(90%, 850px))',
              textAlign: 'justify',
              color: 'black'
            }}
          >
            The education domain of this dataset was our main point of focus. Specifically, we investigated the education scores in relation with high and low populated zip codes. To supplement our analysis, we collected relevant existing research covering education, child achievement, and family income gaps across different geographical spaces throughout the United States which illustrated the interdisciplinary nature of education in the United States. The secondary sources we used helped guide our data analysis and visualizations as they generally showed that there is a close connection between education, population, and socioeconomic status. Beyond these domains, we also examined the role of the health and environment sector in our research, and the role it plays in child opportunity. To learn more about the secondary sources we used, read our <a href="/bibliography"> Annotated bibliography.</a>
          </Typography>
          <Typography variant='h5' sx={{color: '#046c75'}} mt={3}>
            Processing
          </Typography>
          <Typography
            variant='body1'
            sx={{
              margin: '0.5rem auto',
              maxWidth: 'calc(min(90%, 850px))',
              textAlign: 'justify',
              color: 'black'
            }}
          >
            Once we downloaded our raw dataset, we set about getting to know and cleaning the data in R. In R, we searched for missing values and other inconsistencies in the data. We found that there were many missing values, over 20000, when it came to data collected on the metropolitan level. However, these missing values were unimportant as we wanted to explore differences in education by zip code, not by metropolitan area. Thus, we were lucky to not need to deal with much data cleaning in our dataset. In R, we also created a new categorical variable, high_low_pop, that designated each zip code in the original dataset as low or high population. high_low_pop can either be “high” or “low” and its designation depends on whether its population, indicated by the existing pop variable, fell lower or higher than the median value of the overall pop variable. This newly created variable was incredibly important for our analysis which compared education levels and socioeconomic levels across high and low populated zip codes. We then imported our dataset with the new high_low_pop variable into Tableau to create data visualizations including bar charts and maps. In Tableau, we edited names of variables to more intuitive labels to make the resulting data visualizations more straightforward for the viewer.
          </Typography>
          {/* <Typography
            variant='body1'
            sx={{
              margin: '0.5rem auto',
              maxWidth: 'calc(min(90%, 850px))',
              textAlign: 'justify',
              color: 'black'
            }}
          >
            We conducted our statistical analysis for the project in R and Python and created data visualizations in Tableau. 
          </Typography> */}
          <Typography variant='h5' sx={{color: '#046c75'}} mt={3}>
            Presentation 
          </Typography>
          <Typography
            variant='body1'
            sx={{
              margin: '0.5rem auto',
              maxWidth: 'calc(min(90%, 850px))',
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
              maxWidth: 'calc(min(90%, 850px))',
              textAlign: 'justify',
              color: 'black'
            }}
          >
            Special thanks to <b>Theresa Edwards</b> for her continued support on our project. We could not have created our final product without all of your feedback and guidance throughout the process. 
          </Typography>
          <Typography
            variant='body1'
            sx={{
              margin: '0.5rem auto',
              maxWidth: 'calc(min(90%, 850px))',
              textAlign: 'justify',
              color: 'black'
            }}
          >
            We would also like to thank <b>Dr. Wendy Perla Kertz</b> for sharing your passion and knowledge about the Digital Humanities and giving us the tools needed to succeed in this project!
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default About;
