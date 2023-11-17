import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import Narrative from './Narrative';
// import Experience from './Experience';
// import Resume from './Resume';
// import ContactMe from './ContactMe';
import MeetTheTeam from './MeetTheTeam';
import { ThemeProvider, createTheme } from '@mui/material';

let theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#a0a0a0',
    },
  },
  typography: {
    allVariants: {
      color: 'white',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>      
      <Router>
        <div className='App'>
          <Routes>
            <Route path='/team' element={<MeetTheTeam />} />
            <Route path='/narrative' element={<Narrative />} />
            {/* <Route path='/experience' element={<Experience />} />
            <Route path='/resume' element={<Resume />} />
            <Route path='/contact-me' element={<ContactMe />} /> */}
            <Route path='/' element={<MainPage />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
