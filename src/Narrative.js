import React, {useState, useRef, useEffect} from 'react';
import Navbar from './Navbar';
import { Container, Box, Tabs, Tab, Typography, Link, Button }  from '@mui/material';
import TableauChart from './TableauChart';
import Inequality from './img/inequality.jpg';
import n2 from './img/narrative2.jpg';
import n3 from './img/narrative3.jpg';
import nar1 from './img/nar1.jpg';
import nar2 from './img/nar2.jpeg';
import nar3 from './img/nar3.jpg';
// import nar4 from './img/nar4.jpeg';
import nar5 from './img/nar5.jpeg';
// import nar6 from './img/nar6.jpg';
import nar7 from './img/nar7.jpeg';
import nar8 from './img/nar8.jpg';


import './Fade.css';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


const Narrative = () => {
  const fadeInDivs = useRef([]);
    
    const handleScroll = () => {
        fadeInDivs.current.forEach((div) => {
        if (
            div.getBoundingClientRect().top <=
            (window.innerHeight || document.documentElement.clientHeight)
        ) {
            div.classList.add('visible');
        } else {
            div.classList.remove('visible');
        }
        });
    };
    
    useEffect(() => {
        document.addEventListener('scroll', handleScroll);
        setTimeout(() => {
        handleScroll();
        }, 100);
        return () => {
            document.removeEventListener('scroll', handleScroll);
          };
        }, []);
  const [value, setValue] = useState(0); // State to track the active tab

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Navbar />
      <Container mt={0} sx={{ paddingBottom: '2rem' }}>
        <Box textAlign={'center'}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered
              sx={{
                '.MuiTabs-indicator': {
                  backgroundColor: 'primary.main',
                },
                '.MuiTab-root': {
                  color: 'black', // Change color of the tabs
                  '&.Mui-selected': {
                    color: '#046c75', // Change color when tab is selected
                  },
                }
              }}>
              <Tab label="Introduction" />
              <Tab label="Background" sx={{paddingLeft: '50px'}} />
              <Tab label="Population & Education" sx={{paddingLeft: '50px'}} />
              <Tab label="Socioeconomic Status & Education" sx={{paddingLeft: '50px'}} />
              <Tab label="Conclusion" sx={{paddingLeft: '50px'}}/>
              {/* Add more tabs as needed */}
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            
          <Typography variant='h4' sx={{fontFamily: 'Georgia', color: '#046c75'}} mt={3}>
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
            <p style={{textIndent: "25px"}}>
            Over 70 million children in the United States are growing up across a variety of communities shaped by distinct geographies and demographics. Depending on where and how they grow up, their likelihood of success in educational attainment, economic mobility, and general wellbeing will be vastly different. There are many markers of high child opportunity. Out of these, one of the most prominent includes quality education. Children from families who live in economically prosperous neighborhoods with access to resources tend to receive a larger academic advantage in the form of well-funded schools and enhanced support networks. However, could there be deeper nuances to what contributes to high educational opportunity in children? As income gaps widen and schools struggle in both rural and urban locales, the factors behind educational disparities deserve further examination. <i>What patterns exist within the population levels and socioeconomic status of American children’s home regions, and how do they connect to educational opportunity? </i>
            </p>
          </Typography>
          <Box component="img" 
                 src= {Inequality} 
                 alt="Diversity Data"
                 sx={{
                    maxWidth: '40%',
                    alignItems:'left',
                    height: '40%',
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
            <p style={{textIndent: "25px"}}>
              Image Credit: Forbes
            </p>
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
            <p style={{textIndent: "25px"}}>
              This is the question we investigate using the Child Opportunity Index. The Child Opportunity Index (COI), provided by the organization DiversityDataKids, aggregates data from 29 indicators of local child opportunity in the sectors of education, health, and socio-economic status. Specifically, we used the 2015 COI 2.0 Zip Code dataset, which estimates the COI score for each ZIP code based on the census tracts used in the original COI calculations.
            </p>
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
            <p style={{textIndent: "25px"}}>
            There is currently abundant research on differences in child opportunity across the urban and rural continuum. Our research examines disparities in education and socioeconomic status across higher and lower populated zip codes. This is useful for applying to our investigation into social spaces, as urban and rural designations are typically based on population levels, with urban zones having higher population levels and rural regions having lower populations. Many researchers argue that education levels are higher in urban areas. One study found that children, across different family characteristics and academic abilities who came from urban areas consistently chose to invest in their education when juxtaposed with children who were raised in rural environments <a target="_blank" rel="noopener noreferrer" href='https://doi.org/10.1093/jeg/lbaa033'>(Van Maarseveen). </a>
            </p>
          </Typography>
          <Box component="img" 
                 src= {nar1} 
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
            <p style={{textIndent: "25px"}}>
              Image Credit: Diversity Kids Data
            </p>
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
            <p style={{textIndent: "25px"}}>
            However, the urban rural divide education is much more complicated than that, with some researchers finding that while child opportunity may be higher in urban areas compared to their rural counterparts, there are also greater inequities in child opportunity <a target="_blank" rel="noopener noreferrer" href='https://doi.org/10.1377/hlthaff.2020.00735'>(Acevedo-Garcia, et al.)</a>. Scholarship further suggests that educational inequality cannot be simplified to the urban-rural binary and instead is much more connected to class differences with poverty being strongly linked to poor academic performance. Thus, as we explore differences in education between high and low populated areas, it is important for us to also examine variability within rural and urban areas as well as other domains such as socioeconomic status that may affect academic opportunity.
            </p>
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
            <p style={{textIndent: "25px"}}>
            In order to understand the next generation of children and their educational opportunities, it is essential to contextualize the state of modern day education. Before delving more deeply into current educational challenges and trends, here is a history of education in the United States.
            </p>
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
            <p style={{textIndent: "25px"}}>
            In order to understand the next generation of children and their educational opportunities, it is essential to contextualize the state of modern day education. Before delving more deeply into present educational challenges and trends, here is a history of education in the United States.
            </p>
          </Typography>
          <iframe src='https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1q1IfgGh4DCZYuN8oVEW2K7qZJDANicngGTqKklf-uuE&font=Default&lang=en&initial_zoom=2&height=650' width='80%' height='650' webkitallowFullScreen mozallowFullScreen allowFullScreen frameBorder='0' title='Public Education in The 21st Century'>Timeline</iframe> 
          </TabPanel>
          <TabPanel value={value} index={1}>
          <Typography variant='h4' sx={{fontFamily: 'Georgia', color: '#046c75'}} mt={3}>
            Overview of Existing Literature
          </Typography>
          <Box component="img" 
                 src= {n3} 
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
            <p style={{textIndent: "25px"}}>
              Image Credit: IStock
            </p>
          </Typography>
          <Typography variant='h5' sx={{fontFamily: 'Georgia', color: '#046c75'}} mt={3}>
            Traditional Views: The Rural-Urban Binary
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
            <p style={{textIndent: "25px"}}>
            Urban and rural areas are usually viewed as fundamentally distinct. This perspective is prevalent in many scholarly discussions when it comes to education. Traditionally, inequities have often been viewed to be concentrated in urban areas. Indeed, it does appear that urban areas tend to house large opportunity disparities for children. In a study investigating racial and ethnic inequities with information from the Child Opportunity Index 2.0, it was observed that 97% variation in child opportunity found in urban areas, and “[i]n more than one-third of metropolitan areas, the gap between their very high- and very low-opportunity neighborhoods is larger than the gap across the entire national neighborhood distribution”  <a target="_blank" rel="noopener noreferrer" href='https://doi.org/10.1377/hlthaff.2020.00735'>(Acevedo-Garcia, et al. 6).</a> Rural areas come with their own disadvantages. A study comparing urban and rural children in the Dutch school system found that “children who grow up in urban areas consistently choose to invest more in their education compared with children who grow up in more rural environments” and that “[c]hildren in rural communities do not seem to enjoy or take the same educational opportunities as children who grow up in urban communities, even in a country such as the Netherlands where the rural areas are relatively accessible from an international perspective”  <a target="_blank" rel="noopener noreferrer" href='https://doi.org/10.1093/jeg/lbaa033'>(Van Maarseveen 23).</a> This reflects the more remote nature of rural communities. With lower proximity to resources and networks, children growing up in rural areas may be less likely to pursue opportunities that are difficult to access. 
            </p>
          </Typography>
          <Box component="img" 
                 src= {nar2} 
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
            <p style={{textIndent: "25px"}}>
              Image Credit: Gavin Hellier / AWL Images
            </p>
          </Typography>
          <Box component="img" 
                 src= {nar3} 
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
            <p style={{textIndent: "25px"}}>
              Image Credit: Tony Webster / Wikimedia Commons
            </p>
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
            <p style={{textIndent: "25px"}}>
            However, it has been acknowledged that there is a “definitional messiness” to the terms “rural” and “urban” <a target="_blank" rel="noopener noreferrer" href='https://doi.org/10.1080/0161956X.2017.1324662'>(Tieken 2)</a>, and researchers have called out the tendency to interpret geographical spaces on too much of an urban-rural binary. Definitions for urban-rural categories can vary immensely, and many neighborhoods in the U.S. fall into categories that are not neatly urban or rural. This has been investigated in literature such as the article “Schools at the Rural-Urban Boundary: Blurring the Divide?”, where school districts were analyzed with categories that acknowledged deeper nuances in the spectrum between rural and urban, with labels of “inner, middle, and outer” for suburban districts based on their proximity to an urban boundary, as well as spaces separated into “small and large” urban spaces. The study revealed that “it is a relatively narrow band of schools in the middle suburbs that are the most advantaged in terms of demographics and resources” <a target="_blank" rel="noopener noreferrer" href='https://doi.org/10.1177/0002716217707176'>(Burdick-Will and Logan 15)</a>, indicating that child opportunity is not evenly high in all areas that fall under the broad “suburban” label. Suburban districts bordering rural districts, or “outer suburbs,” were very similar in characteristics to their rural counterparts, and urban and rural public schools were found to experience notably comparable levels of economic disadvantage, low achievement and instructional salaries per student  <a target="_blank" rel="noopener noreferrer" href='https://doi.org/10.1177/0002716217707176'>(Burdick-Will and Logan 15).</a> Despite these similarities, impoverished districts in urban and rural zones have often found themselves competing for resources, as policy discussions have focused on either one or the other, emphasizing the opposing nature of the two geographies <a target="_blank" rel="noopener noreferrer" href='https://doi.org/10.1080/0161956X.2017.1324662'>(Tieken 2)</a>.
            </p>
          </Typography>
          {/* <Box component="img" 
                 src= {nar4} 
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
            <p style={{textIndent: "25px"}}>
              Image Credit: LancerE / Flickr
            </p>
          </Typography> */}
          <Typography variant='h5' sx={{fontFamily: 'Georgia', color: '#046c75'}} mt={3}>
            Income, Achievement, and Geographies: Socioeconomic Trends
          </Typography>
          <Box component="img" 
                 src= {nar5} 
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
            <p style={{textIndent: "25px"}}>
              Image Credit: Michael Thomas 2014
            </p>
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
            <p style={{textIndent: "25px"}}>
              When it comes to educational opportunity, socioeconomic status often appears in scholarly discussion. This makes sense, especially considering that high socioeconomic status was deemed most important for educational achievement, albeit with variations across demographics such as between European American and African American children <a target="_blank" rel="noopener noreferrer" href='https://doi.org/10.1037/0033-2909.126.2.309'>(Leventhal and Brooks-Gunn 20).</a> Trends in socioeconomic status, particularly through income, have been tracked across geographical spaces. Research found income inequality to be rising across the nation. In a study that used data from the Decennial Census and American Community Survey to investigate within-country income equality, it was found that nearly all counties–both metropolitan and nonmetropolitan–rose from low inequality to either moderate or high inequality from 1970 to 2016. High rates of inequality persistence were also exhibited, with over 90% of counties designated as having moderate inequality in 1970 remain classified as such in 2016 <a target="_blank" rel="noopener noreferrer" href='https://doi.org/10.1111/ruso.12354'>(Thiede 22).</a> These aforementioned trends were seen across different spaces with varying population densities. There were some distinctions, however, as within-county income inequality was observed to be converging between metropolitan and non-metropolitan counties, not due to falling inequality, but instead because of a rising trend in income inequality in the metropolitan counties <a target="_blank" rel="noopener noreferrer" href='https://doi.org/10.1111/ruso.12354'>(Thiede 28).</a> It should be noted that a few areas such as the Great Plains even experienced falling income inequality that ran contrary to the nationwide trend towards rising inequality <a target="_blank" rel="noopener noreferrer" href='https://doi.org/10.1111/ruso.12354'>(Thiede 27-28).</a> The causes behind these income trends are also a subject of study. A similar study on income inequality across rural and urban spaces from 1975 to 2015 argued that rising national income inequality is not driven by a growing gap between rural and urban areas but rather rising income inequality in both urban and rural areas <a target="_blank" rel="noopener noreferrer" href='https://onlinelibrary.wiley.com/doi/abs/10.1111/ruso.12295'>(Hertz and Silva 25).</a> This may fall under the previously noted trend of rural and metropolitan public schools experiencing comparable difficulties in both economic advancement and academic achievement.
            </p>
          </Typography>
          {/* <Box component="img" 
                 src= {nar6} 
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
            <p style={{textIndent: "25px"}}>
              Image Credit: Davel5957 / Getty Images
            </p>
          </Typography> */}
          <Typography
            variant='body1'
            sx={{
              margin: '0.5rem auto',
              maxWidth: 'calc(min(90%, 850px))',
              textAlign: 'justify',
              color: 'black'
            }}
          >
            <p style={{textIndent: "25px"}}>
            These documented trends are important when we connect them to research involving the relationship between income and education. Children growing up in poverty face increased struggles in academic performance. Kindergarteners from low-income households receive scores that are around 0.70 standard deviations lower than their high-income peers in reading, language, and math, which develop into disparities in employment and earnings in adulthood <a target="_blank" rel="noopener noreferrer" href='https://doi.org/10.1111/cdep.12152'>(Votruba-Drzal et al. 2).</a> Alongside an overall rising disparity in income, income-achievement gaps have been growing in recent decades. For children born 2001, the income-achievement gap in education is 30-40% larger than it was for children born in 1970, implying that recent generations are being affected by greater inequality in educational attainment based on socioeconomic status.
          
            </p>
          </Typography>
          <Box component="img" 
                 src= {nar7} 
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
            <p style={{textIndent: "25px"}}>
              Image Credits: Joshua Hoover / U.S. Department of Education
            </p>
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
            <p style={{textIndent: "25px"}}>
            Numerous studies have established relationships between income and academic success, but magnitude is also suggested to play a part in the strength of the income-achievement correlation. In large cities, for example, the link between low income and academic achievement in early childhood is at least three times stronger than it is in rural areas <a target="_blank" rel="noopener noreferrer" href='https://doi.org/10.1037/a0030244'>(Miller et al. 9).</a> Reflecting this, urban low-income adolescents were found to be further behind their peers in reading and science performance than low-income adolescents in suburban and rural zones <a target="_blank" rel="noopener noreferrer" href='https://doi.org/10.1111/ruso.12067'>(Miller and Votruba-Drzal 18).</a>            
            </p>
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
            <p style={{textIndent: "25px"}}>
            Not all income-related disparities in child opportunity can be tied to urban-rural variations. Research concerning differences in the prevalence of adverse childhood experiences (such as abuse and neglect) across urban and rural spaces concluded that poverty, not geography, was the main factor in the occurrence of such experiences <a target="_blank" rel="noopener noreferrer" href='https://doi.org/10.1111/jrh.12366'>(Crouch et al. 6)</a>. This invites inquiry into how socioeconomic policy efforts could be employed to support child opportunity. Experimental initiatives have shown some promise. The U.S. Department of Housing and Urban Development’s Moving to Opportunity project that ran from 1994-1998 suggests merging low-income families with mixed-income neighborhoods can reduce likelihood of poverty persistence, but only when the move is made while the children were below the age of 13 <a target="_blank" rel="noopener noreferrer" href='https://www.jstor.org/stable/43821479'>(Chetty et al.)</a>. Perhaps the income distributions of a child’s neighborhood would be more significant to combat socioeconomic opportunity barriers than the urbanicity or rurality of their residential area.
            </p>
          </Typography>
          <Typography variant='h5' sx={{fontFamily: 'Georgia', color: '#046c75'}} mt={3}>
              Rurality and the Role of Health
          </Typography>
          <Box component="img" 
                 src= {nar8} 
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
            <p style={{textIndent: "25px"}}>
            Image Credits: Derwood Photography
            </p>
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
            <p style={{textIndent: "25px"}}>
            Finally, part of our literature touches upon the key role of health in child opportunity. Compared to urban children, rural children are heavily disadvantaged when it comes to health. Rural youth are 26% more likely to be obese than urban youth <a target="_blank" rel="noopener noreferrer" href='https://doi.org/10.1016/j.jand.2015.10.024'>(McCormack and Meendering)</a> and rural youth in poverty are at especially higher risk of developing mental, behavioral, and developmental disorders <a target="_blank" rel="noopener noreferrer" href='https://browzine.com/libraries/33/articles/83885801'>(Kelleher and Gardner 2017).</a> Residing in isolated settings often result in decreased access to medical providers, and rural parents were less likely than urban parents to report a preventative healthcare or dental care visit for their children <a target="_blank" rel="noopener noreferrer" href='https://browzine.com/libraries/33/articles/60556370'>(Probst et al. 6).</a> Children deserve to be in optimal health before they can reach their potential, and in this case rural children bear the consequences of being in areas that often lack readily available resources in healthcare, with consequences that can spill over into areas such as academic achievement. Though the health category is not within the main focus of our project, readers are encouraged to consider the wider picture of what affects children as we explore just a few factors in the complex web influencing patterns of child opportunity.
            </p>
          </Typography>
          
          <Typography variant='h5' sx={{fontFamily: 'Georgia', color: '#046c75'}} mt={3}>
            The Child Opportunity Index Nationwide
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
            <p style={{textIndent: "25px"}}>
            To calculate the overall Child Opportunity Index (COI) score, 29 indicators were employed across the three domains.
            </p>
          </Typography>
          <Link href="https://www.diversitydatakids.org/research-library/research-brief/indicators-child-opportunity?_ga=2.239337476.628930422.1701857790-1104497295.1696628039" underline="none">
            <Button
                variant="contained"
                sx={{
                    marginTop: '2rem',
                    backgroundColor: '#046c75',
                    color: 'white',
                    '&:hover': {
                        backgroundColor: 'primary.dark',
                    },
                    padding: '10px 20px', // Increased padding for a bigger buttonFlicf
                    fontSize: '1.25rem',
                }}
                >
                    COI Indicators
                </Button>
          </Link>
          <Typography
            variant='body1'
            sx={{
              margin: '0.5rem auto',
              maxWidth: 'calc(min(90%, 850px))',
              textAlign: 'justify',
              color: 'black'
            }}
          >
            <p style={{textIndent: "25px"}}>
            Before diving into the specific education and socioeconomic domains of the Child Opportunity Index, let us explore its overall score distribution across the United States.
            </p>
          </Typography>
          <Typography variant='h5' sx={{fontFamily: 'Georgia', color: '#046c75'}} mt={3}>
            Map of Overall COI
          </Typography>
          <TableauChart url={"https://public.tableau.com/shared/9QTQYNGCS?:display_count=n&:origin=viz_share_link "} options={{hideTabs: false}}/>
          <Typography
            variant='body1'
            sx={{
              margin: '0.5rem auto',
              maxWidth: 'calc(min(90%, 850px))',
              textAlign: 'justify',
              color: 'black'
            }}
          >
            <p style={{textIndent: "25px"}}>
            We can see clusters of both higher (above 50, colored blue) and lower (below 50, colored red) COI scores concentrated in urban centers such as Los Angeles, Chicago, New York, and Seattle. This backs the work of <a target="_blank" rel="noopener noreferrer" href='https://doi.org/10.1377/hlthaff.2020.00735'>Acevedo-Garcia, et al.</a> in their findings that metropolitan areas house significant inequities in education. In this case, the heightened concentration of educational disparities also translates to general child opportunity. Nonmetropolitan areas have a mix of high and low COI scores. Most ZIP codes in very remote regions, such as rural Alaska, are mostly populated with scores on the lower end, while non-urban ZIP codes in states like North and South Dakota, Nebraska, and Kansas have a notable frequency of higher COI scores. Again, we see indications of alignment to existing literature, as this Great Plains region was mentioned as experiencing exceptional decreases to income inequality in research from <a target="_blank" rel="noopener noreferrer" href='https://doi.org/10.1111/ruso.12354'>Thiede.</a> 
            </p>
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
            <p style={{textIndent: "25px"}}>
            If the overall COI score is reflective of previous scholarship regarding education, we might expect to see similarly aligned results as we move into focusing on educational opportunity. Child opportunity in education could be highest at a medium population density indicative of the “middle suburb” category discussed by <a target="_blank" rel="noopener noreferrer" href='https://doi.org/10.1177/0002716217707176'>Burdick-Will and Logan.</a> In accordance with the concentrated opportunity gaps in urban zones, metropolitan centers could be a motley of ZIP codes boasting very high educational opportunity scores juxtaposed with ZIP codes possessing starkly lower forms of those scores.
            </p>
          </Typography>
          </TabPanel>
          <TabPanel value={value} index={2}>
          <Typography variant='h4' sx={{fontFamily: 'Georgia', color: '#046c75'}} mt={3}>
            Population & Education
          </Typography>
          <TableauChart url={"https://public.tableau.com/shared/D2SXNY49M?:display_count=n&:origin=viz_share_link "} options={{hideTabs: false}}/>
          <Typography
            variant='body1'
            sx={{
              margin: '0.5rem auto',
              maxWidth: 'calc(min(90%, 850px))',
              textAlign: 'justify',
              color: 'black'
            }}
          >
            <p style={{textIndent: "25px"}}>
            We used the versatile software Tableau to create our dataset visualizations to uncover patterns in child educational opportunities across different populations. In the above map, we take a closer look at the COI score across the U.S., this time specifically with the COI education domain. The red dots show ZIP codes with lower populations, while the blue dots represent more heavily populated ZIP codes. The size of the dots corresponds to the education score, with larger dots being associated with higher population scores. This map aligns smoothly with both the findings of existing literature and the overall COI distribution across the U.S. Notice how the blue dots cluster around crowded or heavily populated regions like the coast of California and the East Coast. These blue dots also tend to be larger than the red dots, highlighting how these highly populated areas have higher education scores. This visualization backs up existing research in the field that has found educational opportunities tend to be more abundant in urban or densely populated areas, while lowly populated regions tend to be more remote and lack educational opportunities.
            </p>
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
            <p style={{textIndent: "25px"}}>
            Our next visualization simplifies disparities between urban and rural child education opportunities with a bar chart. This visualization breaks down education levels in ZIP codes categorized as highly populated and lowly populated. The bar graph illustrates that in general, in ZIP codes with fewer people, there's a higher percentage of 'Moderate' and 'Low' education levels. On the flip side, places with more people tend to have more 'Very High' and 'High' education levels, with 16% of high populated ZIP codes exhibiting ‘Very High’ education levels and only 8.96% of low population ZIP codes having ‘Very High’ education levels. 
            </p>
          </Typography>
          <TableauChart url={"https://public.tableau.com/views/Datavizproject_17011575078090/HowEducationLevelVariesAcrossHL?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"} options={{hideTabs: false}}/>
          <Typography
            variant='body1'
            sx={{
              margin: '0.5rem auto',
              maxWidth: 'calc(min(90%, 850px))',
              textAlign: 'justify',
              color: 'black'
            }}
          >
            <p style={{textIndent: "25px"}}>
            However, simplifying educational differences in urban and rural regions and concluding that urban areas strictly have better educational opportunities is misleading. While we discovered that higher populated areas have higher educational opportunities on average, these regions also tend to have higher educational inequality, or variability, within them, again echoing the findings of <a target="_blank" rel="noopener noreferrer" href='https://doi.org/10.1377/hlthaff.2020.00735'>Acevedo Garcia, et al.</a> This high variability within urban areas is not limited to education: highly populated areas were found to have higher variability for all measures of the Child Opportunity Index, especially in the social and economic domain as we can see from the following bar chart contrasting standard deviations between high and low populated ZIP codes. The fact that these areas contain both high socioeconomic variability and educational variability indicates support for <a target="_blank" rel="noopener noreferrer" href='https://doi.org/10.1037/0033-2909.126.2.309'>Leventhal and Brooks-Gunn</a>’s assertion of the high correlation between socioeconomic status and educational achievement. However, what’s immediately apparent is how much higher the average standard deviation of social and economic scores are for high population areas compared to low population areas, and how much larger the gap is between the high and low population variability compared to the gap for education and health scores. This feature in the data could benefit from further research.
            </p>
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
            <p style={{textIndent: "25px"}}>
            While on average, urban regions may appear to excel in providing educational opportunity, the spread of education access and child opportunity is higher in urban areas when compared to their rural counterparts. We visualize this in the following bar chart, contrasting standard deviations between high and low populated ZIP codes across different measures of child opportunity.
            </p>
          </Typography> */}
          <TableauChart url={"https://public.tableau.com/views/Datavizproject_17011575078090/Bargraph?:language=en-US&publish=yes&:display_count=n&:origin=viz_share_link"} options={{hideTabs: false}}/>
          <Typography
            variant='body1'
            sx={{
              margin: '0.5rem auto',
              maxWidth: 'calc(min(90%, 850px))',
              textAlign: 'justify',
              color: 'black'
            }}
          >
            <p style={{textIndent: "25px"}}>
            These data visualizations add depth to our earlier discussion about regional differences in educational opportunities, illustrating the relationship between education and population and highlighting its complexity. Overall, educational opportunity score distributions are reflective of the findings communicated in established scholarship on education performance across diverse socio spatial contexts.             </p>
          </Typography>
          </TabPanel>
          <TabPanel value={value} index={3}>
          <Typography variant='h5' sx={{fontFamily: 'Georgia', color: '#046c75'}} mt={3}>
          Exploring the Social-Economic Domain
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
            <p style={{textIndent: "25px"}}>
            Exploring the Social Economic Domain
            </p>
          </Typography> */}
          <Typography
            variant='body1'
            sx={{
              margin: '0.5rem auto',
              maxWidth: 'calc(min(90%, 850px))',
              textAlign: 'justify',
              color: 'black'
            }}
          >
            <p style={{textIndent: "25px"}}>
            Continuing our look into what factors are linked to educational opportunity, we now focus on exploring the social economic domain and seeing its potential relationships between population and education. While the red dots still represent zip codes with lower populations and the blue dots more heavily populated zip codes, this time the size of the dots corresponds to the social and economic score of the zip code. We have a visualization titled "Social Economic Opportunity Score of High Population and Low Population across U.S.," which is much like the one about educational opportunities but instead focuses on the relationship between population level and the socioeconomic domain, or income level. Again, you'll see bigger blue dots in states like California and New York, suggesting generally higher socioeconomic scores in higher populated levels. This relationship aligns with what we noticed before about education. 
            </p>
          </Typography>
          <TableauChart url={"https://public.tableau.com/views/map-popvsincome/2?:language=en-US&:display_count=n&:origin=viz_share_link "} options={{hideTabs: false}}/>
          <TableauChart url={"https://public.tableau.com/views/pop-Incomebar/Sheet1?:language=en-US&:display_count=n&:origin=viz_share_link "} options={{hideTabs: false}}/>

          <Typography
            variant='body1'
            sx={{
              margin: '0.5rem auto',
              maxWidth: 'calc(min(90%, 850px))',
              textAlign: 'justify',
              color: 'black'
            }}
          >
            <p style={{textIndent: "25px"}}>
            The "Interaction Plot of Population and Income Scores” shows the average social economic scores and breaks them down into categories like "Very High," "High," "Moderate," "Low," and "Very Low." Looking at the graph, we can see that there is almost no significant difference between the high population and low population for every category. In both high and low populations, the average for each category is almost the same. Therefore, unlike education, there is a less clear relationship between population and social economic opportunity. Higher population does not correlate with higher socioeconomic score and the various social economic levels are scattered across the rural and urban divide. This detail illustrates the connections between population, social economic status, and education may not be straightforward. While education may be closely related to population and social economic opportunity, the two are not necessarily related to each other.
            </p>
          </Typography>
          <Typography variant='h5' sx={{fontFamily: 'Georgia', color: '#046c75'}} mt={3}>
            Connecting the Social Economic Domain to Educational Opportunity
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
            <p style={{textIndent: "25px"}}>
            The concept of educational opportunities is closely linked to the economic conditions of a given society. The economic level of a society influences various facilities and infrastructure available for children's education, ultimately affecting the educational opportunities for children living in that society. Factors such as recruiting mentors for academic pursuits, creating a conducive study environment, and parents' enthusiasm for their children's education, which directly impact children's educational opportunities, often operate within the economic framework, especially in relatively affluent urban areas. These factors are consistent with ones mentioned in the work of <a target="_blank" rel="noopener noreferrer" href='https://doi.org/10.1111/ruso.12067'>Miller and Votruba-Drzal</a>, who have discussed how impoverished urban areas can exacerbate adolescent achievement gaps due to scarcity in “cultural capital” (19). Low-income adolescents in suburban and rural settings tend to experience less socioeconomic segregation, and are therefore more likely to be exposed to “school climates, teachers  and  mentors,  and  peer  groups” that encourage academic success (19).
            </p>
          </Typography>
          <TableauChart url={"https://public.tableau.com/views/incomeedinter/Sheet2?:language=en-US&:display_count=n&:origin=viz_share_link "} options={{hideTabs: false}}/>
          <Typography
            variant='body1'
            sx={{
              margin: '0.5rem auto',
              maxWidth: 'calc(min(90%, 850px))',
              textAlign: 'justify',
              color: 'black'
            }}
          >
            <p style={{textIndent: "25px"}}>
            First, we aimed to examine education opportunity scores based on the socioeconomic opportunity level of each ZIP code. The resulting bar chart, which we can see above, reveals a critical trend: a better economic opportunity score results in a generally higher education opportunity score. Once again, ideas from <a target="_blank" rel="noopener noreferrer" href='https://doi.org/10.1111/cdep.12152'>Votruba-Drzal, et al.</a> and <a target="_blank" rel="noopener noreferrer" href='https://public.tableau.com/views/DH101_17006831593880/3?:language=en-US&:display_count=n&:origin=viz_share_link'>Leventhal and Brooks-Gunn</a> on the strong association between high socioeconomic status and high educational achievement (and vice versa) are affirmed. As seen in the plot above, in general, across high and low populations, as the level of income increases, the Education Opportunity Score also rises, highlighting the close relationship between the economic and educational domains.
            </p>
          </Typography>
          <TableauChart url={"https://public.tableau.com/views/DH101_17006831593880/3?:language=en-US&:display_count=n&:origin=viz_share_link"} options={{hideTabs: false}}/>
          <Typography
            variant='body1'
            sx={{
              margin: '0.5rem auto',
              maxWidth: 'calc(min(90%, 850px))',
              textAlign: 'justify',
              color: 'black'
            }}
          >
            <p style={{textIndent: "25px"}}>
            However, one might wonder whether the correlation between social and economic status and education is prevalent in both high and low populated ZIP codes or if this relationship is much stronger in urban or rural regions. In the plot above, both low-population and high-population areas show the strong relationship that as the socioeconomic opportunity score increases, the education opportunity score also increases. Furthermore, it appears that the interaction between socioeconomic opportunity score and education opportunity score may even be slightly more pronounced in low-population areas. Therefore, it can be concluded that the population itself does not significantly impact the interaction between education opportunity score and socioeconomic opportunity score and that socioeconomic status has a strong positive correlation with education. 
            </p>
          </Typography>
          </TabPanel>
          <TabPanel value={value} index={4}>
          <Typography variant='h4' sx={{fontFamily: 'Georgia', color: '#046c75'}} mt={3}>
            Conclusion
          </Typography>
          <Box component="img" 
                 src= {n2} 
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
            <p style={{textIndent: "25px"}}>
              Image Credit: Diversity Kids Data
            </p>
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
            <p style={{textIndent: "25px"}}>
            In conclusion, our investigation into the relationship between socio-spatial contexts and academic access has shed light on the complex dynamics that underlie educational opportunities for children across different geographic landscapes in the United States. While it is well-established that educational disparities exist, our project has delved deeper into the nuanced factors that contribute to these disparities
            </p>
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
            <p style={{textIndent: "25px"}}>
            Our examination of the Child Opportunity Index (COI) and its data from indicators in education and socio-economic status has revealed that urbanicity and economic conditions play a crucial role in shaping educational opportunities. As we have seen, higher levels of income and higher populations within a community are closely associated with better educational opportunities, including well-funded schools and enhanced support networks. These socioeconomic factors and education factors are shaped in some ways by the geography of the local region, with unique results manifesting according to different population densities.
            </p>
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
            <p style={{textIndent: "25px"}}>
            Furthermore, our exploration of the urban-rural continuum has shown that while urban areas often exhibit larger opportunity disparities, rural areas have their own unique challenges, particularly in terms of access to educational resources and opportunities. However, it is important to recognize that the urban-rural binary does not fully capture the complexity of geographical spaces, and we have found that the areas falling within the spectrum of urban and rural in determining child opportunity.

            </p>
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
            <p style={{textIndent: "25px"}}>
            Through the use of visualizations, such as maps and bar charts, we have provided a clearer picture of the regional differences in educational opportunities. These visuals have reinforced our findings that more populated areas tend to have high levels of educational opportunity and child opportunity overall, though they face more internal inequity with many metropolitan ZIP codes possessing strikingly lower opportunity scores. Rural areas tend to experience lower child opportunity both overall and in education, with some notable exceptions such as the Great Plains. These geographical variations along the urban-rural continuum highlight the need for more investigation into the unique factors influencing child opportunity on the local level, and intricate policies that address and target each of these groups.

            </p>
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
            <p style={{textIndent: "25px"}}>
            Whether urban, rural, or somewhere in between, children across the U.S. grow up under a vast diversity of circumstances, much of which is due to the complex characteristics of their neighborhood geography. Our research has highlighted the multifaceted nature of educational disparities and the need for tailored solutions that consider the unique socio spatial characteristics of each community and the socioeconomics that are tied with it. By deepening our understanding of these dynamics, we hope to contribute to the development of policies that promote a more equitable education system, benefiting all children and shaping a brighter future for our society.
            </p>
          </Typography>
          </TabPanel>
        </Box>
      </Container>
    </>
  );
};

export default Narrative;
