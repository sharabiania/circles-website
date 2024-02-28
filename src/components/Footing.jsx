import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';


export default function Footing({ companyName }) {
  const icons = [
    { icon: faYoutube, link: '[insert youtube link]' },
    { icon: faFacebook, link: '[insert facebook link]' },
    { icon: faTwitter, link: '[insert twitter link]' },
    { icon: faInstagram, link: '[insert instagram link]' },
  ];

  return (
    <footer>
     <ul className="social-icons" style={{ padding: '0' }}>
      {icons.map((social, index) => (
        <li key={index} >
          <a className="link" href={social.link}>
            <FontAwesomeIcon icon={social.icon} beat style={{ animationDelay: `${index * 0.2}s`, animationDuration: '2s' }}/>
          </a>
        </li>
      ))}
    </ul>

      <div >
        <p>Copyright © {(new Date()).getFullYear()} {companyName}.
          All rights reserved.</p>
      </div>

    </footer>
  );
}