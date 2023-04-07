import logo from './logo.svg';
import './App.css';

import Team from './components/team';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <p>
        Welcome to [company name], where we believe that psychedelics have the power to transform individuals, communities, and society as a whole. Our mission is to create a safe and welcoming space for the psychedelic community to connect, learn, and grow.
      </p>
      <p>
        At [company name], we offer a mobile application that provides information on upcoming psychedelic events and allows users to connect with like-minded individuals. Whether you're interested in attending a local psychedelic ceremony, participating in a group meditation, or simply learning more about the psychedelic experience, our app has you covered.
      </p>
      <p>
        Our team is made up of experienced professionals who are passionate about psychedelics and their potential for healing and personal growth. We are dedicated to providing accurate and up-to-date information about psychedelic events and resources, as well as creating a supportive community for all who are interested in exploring psychedelics.
      </p>
      <p>
        Thank you for considering [company name] for your psychedelic needs. We are excited to be a part of your journey towards self-discovery and personal transformation.
      </p>
      <Team />
    </div >
  );
}

export default App;
