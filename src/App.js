
import './App.css';

import Team from './components/Team';
import Company from './components/Company';
import Contact from './components/Contact';
import Navbar from './components/Navbar';



function App() {
  const companyName = "Circles & Cycles";
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Company companyName={companyName} />
        <Team companyName={companyName} />
        <Contact companyName={companyName} email="info@circles-n-cycles.com"/>
      </header>
    </div >
  );
}

export default App;
