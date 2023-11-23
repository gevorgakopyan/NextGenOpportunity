import React from 'react';
import Navbar from './Navbar';
import { Box, Container, Typography } from '@mui/material';
import TableauChart from './TableauChart';
//import Headshot from './img/headshot.jpg';

const Narrative = () => {
  return (
    <>
      <Navbar />
      <Container mt={0} sx={{ paddingBottom: '2rem' }}>
        <Box textAlign={'center'}>
          {/* <Box
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
          /> */}
          <Typography variant='h4' sx={{color: 'gray'}} mt={3}>
            Data Critique
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
            The base data for the COI 2.0 Zip Code dataset is derived from census tract data gathered by the research organization, Diversity Data Kids, during the year of 2015. A census tract is a small, relatively permanent statistical subdivision of a county. Data was collected on each of these census tracts capturing the neighborhood’s resources and conditions that matter for children's healthy development. This composite index was based on 29 indicators spanning 3 domains: education, health and environment, and social and economic. Then, ZIP code level estimates were created for users who might have difficulties working with the census tract data. The organization reorganized and transitioned the data from the census tract level to the ZIP code level using weights provided by the U.S. Department for Housing and Urban Development. The weight is based on the proportion of residential addresses within a given ZIP code. For each zip code, the dataset lists the population between 0 and 17, the estimated number of each demographic group, the weighted averages/standard deviations of each of the domains, and overall child opportunity levels. The values of each of the domains and the overall child opportunity levels were standardized nationally, by state, and by metro so the researchers can examine these measures in regard to a more localized context or on a broader scale. This data may reveal differences in opportunities for children living across the United States and how a child’s zip code may determine a child’s future successes and challenges.

The organization behind the Child Opportunity Index, Diversity Data Kids, acknowledges on its website that it receives funding from the W.K. Kellogg Foundation and the Robert Wood Johnson Foundation. The W.K. Kellogg Foundation is a private foundation with the mission to support equity in opportunity for disadvantaged children. The Robert Wood Johnson Foundation, also a private foundation, is dedicated to advancing health equity. The mission of both foundations are aligned with the aim of Diversity Data Kids in creating the Child Opportunity Index. As stated on their webpage, the COI was created to “widen the national conversation about addressing inequality to include not only income and wealth but also the neighborhood environments that our children experience.” As such, it appears that equity is the unifying theme for both foundations and the organization. This search for equity may have driven the data collection process and the research done on the dataset. No other funding sources have been identified outside of these two.


After loading the dataset in R, we identified that the 2020 dataset, which sorts the data by the zipcodes defined in 2020, contains 23,871 missing values and empty spaces in the 'msaid15' and 'msaname15' columns (metro names and codes), and the last four columns which are the child opportunity index scores standardized by metro. Similarly, the 2019 dataset has 23,867 missing values, the 2018 dataset has 23,833, the 2017 dataset has 23,851, the 2016 dataset has 23,855, and the 2015 dataset has 23,867 missing values in the same columns. However, it's important to note that these missing values should not be a major concern, as our analysis will primarily use zip codes for geographical considerations.
The dataset measures childrens opportunity by simplifying them into education, health and environmental, social and economic areas. However, by only considering these factors, one may be limited from exploring more complex cultural factors, family structures, and economic inequality.  Furthermore, datasets quantitatively measure and evaluate child opportunities, which can lead to a disregard for qualitative aspects. For example, descriptions of children’s dreams, goals, and achievements may be ignored when reducing the data collected to measurable numbers. Therefore, there may be a lack of more complex measures and qualitative aspects, which may limit the overall understanding and analysis of child opportunity. These limitations should be taken into account when using these datasets, analyzing their contents, and drawing comprehensive conclusions.
Also, even in the same region, there can be sufficient socioeconomic differences within the region. For example, even in the same state of California, there are definitely differences between cities, and there are economic and social differences between neighborhoods within cities. So, we think we can exclude “msaid15” and “msname15” variables, which represent cities where states live, and use only “zip” variable for separating the area to best capture differences in child opportunity across geographical region.

          </Typography>
          <TableauChart url={"https://public.tableau.com/shared/D2SXNY49M?:display_count=n&:origin=viz_share_link"} options={{hideTabs: false}}/>
          <Typography
            variant='body1'
            sx={{
              margin: '0.5rem auto',
              maxWidth: 'calc(min(90%, 550px))',
              fontWeight: 'bold',
              textAlign: 'justify',
            }}
          >
            {/* I am seeking a full-time Software Engineering position for a new graduate where I can further contribute, learn, and grow. */}
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default Narrative;
