import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';


export default function Footing({ companyName }) {
  return (
    <footer>
     
       
        <ul className="social-icons" style={{padding: '0'}}>
          <li><a className="link" href="[insert social media link]"><FontAwesomeIcon icon={faYoutube} beat /></a></li>
          <li><a className="link" href="[insert social media link]"><FontAwesomeIcon icon={faFacebook} beat/></a></li>
          <li><a className="link" href="[insert social media link]"><FontAwesomeIcon icon={faTwitter} beat /></a></li>
          <li><a className="link" href="[insert social media link]"><FontAwesomeIcon icon={faInstagram} color='#fba161' beat/></a></li>
        </ul>
     
      <div >
        <p>Copyright © 2023 {companyName}.
          All rights reserved.</p>
      </div>

    </footer>
  );
}