import type { Project } from '@/types/data';

const projectsData: Project[] = [
  {
    type: 'work',
    title: 'Airbnb Application',
    description:
      'Full-stack Airbnb clone with MERN, Tailwind, Shadcn, JWT auth, Google login, and Cloudinary integration',
    imgSrc: '/static/images/projects/airbnb.png',
    url: 'https://ease-nest.netlify.app/',
    builtWith: ['ReactJs', 'NodeJs', 'ExpressJs', 'MongoDB', 'TailwindCSS', 'JWT', 'Cloudinary', 'Google cloud'],
  },
  {
    type: 'work',
    title: 'TraviAI - AI Powered Travel Companion',
    description:
      'TraviAI is an AI-based travel planning application designed to make trip planning easier and more efficient.',
    imgSrc: '/static/images/projects/traviai.png',
    builtWith: ['React', 'TailwindCSS', 'Google Cloud', 'Gemini AI', 'Firebase', 'Auth0', 'React Hot Toast'],
  },
  {
    type: 'self',
    title: 'AI Powered Multi PDF Chatbot',
    description:
      'An AI-powered multi-PDF chatbot that allows users to ask questions about their PDF documents using natural language queries.',
    imgSrc: '/static/images/projects/LLMAgents.png',
    repo: 'anshulydv/anshul.dev',
    builtWith: ['Streamlit', 'Google Gemini AI', 'Python', 'LangChain', 'PyPDF2', 'FAISS', 'Python dotenv'],
  },
  {
    type: 'self',
    title: 'Football Match Analysis System',
    description:
      'A football match analysis system that allows users to analyze football matches and get insights from the data.',
    imgSrc: '/static/images/projects/football.png',
    repo: 'anshulydv/Website-Selling-Food',
    builtWith: ['Python', 'Ultralytics', 'Tensorflow', 'OpenCV', 'Keras', 'NumPy', 'Roboflow', 'Supervision', 'Matplotlib', 'Scikit-learn'],
  },
  {
    type: 'self',
    title: 'DripiFY - Fashion E-commerce Platform',
    description:
      'A fashion e-commerce platform that allows users to buy and sell fashion products.',
    imgSrc: '/static/images/projects/e-com.png',
    repo: 'anshulydv/geometry-simulation',
    builtWith: ['ReactJS', 'NextJS', 'TailwindCSS'],
  },
];

export default projectsData;
