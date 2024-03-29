
import './App.css';

import Team from './components/Team';
import Company from './components/Company';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footing from './components/Footing';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#0971f1',
      darker: '#053e85',
    },
    secondary: {
      main: '#fba161'
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
});


function App() {
  const companyName = "ArchangX";
  return (
    <ThemeProvider theme={theme} >
      <div className="App">
        <header className="App-header">
          <Navbar />
          <div style={{ padding: '15px' }}>
            <Company companyName={companyName} />
            <Team companyName={companyName} />
            <Contact companyName={companyName} email="info@archangx.com" />
          </div>
        </header>
        <Footing />
      </div >
    </ThemeProvider>
  );
}

export default App;
