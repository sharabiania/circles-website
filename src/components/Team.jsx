const shahin = require('../assets/shahin.jpg');
const ali = require('../assets/ali.jpg');

export default function Team({ companyName }) {
  return (<>
    <h1 id="team">Meet the Team</h1>
    <p>
      At {companyName}, our team is made up of passionate and experienced professionals who are dedicated to supporting the spiritual community. Here are a few of the people who make our mission possible:
    </p>
    <img className="team-profile-pic" src={shahin} width={50} />
    <p>
      Dr. Shahin Vakilinia, CEO and Co-Founder: our esteemed CEO and visionary leader at ArchangX. Shahin's dynamic background and extensive experience underscore his unique ability to fuse technical proficiency with a profound understanding of spirituality, steering our company towards transformative innovations.
    </p>
    <p>
      Shahin Vakilinia, an accomplished professional in artificial intelligence and software development, consistently showcases a commitment to pioneering solutions that leverage technology for personal growth and spiritual exploration. His leadership is rooted in a deep conviction of the harmonious integration of advanced AI and spirituality, positioning ArchangX at the forefront of redefining self-discovery.
    </p>
    <img className="team-profile-pic" src={ali} width={50} />
    <p>
      Ali Sharabiani, CTO and Co-Founder: Ali is a skilled software developer and entrepreneur who is passionate about using technology to support positive social change. He has extensive experience in building mobile applications and is dedicated to creating a user-friendly and engaging platform for the community.
    </p>
       
  </>
  );
}