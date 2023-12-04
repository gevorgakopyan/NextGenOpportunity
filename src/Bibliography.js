import React from 'react';
import Navbar from './Navbar';
import { Box, Container, Typography} from '@mui/material';

const Bibliography = () => {
  return (
    <>
      <Navbar />
      <Container mt={0} sx={{ paddingBottom: '2rem' }}>
        <Box textAlign={'center'}>
            <Typography variant='h4' sx={{color: 'gray'}} mt={3}>
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
            <i>Acevedo-Garcia, Dolores, et al.</i> “Racial And Ethnic Inequities In Children’s Neighborhoods:
            <t/>Evidence From The New Child Opportunity Index 2.0” <i>Health Affairs (Project Hope)</i>, vol. 39, no. 10, 2020, pp. 1693–1701, doi:10.1377/hlthaff.2020.00735.
           </Typography>
        </Box>
      </Container>
    </>
  );
};

export default Bibliography;
