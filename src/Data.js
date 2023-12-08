import React from 'react';
import Navbar from './Navbar';
import Link from '@mui/material/Link';
import TableauChart from './TableauChart';
import { Box, Container, Typography, Button} from '@mui/material';
import datapic from './img/datapic.jpg'
import diversityKidsPic from './img/diversitykids.jpg'

const Data = () => {
  return (
    <>
      <Navbar />
      <Container mt={0} sx={{ paddingBottom: '2rem' }}>
        <Box textAlign={'center'}>
          <Typography variant='h4' sx={{color: '#046c75'}} mt={3}>
            Our Dataset: The Child Opportunity Index
          </Typography>
          <Link href="https://data.diversitydatakids.org/dataset/coi20_zipcodes-child-opportunity-index-2-0-zip-code-data" underline="none">
            <Button
                variant="contained"
                sx={{
                    marginTop: '2rem',
                    backgroundColor: '#046c75',
                    color: 'white',
                    '&:hover': {
                        backgroundColor: 'primary.dark',
                    },
                    padding: '10px 20px', // Increased padding for a bigger button
                    fontSize: '1.25rem',
                }}
                >
                    Explore The Complete Dataset
                </Button>
          </Link>
          <Typography variant='h5' sx={{color: '#046c75'}} mt={3}>
            About The Dataset 
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
            The base data for the COI 2.0 Zip Code dataset, the dataset we used to develop our project, is derived from census tract data gathered by the research organization, <b>Diversity Data Kids</b>. A census tract is a small, relatively permanent statistical subdivision of a county. Data was collected on each of these census tracts capturing the neighborhood’s resources and conditions that matter for children's healthy development.           
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
            This composite index was based on 29 indicators spanning 3 domains: <b>education, health and environment, and social and economic.</b> For each of the indicators, a score was generated for each child based on information from various other sources. For instance, the educational opportunity score consisted of the number of high quality early education centers within a five mile radius, the third grade reading and math proficiency scores, high school graduation rates, Advanced Placement and college enrollment trends, school poverty rates, and adult educational attainment. Then, these scores were averaged on the ZIP code level.          
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
            For each zip code, the dataset lists the population between 0 and 17, the estimated number of each demographic group, the weighted averages/standard deviations of the scores for each of the domains and the overall child opportunity levels, and a categorical measure of each domain as “Very High”, “High”,  “Moderate”, “Low,” or “Very Low”. The values of each of the domains and the overall child opportunity levels were standardized nationally, by state, and by metro so the researchers can examine these measures in regard to a more localized context or on a broader scale. This data may reveal differences in opportunities for children living across the United States and how a child’s zip code may determine a child’s future successes and challenges.
          </Typography>
          <Typography variant='h5' sx={{color: '#046c75'}} mt={3}>
            Who Created This Data?
          </Typography>
          <Box component="img" 
                 src= {diversityKidsPic} 
                 alt="Diversity Data"
                 sx={{
                    maxWidth: '50%',
                    alignItems:'left',
                    height: '50%',
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
            Image Credits: Diversity Data
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
            The organization behind the Child Opportunity Index, Diversity Data Kids, acknowledges on its website that it receives funding from the W.K. Kellogg Foundation and the Robert Wood Johnson Foundation. The W.K. Kellogg Foundation is a private foundation with the mission to support equity in opportunity for disadvantaged children. The Robert Wood Johnson Foundation, also a private foundation, is dedicated to advancing health equity. The mission of both foundations are aligned with the aim of Diversity Data Kids in creating the Child Opportunity Index. As stated on their webpage, the COI was created to “widen the national conversation about addressing inequality to include not only income and wealth but also the neighborhood environments that our children experience.” As such, it appears that equity is the unifying theme for both foundations and the organization. This search for equity may have driven the data collection process and the research done on the dataset. No other funding sources have been identified outside of these two.
          </Typography>
          <Typography variant='h5' sx={{color: '#046c75'}} mt={3}>
            Who Information is Left Out?
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
            After loading the dataset in R, we discovered that the dataset contains 23,867 missing values and empty spaces in the 'msaid15' and 'msaname15' columns (metro names and codes), and the last four columns which are the child opportunity index scores standardized by metro. However, it's important to note that these missing values should not be a major concern, as our analysis will primarily use zip codes for geographical dividers. Therefore, we can exclude the variables “msaid15” and “msname15, which represent cities where states live, and use only “zip” variable for separating the area.
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
                The dataset measures children’s opportunity by simplifying them into education, health and environmental, social and economic areas. However, by only considering these factors, one may be limited from exploring more complex cultural factors, family structures, and economic inequality.  Furthermore, datasets quantitatively measure and evaluate child opportunities, which can lead to a disregard for qualitative aspects. For example, descriptions of children’s dreams, goals, and achievements may be ignored when reducing the data collected to measurable numbers. Therefore, there may be a lack of more complex measures and qualitative aspects, which may limit our overall understanding of child opportunity. These limitations should be taken into account when using these datasets, analyzing their contents, and drawing comprehensive conclusions.
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
            Also, even in the same region, there can be sufficient socioeconomic differences within the region. For example, even in the same state of California, there are stark differences between cities such as tech-driven San Francisco and agricultural Bakersfield. Furthermore, there are differences between neighborhoods within cities, like between the upscale Beverly Hills and the lower income South Central area, both within Los Angeles. 
          </Typography>
          <Typography variant='h5' sx={{color: '#046c75'}} mt={3}>
            Separating Zip Codes into High and Low Population
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
            Because we were interested exploring differences between low and high populated areas in the United States, we created a new categorical variable, high_low_pop, that designated each zip code as low or high population, depending on whether its population, indicated by the existing pop variable, fell lower or higher than the median value of the pop variable. This newly created variable was helpful in comparing education levels across high or low populated zip codes. 
          </Typography>
          <Typography variant='h5' sx={{color: '#046c75'}} mt={3}>
            Focus On Education
          </Typography>
          <Box component="img" 
                 src= {datapic} // Replace with your image path
                 alt="Diversity Data"
                 sx={{
                    maxWidth: '90%',
                    alignItems:'left',
                    height: 'auto',
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
            Image Credits: Diversity Data
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
            Though our dataset focuses on child opportunity as a whole, we decided to make the focal point of our exploration child education because high quality education is strongly linked to social mobility and healthy child development. In America, people view education as intrinsically connected to the American dream, with hard work and a good education leading to a better life. However, the quality of education across our country is not equal. As you can see from the following visualization of our dataset, child education levels vary greatly in the United States.
          </Typography>
          <TableauChart url={"https://public.tableau.com/views/Datavizproject_17011575078090/MAP?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"} options={{hideTabs: false}}/>
          <Typography
            variant='body1'
            sx={{
              margin: '0.5rem auto',
              maxWidth: 'calc(min(90%, 850px))',
              textAlign: 'justify',
              color: 'black'
            }}
          >
            Our project seeks to uncover trends in child education and how they may differ between high populated, urban areas when compared to their low-populated, rural counterparts. However, this research question requires us to examine the field at large. Through investigating secondary sources, we also discovered that socioeconomic status is tied closely with education. Therefore, we also explored the relationship between the socioeconomic and education domains in the child opportunity index in our research to gain a full picture of child education in the United States. 
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default Data;
