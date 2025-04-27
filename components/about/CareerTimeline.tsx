import TimelineItem from './TimelineItem';

export const EXPERIENCES = [
  {
    org: 'TheGoodGameTheory',
    url: 'https://thegoodgametheory.com',
    logo: '/static/images/experiences/tggt.png',
    start: 'Mar 2025',
    end: 'Present',
    title: 'ReactJS Developer Intern',
    icon: 'man-technologist',
    event: 'career-tggt',
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>li]:pl-0">
          <li>
            Contributed to a large-scale React.js project, collaborating with cross-functional teams to develop and optimize dynamic web applications.
          </li>
          <li>
            Implemented key features, improved performance, and enhanced user experience, showcasing strong problem-solving, coding, and teamwork skills in a real-world development environment.
          </li>
          <li>
            <strong>Technologies:</strong> ReactJS, NextJS, PhaserJS
          </li>
        </ul>
      );
    },
  },
  {
    org: 'Google Summer of Code',
    url: 'https://summerofcode.withgoogle.com',
    logo: '/static/images/experiences/gsoc.png',
    start: 'Feb 2025',
    end: 'Present',
    title: 'Open Source Contributor',
    icon: 'man-technologist',
    event: 'career-gsoc',
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>li]:pl-0">
          <li>
            Contributed to a globally recognized open-source project under Google Summer of Code, collaborating with experienced mentors to develop and optimize impactful software solutions.
          </li>
          <li>
            Implemented features, resolved critical issues, and improved code quality, demonstrating strong problem-solving, collaboration, and coding skills in a real-world development environment.
          </li>
          <li>
            <strong>Technologies:</strong> React, Next.js, Git & Github, Express, Node
          </li>
        </ul>
      );
    },
  },
  {
    org: 'Unified Mentors',
    url: 'https://unifiedmentors.com',
    logo: '/static/images/experiences/unified.png',
    start: 'Feb 2025',
    end: 'Apr 2025',
    title: 'Web Applications Engineering Intern',
    icon: 'man-technologist',
    event: 'career-um',
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>li]:pl-0">
          <li>
            Developed an EV Recharge Bunk platform using React, Node.js, and Firebase, improving user experience by 60% with real-time updates.
          </li>
          <li>
            Implemented slot booking, Google Maps API, and authentication, cutting EV station search time by 40% and optimizing backend for 30% faster API response.
          </li>
          <li>
            Enhanced UI/UX with cross-functional teams, boosting user engagement by 25%.
          </li>
          <li>
            <strong>Technologies:</strong> React, Node.js, Firebase, Google Maps API
          </li>
        </ul>
      );
    },
  },
  {
    org: 'SRM Institute of Science and Technology',
    url: 'https://www.srmist.edu.in',
    logo: '/static/images/experiences/srm.png',
    start: '2023',
    end: 'Present',
    title: 'Masters in Computer Application',
    icon: 'man-technologist',
    event: 'career-srm',
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>li]:pl-0">
          <li>
            Building and maintaining scalable web applications using the latest technologies. Collaborated with cross-functional teams to deliver high-quality solutions that meet business requirements.
          </li>
          <li>
            <strong>Focus Areas:</strong> Software Engineering, Full Stack Development
          </li>
          <li>
            <strong>Technologies:</strong> React, Next.js, MongoDB, Express, Node, Generative AI, AI-MLops
          </li>
        </ul>
      );
    },
  },
  {
    org: 'National Institute of Electronics & Information Technology',
    url: 'https://nielit.gov.in',
    logo: '/static/images/experiences/nielit.png',
    start: 'Aug 2021',
    end: 'Aug 2022',
    title: 'Business Ready Programmer',
    icon: 'man-technologist',
    event: 'career-nielit',
    details: () => {
      return (
        <ul className="[&>li]:my-2 [&>li]:pl-0">
          <li>
            Studied at National Institute of Electronics & Information Technology, gaining expertise in programming and problem-solving through hands-on projects and real-world challenges.
          </li>
          <li>
            <strong>Certification:</strong> 'O' level Certification in IOT
          </li>
        </ul>
      );
    },
  },
];

const CareerTimeline = () => (
  <ul className="m-0 list-none p-0">
    {EXPERIENCES.map((experience, idx) => (
      <li key={experience.url} className="m-0 p-0">
        <TimelineItem exp={experience} last={idx === EXPERIENCES.length - 1} />
      </li>
    ))}
  </ul>
);

export default CareerTimeline;
