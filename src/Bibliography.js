import React from 'react';
import Navbar from './Navbar';
import { Box, Container, Typography} from '@mui/material';

const Bibliography = () => {
  return (
    <>
      <Navbar />
      <Container mt={0} sx={{ paddingBottom: '2rem' }}>
        <Box textAlign={'center'}>
            <Typography variant='h4' sx={{color: '#046c75'}} mt={3}>
            Annotated Bibliography
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
           <p style={{textIndent: "0px"}}><b>
            <i>Acevedo-Garcia, Dolores, et al.</i> “Racial And Ethnic Inequities In Children’s Neighborhoods:
            <br/>&emsp;&ensp; Evidence From The New Child Opportunity Index 2.0”<i>Health Affairs (Project Hope)</i>, 
            <br/>&emsp;&ensp; vol. 39, no. 10, 2020, pp. 1693–1701, doi:10.1377/hlthaff.2020.00735.
            </b></p></Typography>
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
            In this article, a team of researchers used the Child Opportunity Index 2.0, our group’s dataset, to explore racial and ethnic inequities in neighborhood conditions in one hundred of the largest metropolitan areas in the United States. The Child Opportunity Index summarizes a neighborhood’s conditions by assessing factors such as education, health, and social and economic contexts. While the dataset uses a variety of measures to develop child opportunity scores, the index also has some limitations, as it omits some important measures including neighborhood policing, density of healthcare, and social capital. Through performing data analysis on the largest metropolitan areas in the index, the authors of this study discovered that inequities in child opportunity by race are larger within metropolitan areas. The researchers found that 91% of inequities in child opportunity occurred in urban areas. These disparities are most apparent when split by race: White children had an average child opportunity of 73 compared to 33 for Hispanic children and 24 for Black children in the largest metropolitans. When we are exploring our dataset given the results of this study,  it is essential we consider race as a factor in child opportunities inequalities. Instead of only focusing on population as a contributor to variability in neighborhood conditions, our group would benefit immensely from also considering the racial demographics of the communities we are assessing and whether that affects the level and variability of child opportunity.
           </p></Typography>
           <Typography
            variant='body1'
            sx={{
              margin: '0.5rem auto',
              maxWidth: 'calc(min(90%, 850px))',
              textAlign: 'justify',
              color: 'black'
            }}
          >
           <p style={{textIndent: "0px"}}><b>
            McCormack, Lacey and Meendering, Jessica. “Diet and Physical Activity in Rural vs Urban <br/>&emsp;&ensp;Children and Adolescents in the United States: A Narrative Review.” Journal of the <br/>&emsp;&ensp;Academy of Nutrition and Dietetics, Vol 116, No 3, 2016, pp. 467-480, <br/>&emsp;&ensp;https://doi.org/10.1016/j.jand.2015.10.024.
            </b></p></Typography>
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
            In this article, Lacey McCormack and Jessica Meendering discuss the existing literature about childhood obesity across the urban and rural spectrum creating a comprehensive summary. Across all studies, it has been found that childhood obesity is much more prevalent among rural youth. The disparity in urban and rural children has been researched using dietary data, food records, accelerometers, physical activity recall questionnaires, and other techniques. In general, studies found that there are generally no differences in intake between rural and urban children for any of the dietary variables, though one study found that urban children had a significantly greater variety of vegetable consumption compared to rural youth (R. Ettienne-Gittens, E.L. McKyer, M. Odum, et al., 2013). When it came to physical activity, researchers in the field had mixed findings. One study found that compared to overweight metropolitan youth, rural obese children were more likely to have excess screen time and were less likely to meet PA recommendations and participate on sports teams (M.N. Lutfiyya, M.S. Lipsky, J. Wisdom-Behounek, M. Inpanbutr-Martinkus, 2007). However, other studies found that urban children walked significantly fewer steps per day than suburban and rural children and participated in fewer sports, contradicting the previous study. The authors of this article believe the diversity in findings could be due to differences in how “rural,” “good diet,” and “sufficient physical activity” have been defined and in how data has been collected and analyzed. One of the domains our dataset explores is the health and environment domain. It could be interesting to see how health, which includes diet and physical exercise, varies between highly populated and lowly populated zip codes, and how it aligns with other research in the field. 
           </p></Typography>
           <Typography
            variant='body1'
            sx={{
              margin: '0.5rem auto',
              maxWidth: 'calc(min(90%, 850px))',
              textAlign: 'justify',
              color: 'black'
            }}
          >
           <p style={{textIndent: "0px"}}><b>
            Van Maarseveen, Raoul. “The urban–rural education gap: do cities indeed make us smarter?” <br/>&emsp;&ensp;Journal of Economic Geography, Volume 21, No 5, 2021, pp. 683–714, <br/>&emsp;&ensp;https://doi.org/10.1093/jeg/lbaa033.
            </b></p></Typography>
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
            This paper explored whether living in an urban or rural context affected the educational investment decisions of children. The researcher did this by analyzing the Netherlands, as the Dutch educational system requires children to decide their desired level of human capital investment at the end of primary school and the end of secondary school as well as take national exams measuring their academic achievement. Through this study, it was found that children, across different family characteristics and academic abilities who came from urban areas consistently chose to invest in their education when juxtaposed with children who were raised in rural environments. Children in rural areas did not seem to enjoy or take part in the same educational opportunities as children who grew up in urban communities in the Netherlands, which was especially notable considering how in the Netherlands, rural areas are relatively accessible when compared internationally. However, the author recognizes the study is limited in that “it cannot attribute the overall effect of density on educational attainment to individual mechanisms,” though the author puts forth some possible factors which include having higher returns to education in urban areas, lower costs to obtaining education in cities, and the lack of information about educational possibilities in rural areas (Van Maarseveen, 2021). Furthermore, the study focused only on the Netherlands making it hard to generalize to the United States which is a much different country culturally, politically, and demographic wise. When exploring differences in educational opportunity among zip codes with the child opportunity index, it will be interesting to see whether our dataset affirms the idea that higher populated areas tend to lead to higher educational investment and to consider the possible factors that may lead to this relationship. 
           </p></Typography>
           <Typography
            variant='body1'
            sx={{
              margin: '0.5rem auto',
              maxWidth: 'calc(min(90%, 850px))',
              textAlign: 'justify',
              color: 'black'
            }}
          >
           <p style={{textIndent: "0px"}}><b>
            Miller, Portia, Elizabeth Votruba-Drzal, and Claude M. Setodji. "Family income and early <br/>&emsp;&ensp;achievement across the urban–rural continuum." Developmental psychology, vol. 49, no. <br/>&emsp;&ensp;8, 2013, pp. 1452-1465. ProQuest, <br/>&emsp;&ensp;https://www.proquest.com/scholarly-journals/family-income-early-achievement-across-ur<br/>&emsp;&ensp;ban/docview/1081872500/se-2, doi:https://doi.org/10.1037/a0030244.
            </b></p></Typography>
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
            This study examined how poverty and early achievement differs across the rural and urban spectrum in the United States using nationally representative data. While much of existing literature on poverty has been centered on urban samples, rural and suburban children account for the majority of poor children in the United States. This study not only explored income disparities across rural and urban contexts but also examined how household income affects early achievement in children. The authors concluded that children from lower income families may lack materials, experiences, high quality parenting, and stable environments, leading to a lack of cultural capital and lower academic achievement when compared to their urban counterparts. The study found that in most urban areas, links between income and children’s early academic skills were highly nonlinear, illustrating how the threshold at which income’s relationship with academic achievement begins to dissipate is different across urban areas of different sizes. However, the relationship between income and academic skills in rural areas is linear and there is a much weaker association between household income and academic achievement for rural children. With these findings in mind, it is important for us when working on our project to examine the relationship between the educational and economic domains of the child opportunity index when exploring the urban rural continuum the associations between these variables may be different across communities with different populations. Furthermore, we must not overgeneralize our findings about urban children’s academic skills and household income because it can vary greatly given their nonlinear relationship. 
           </p></Typography>
           <Typography
            variant='body1'
            sx={{
              margin: '0.5rem auto',
              maxWidth: 'calc(min(90%, 850px))',
              textAlign: 'justify',
              color: 'black'
            }}
          >
           <p style={{textIndent: "0px"}}><b>
            Tieken, Mara Casey. “The Spatialization of Racial Inequity and Educational <br/>&emsp;&ensp;Opportunity:Rethinking the Rural/Urban Divide.” Peabody Journal of Education, vol. 92, <br/>&emsp;&ensp;no. 3, 2017, pp. 385–404, https://doi.org/10.1080/0161956X.2017.1324662.
            </b></p></Typography>
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
            This article focuses on U.S. urban and rural education in the context of poor students of color. In particular, the article aims to dismantle concepts of the urban-rural binary when it comes to educational opportunities for students of color. Critical race theory is applied throughout the author’s historical overview of the development of racial inequality in schools and its relationship to urban and rural spaces. The historical overview is comprehensive, covering the early 1800s to the present. It is argued that educational inequality in the U.S. is closely linked to race and class, but cannot be simplified into a rural or urban issue. Both impoverished urban and rural schools struggle with staffing qualified teachers and developing robust curricula. However, reform efforts seem to focus on poor urban schools, neglecting the equally critical needs of poor rural schools. As urban and rural schools compete for resources and funding, it becomes increasingly difficult to escape marginalization. The author advocates for “de-spatializing” educational opportunity by recognizing commonalities in inequity across geographical areas. This article is a strong source for qualitative commentary, but rarely mentions quantitative information directly. Its extensive historical survey of racial inequality across geographies would be useful to integrate into the historical background section of our project narrative.
           </p></Typography>
           <Typography
            variant='body1'
            sx={{
              margin: '0.5rem auto',
              maxWidth: 'calc(min(90%, 850px))',
              textAlign: 'justify',
              color: 'black'
            }}
          >
           <p style={{textIndent: "0px"}}><b>
             Burdick-Will, Julia, and John R. Logan. “Schools at the Rural-Urban Boundary: Blurring the <br/>&emsp;&ensp;Divide?” The Annals of the American Academy of Political and Social Science, vol. 672, <br/>&emsp;&ensp;no. 1, 2017, pp. 185–201, https://doi.org/10.1177/0002716217707176.
            </b></p></Typography>
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
            This paper examines the nuances between educational inequality in rural, urban, and suburban school regions of the U.S., especially transitional areas where the separation between these categories are less distinct. Using geographic coordinates from the National Center for Education Statistics, school district boundaries from the Census Bureau, and geographic information systems procedures, each school was assigned one of eight categories that represented variations within urban, suburban, and rural categories (such as inner suburban, middle suburban, and outer suburban). Within and between these categories, characteristics such as race, student-teacher ratio, and instructional salary per student were analyzed. Results suggest that large urban schools are particularly disadvantaged, while small urban schools and poor rural schools face similar levels of economic disadvantage and low achievement. Suburban schools that are situated closer to urban areas experience more educational advantage than their nearby urban schools, with inner suburban areas experiencing the greatest advantage, whereas suburban schools appear to become increasingly disadvantaged when approaching rural areas. This source provides a deeper look at urban, suburban, and rural categories and emphasizes quantitative analysis. As such, its findings can be considered in conjunction with our own Child Opportunity Index database to produce further insights into opportunity gaps within different geographic spaces.
           </p></Typography>
           <Typography
            variant='body1'
            sx={{
              margin: '0.5rem auto',
              maxWidth: 'calc(min(90%, 850px))',
              textAlign: 'justify',
              color: 'black'
            }}
          >
           <p style={{textIndent: "0px"}}><b>
            Chetty, Raj, et al. “The Effects of Exposure to Better Neighborhoods on Children: New Evidence <br/>&emsp;&ensp;from the Moving to Opportunity Experiment.” The American Economic Review, vol. 106, <br/>&emsp;&ensp;no. 4, 2016, pp. 855–902. JSTOR, http://www.jstor.org/stable/43821479. Accessed 26 <br/>&emsp;&ensp;Oct. 2023.
            </b></p></Typography>
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
            This article discusses the results of an experimental project called Moving to Opportunity (MTO) conducted by the U.S. Department of Housing and Urban Development between 1994 and 1998. Under this program, randomly selected families living in high-poverty areas were offered the chance to move to lower poverty neighborhoods through housing vouchers. The sample size of 4,604 families were divided into three groups. Two of these groups received housing vouchers. One group received an experimental housing voucher that required moving to an area with a poverty rate of below 10 percent. Another group received a standard Section 8 housing voucher. The control group was not offered a housing voucher. The study found beneficial effects in children who moved to low-poverty areas before the age of 13 in both the Section 8 and experimental housing voucher groups, with the experimental voucher group having larger effects on child outcomes. On the other hand, the MTO project appeared to have negative effects on achievement for adolescents who moved between the ages of 13 and 18. This is theorized to be due to disruption of social networks and environmental changes. The authors suggest that higher gains are seen in children who move to lower poverty neighborhoods earlier in their lives, with benefits increasing with every year a child lives in a low-poverty area. For maximum effect, the article recommends policies that offer housing vouchers such as the ones in the MTO project to families with young children. The article’s findings support the notion that merging low-income families with mixed-income communities are likely to reduce the possibility of poverty persistence across generations. This article contains robust quantitative information and analyses, which can be integrated as support for our data visualizations or as part of our narrative. Considering its focus on poverty levels, it can be referenced when discussing wealth-related factors and its effect on child opportunity.
           </p></Typography>
           <Typography
            variant='body1'
            sx={{
              margin: '0.5rem auto',
              maxWidth: 'calc(min(90%, 850px))',
              textAlign: 'justify',
              color: 'black'
            }}
          >
           <p style={{textIndent: "0px"}}><b>
            Thiede, Brian C., et al. “Income Inequality Across the Rural‐Urban Continuum in the United <br/>&emsp;&ensp;States, 1970–2016.” Rural Sociology, vol. 85, no. 4, 2020, pp. 899–937, <br/>&emsp;&ensp;https://doi.org/10.1111/ruso.12354.
            </b></p></Typography>
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
            This article studies patterns of U.S. income inequality on a subnational scale, and their variations both across and within rural areas. Differences in change of income inequality within counties between 1970 and 2016 were analyzed and mapped. Inequality persistence, where income remained consistently low or high, were also measured and identified. These analyses suggest that national rises in income inequality are also playing out locally. The study found that income inequalities within counties were shown to be consistent across time. High income inequality was found to be historically more present in rural or nonmetropolitan areas. However, there appears to have been a convergence in income inequality within counties across urban and rural locales, as urban areas have now seen rises in income inequality. The magnitude and direction of these changes were highly variable across several locations, with some areas such as the Great Plains experiencing decreasing income inequality. The study calls for further research into the cause of such inequality patterns. This source provides descriptive statistics and more information on income that can be incorporated into our discussion on wealth and its relationship to Child Opportunity Index scores. However, this source does not go in-depth on the causes behind these patterns.
           </p></Typography>
           <Typography
            variant='body1'
            sx={{
              margin: '0.5rem auto',
              maxWidth: 'calc(min(90%, 850px))',
              textAlign: 'justify',
              color: 'black'
            }}
          >
           <p style={{textIndent: "0px"}}><b>
             Leventhal, Tama, and Jeanne Brooks-Gunn. “The Neighborhoods They Live in: The Effects of <br/>&emsp;&ensp;Neighborhood Residence on Child and Adolescent Outcomes.” Psychological Bulletin, <br/>&emsp;&ensp;vol. 126, no. 2, 2000, pp. 309–37, https://doi.org/10.1037/0033-2909.126.2.309.
            </b></p></Typography>
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
            This paper comprehensively examines the impact of neighborhood living on the welfare of children and adolescents. This paper consists of three main sections. The first section examines key issues related to research methodology which include national or multisite large studies, city or regional studies, neighborhood-based designs, and experimental or quasi-experimental designs. This is an important section as it enables us to better understand and interpret the findings. The following sections examine the relevance between neighborhood characteristics and child outcomes and suggest the importance of high socioeconomic status (SES) in achievement and low SES and housing stability in behavioral/emotional outcomes. The third section identifies the impact mechanisms of neighborhoods on development and proposes three pathways: institutional resources, relationships, and normative/collective efficacy. These models extend the model identified by C. Jencks and S. Mayer (1990) and R. J. Sampson (1992) to provide a theoretical basis for studying neighborhood mechanisms and specify processes that can work at different levels (individuals, families, schools, colleagues, communities). It will be incredibly useful to cite this comprehensive review of research in our background research as it covers a variety of ways to study neighborhoods and communities. 
           </p></Typography>
           <Typography
            variant='body1'
            sx={{
              margin: '0.5rem auto',
              maxWidth: 'calc(min(90%, 850px))',
              textAlign: 'justify',
              color: 'black'
            }}
          >
           <p style={{textIndent: "0px"}}><b>
            Miller, Portia, and Elizabeth Votruba-Drzal. “Urbanicity Moderates Associations Between <br/>&emsp;&ensp;Family Income and Adolescent Academic Achievement.” Rural Sociology, vol. 80, no. 3, <br/>&emsp;&ensp;2015, pp. 362–86, https://doi.org/10.1111/ruso.12067.
            </b></p></Typography>
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
            This study examined how the relationship between family income and academic achievement of children and adolescents highly depends on the level of urbanization in the region of their community. The study was conducted using U.S. national representative data. According to the results of the study, there is a clear link between family income and academic achievement in large cities, with the higher the family income, the higher the achievement. On the other hand, in suburban and rural areas, the connection between household income and academic performance was weaker, and the relationship between income and achievement was relatively low. In addition, in less urbanized areas, the timing of family income stabilizing at a high level of relevance to academic achievement appeared later. These findings describe the complexities of the relationship between family income and academic achievement and illustrate how this connection varies across the urban and rural spectrum. When interpreting our findings on the economic and educational domains of child opportunity in higher and lower populated zip codes, it will be important to look back on this resource and understand why these variables may have different relationships depending on the level of urbanization. 
           </p></Typography>
           <Typography
            variant='body1'
            sx={{
              margin: '0.5rem auto',
              maxWidth: 'calc(min(90%, 850px))',
              textAlign: 'justify',
              color: 'black'
            }}
          >
           <p style={{textIndent: "0px"}}><b>
            Votruba-Drzal, Elizabeth, et al. “Poverty, Urbanicity, and Children’s Development of Early<br/>&emsp;&ensp; Academic Skills.” Child Development Perspectives, vol. 10, no. 1, 2016, pp. 3–9, <br/>&emsp;&ensp;https://doi.org/10.1111/cdep.12152.
            </b></p></Typography>
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
            In the article, the author focuses on childhood poverty and the disparities it can cause in child development of low income families within different areas. Poverty hinders a child's health, well-being, and educational achievement. For example, children from low-income households score approximately 0.70 standard deviations lower than high-income children when it comes to academic performance. Economic gaps have only grown, which has in turn increased the gap in academic skills. Poverty also affects key proximal contexts. Kids that were raised in the lower socioeconomic conditions have received less investment into their education (book, courses, tutors) and it causes big differences in their development. This study presents a model that argues that urbanicity influences how poverty affects children's development by modulating available resources and stressors. For example, urban areas often face concentrated poverty and stressors like pollution, crime, and high living costs, but they also offer more community resources. Rural regions have less access to resources due to geographical isolation and a declining economy, coupled with mixed stressors like pollution from farming. Suburban areas generally offer better family resources and face lower stressors, potentially mitigating some of the adverse effects of poverty. This complex interplay between poverty, urbanicity, and children's development underscores the need for tailored research and policy interventions depending on the environment.
           </p></Typography>
           <Typography
            variant='body1'
            sx={{
              margin: '0.5rem auto',
              maxWidth: 'calc(min(90%, 850px))',
              textAlign: 'justify',
              color: 'black'
            }}
          >
           <p style={{textIndent: "0px"}}><b>
            Crouch, E., Radcliff, E., Probst, J.C., Bennett, K.J. and McKinney, S.H. “Rural-Urban <br/>&emsp;&ensp;Differences in Adverse Childhood Experiences Across a National Sample of Children.” <br/>&emsp;&ensp;The Journal of Rural Health, Vol 36: 2020, pp. 55-64. https://doi.org/10.1111/jrh.12366
            </b></p></Typography>
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
            In this article, the author delves deeply into the differences in adverse childhood experiences (ACEs) across a national sample of children from the 2016 National Survey of Children's Health (NSCH). The research discovered that rural children in general had a higher exposure to ACEs including parental separation, death, household incarceration, household violence, household mental illness, household substance abuse, and economic hardship when compared to urban children in the United States. However, the research also affirmed that there are no significant fundamental differences between rural and urban children. This leads the authors to conclude that adverse childhood experiences are primarily driven by poverty. The author further emphasizes the importance of public authorities raising awareness about ACEs, as they have significant consequences, especially for children in rural areas. ACEs are incredibly impactful to child development, so understanding that rural children and/or children facing poverty are more likely to experience them is important to our analysis and understanding of child opportunity. 
           </p></Typography>
           <Typography
            variant='body1'
            sx={{
              margin: '0.5rem auto',
              maxWidth: 'calc(min(90%, 850px))',
              textAlign: 'justify',
              color: 'black'
            }}
          >
           <p style={{textIndent: "0px"}}><b>
            Hertz, Thomas, and Silva, Andres. “Rurality and Income Inequality in the United States” Rural <br/>&emsp;&ensp;sociology, Vol.85, No. 2, 2020, pp. 436-467. <br/>&emsp;&ensp;https://onlinelibrary.wiley.com/doi/abs/10.1111/ruso.12295.
            </b></p></Typography>
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
            In this article, the author focuses that attention has been drawn to the growing divide between urban and rural areas, often linking it to political polarization and suggesting that it could be a result of increasing income disparity between these regions. However, this paper argues that the rise in national income inequality isn't due to the urban and rural divide but is driven by increasing inequality within both urban and rural sectors. The study aims to understand the reasons behind rising inequality in these areas, focusing on the various components of household income like wages, salaries, asset incomes, social security, and more. One of the points that the author is trying to argue is that the standard urban and rural categorization, metro/nonmetro, may overstate the average income gap between urban and rural areas when compared to the Census Bureau's categorization based on population density. Author also mentions that there are several factors that actually have an effect on the economic gap. One reason can be the shift from traditional pensions to arrangements like 401(k)s has impacted retirement income inequality. Also it is important to notice that the study focuses only on pre-tax money income, leaving out noncash benefits and the effects of taxes. This article could be important to contextual economic inequality in higher and lower populated levels, and provide an argument that the disparities we may find could be over exaggerations 
           </p></Typography>
           <Typography
            variant='body1'
            sx={{
              margin: '0.5rem auto',
              maxWidth: 'calc(min(90%, 850px))',
              textAlign: 'justify',
              color: 'black'
            }}
          >
           <p style={{textIndent: "0px"}}><b>
            Kelleher, Kelly J. and Gardner, William. “Out of Sight, Out of Mind–Behavioral and <br/>&emsp;&ensp;Developmental Care for Rural Children.” New England Journal of Medicine, vol 376, no. <br/>&emsp;&ensp;14, 2017, pp. 1301-1303. https://browzine.com/libraries/33/articles/83885801.
           </b></p></Typography>
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
            In this article, the author provides an analysis of the health status of children in rural America, with a particular focus on the argument that rural children, especially those living in impoverished conditions, are at a significantly higher risk of experiencing mental, behavioral, and developmental disorders (MBDDs) compared to their urban counterparts. This assertion is substantiated by data provided by the Centers for Disease Control and Prevention (CDC), reinforcing the resource's validity. The article’s relevance to our topic, which investigates disparities related to educational opportunities, health outcomes, and socio-economic conditions between highly and lowly populated regions in the United States, is conspicuous. It acts as a valuable source of information that highlights the unique challenges faced by rural children, underlining the pressing need to address these disparities comprehensively. Also, the resource underscores the specific obstacles encountered by rural families when attempting to access essential healthcare services, a perspective that has the potential to enrich our research on the overall well-being and socio-economic prospects of rural populations in the state. Consequently, this contributes to a deeper understanding of the multifaceted challenges that rural residents encounter in their day-to-day lives.
           </p></Typography>
           <Typography
            variant='body1'
            sx={{
              margin: '0.5rem auto',
              maxWidth: 'calc(min(90%, 850px))',
              textAlign: 'justify',
              color: 'black'
            }}
          >
           <p style={{textIndent: "0px"}}><b>
            Probst, Janice, Barker, Judith, Enders, Alexandra, Gardiner, Paula; “Current State of Child <br/>&emsp;&ensp;Health in Rural America: How Context Shapes Children's Health.” The Journal of Rural <br/>&emsp;&ensp;Health, 2018, Vol. 34, pp. 3-12. https://browzine.com/libraries/33/articles/60556370. 
           </b></p></Typography>
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
            This article focuses on painting a picture of the current state of child’s health in rural regions of America by drawing on existing studies in the field. The researchers started out by defining rural, which has multiple definitions, as split on by the county level, which stays consistent over time. A county is considered urban if it contains a population cluster with more than 50,000 people and rural otherwise. They then explored the characteristics of rural America, finding that rural areas are much more likely to be economically disadvantaged. In regards to children’s health, the article found that rural and urban children are equally likely to be insured but Medicaid insures a higher proportion of children in rural areas. Furthermore, rural children are more likely to be overweight or obese than urban children. Rural children have a higher injury risk which may be due to the fact that they are more likely to work often in agriculture and they must travel further for medical services, increasing the severity of their injuries. Finally, mortality rates are higher among rural than among urban children, across both males and females and all major racial categories. While rural children are less likely to die from homicide, they are at much higher risk from unintentional injury and suicide than their urban counterparts. Overall, this article suggests that children’s health varies between urban and rural areas, and that children from rural backgrounds have a higher chance of injury and obesity. Thus, when analyzing our data, it is worth exploring how the health domain specifically differs across high and low population zip codes. 
           </p></Typography>
        </Box>
      </Container>
    </>
  );
};

export default Bibliography;
