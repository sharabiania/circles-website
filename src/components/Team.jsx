const shahin = require('../assets/shahin.jpg');
const ali = require('../assets/ali.jpg');
const mahdi = require('../assets/mahdi.jpg');

export default function Team({ companyName }) {
  return (<>
    <h1 id="team">Meet the Team</h1>
    <p>
      At {companyName}, our team is made up of passionate and experienced professionals who are dedicated to supporting the psychedelic community. Here are a few of the people who make our mission possible:
    </p>
    <img class="team-profile-pic" src={shahin} width={50} />
    <p>
      Dr. Shahin Vakilinia, CEO and Co-Founder: Dr. Vakilinia is a licensed psychologist and experienced researcher who specializes in the therapeutic use of psychedelics. He is committed to advancing the field of psychedelic therapy and creating a safe and supportive community for all who are interested in exploring psychedelics.
    </p>
    <img class="team-profile-pic" src={ali} width={50} />
    <p>
      Ali Sharabiani, CTO and Co-Founder: Ali is a skilled software developer and entrepreneur who is passionate about using technology to support positive social change. He has extensive experience in building mobile applications and is dedicated to creating a user-friendly and engaging platform for the psychedelic community.
    </p>
    <img class="team-profile-pic" src={mahdi} width={50} />
    <p>
      Mehdi Maghrouni, Community Manager: Mehdi is a community builder and activist who is passionate about creating safe and inclusive spaces for marginalized groups. He is committed to fostering a welcoming and supportive community for all who are interested in psychedelics, regardless of their background or experience level.
    </p>
    <p>
      Together, our team is dedicated to supporting the psychedelic community and advancing the field of psychedelic therapy. We are excited to be a part of this growing movement and look forward to connecting with you.
    </p>
  </>
  );
}