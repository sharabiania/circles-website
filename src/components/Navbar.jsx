const logo = require('../assets/logo.png');

export default function Navbar() {
  return (
    <nav>
      <img src={logo} width={100} height={100} />
      <ul>
        <li><a className='anchor' href="#about">About</a></li>
        <li><a className='anchor' href="#team">Team</a></li>
        <li><a className='anchor' href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}