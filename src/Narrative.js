import React from 'react';
import Navbar from './Navbar';
import { Box, Container, Typography } from '@mui/material';
// import TableauChart from './TableauChart';
//import Headshot from './img/headshot.jpg';

const Narrative = () => {
  return (
    <>
      <Navbar />
      <Container mt={0} sx={{ paddingBottom: '2rem' }}>
        <Box textAlign={'center'}>
          <Typography variant='h4' sx={{color: '#046c75'}} mt={3}>
            Introduction
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
            <p style={{textIndent: "25px"}}> Over 70 million children in the United States are growing up across a variety of communities shaped by distinct geographies and demographics. Depending on where and how they grow up, their likelihood of success in educational attainment, economic mobility, and general wellbeing will be vastly different. There are many markers of high child opportunity. Out of these, one of the most prominent includes quality education. Children from families who live in economically prosperous neighborhoods with access to resources tend to receive a larger academic advantage in the form of well-funded schools and enhanced support networks. However, could there be deeper nuances to what contributes to high educational opportunity in children? As income gaps widen and schools struggle in both rural and urban locales, the factors behind educational disparities deserve further examination. What patterns exist within the population levels and socioeconomic status of American children’s home regions, and how do they connect to educational opportunity?</p>
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
            <p style={{textIndent: "25px"}}>This is the question we investigate using the Child Opportunity Index. The Child Opportunity Index (COI), provided by the organization DiversityDataKids, aggregates data from 29 indicators of local child opportunity in the sectors of education, health, and socio-economic status. Specifically, we used the 2015 COI 2.0 Zip Code dataset.</p>
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
            <p style={{textIndent: "25px"}}>There is currently abundant research on differences in child opportunity across the urban and rural continuum. Our research examines disparities in education and socioeconomic status across higher and lower populated zip codes. This is useful for applying to our investigation into social spaces, as urban and rural designations are typically based on population levels, with urban zones having higher population levels and rural regions having lower populations. Many researchers argue that education levels are higher in urban areas. One study found that children, across different family characteristics and academic abilities who came from urban areas consistently chose to invest in their education when juxtaposed with children who were raised in rural environments (Van Maarseveen). However, the urban rural divide education is much more complicated than that, with some researchers finding that while child opportunity may be higher in urban areas compared to their rural counterparts, there are also greater inequities in child opportunity (Acevedo-Garcia, et al.). Scholarship further suggests that educational inequality cannot be simplified to the urban-rural binary and instead is much more connected to class differences with poverty being strongly linked to poor academic performance. Thus, as we explore differences in education between high and low populated areas, it is important for us to also examine variability within rural and urban areas as well as other domains such as socioeconomic status that may affect academic opportunity.</p>
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
            <p style={{textIndent: "25px"}}>Although educational gaps have been the subject of numerous past studies, our project specifically zero’s in on the relationship between socio spatial contexts and academic access. Educational opportunity continues to be influenced by a complex web of factors. While each community shares a need for providing children with quality education, their unique circumstances warrant customized solutions. Examining the patterns of educational access across geographies can call attention to previously overlooked areas of study, fostering a more nuanced and targeted approach to bridge gaps among children from different geographic landscapes. In the pursuit of a more equitable education system, further research may not only deepen our understanding of the dynamics at work in educational disparities but also provide a basis for developing tailored policies that better serve the communities they were created for. Ultimately, we aim to promote a more equitable landscape for the benefit of all children–and the future they create.</p>
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
            <p style={{textIndent: "25px"}}>In order to understand the next generation of children and their educational opportunities, it is essential to contextualize the state of modern day education. Before delving more deeply into present educational challenges and trends, here is a history of education in the United States.</p>
          </Typography>
          <iframe src='https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1q1IfgGh4DCZYuN8oVEW2K7qZJDANicngGTqKklf-uuE&font=Default&lang=en&initial_zoom=2&height=650' width='80%' height='650' webkitallowfullscreen mozallowfullscreen allowfullscreen frameborder='0' title='Public Education in The 21st Century'>Timeline</iframe> 
          <Typography variant='h4' sx={{color: '#046c75'}} mt={3}>
            Overview of Existing Literature
          </Typography>
          <Typography variant='h4' sx={{color: '#046c75'}} mt={3}>
            The Child Opportunity Index Nationwide
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default Narrative;
