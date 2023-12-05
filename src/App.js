import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import Narrative from './Narrative';
import About from './About';
import Data from './Data';
import MeetTheTeam from './MeetTheTeam';
import { ThemeProvider, createTheme } from '@mui/material';
import Bibliography from './Bibliography';

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
    fontFamily: [
      'Source Sans Pro',
      'sans-serif',
    ].join(','),
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
            <Route path='/about' element={<About/>}/>
            <Route path='/data' element={<Data/>}/>
            <Route path='/bibliography' element={<Bibliography/>}/>
            <Route path='/' element={<MainPage />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
