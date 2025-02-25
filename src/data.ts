export const skills = {
  'Programming Languages': [
    'C',
    'Python',
    'Java (Elementary)',
    'JavaScript',
    'Dart',
    'Shell Script',
    'SQL',
  ],
  'Frameworks & Databases': [
    'Flask',
    'Node.js',
    'React.js',
    'React Router',
    'App Router',
    'MongoDB',
    'MySQL',
  ],
  'Frontend Development & UI Design': [
    'HTML5',
    'CSS3',
    'Bootstrap',
    'Tailwind CSS',
    'MUI',
    'Flexbox',
    'Flutter',
    'Figma',
    'Canva',
  ],
  'Tools & Platforms': [
    'Git',
    'GitHub Pages',
    'Postman',
    'Netlify',
    'Windows Terminal',
    'PowerShell',
    'Filmora',
    'Adobe Photoshop',
  ],
  'Operating Systems & Infrastructure': [
    'Linux',
    'Arduino',
  ],
  'Deployment, Cloud & Version Control': [
    'Amazon Web Services (AWS)',
    'NPM',
  ],
  'Machine Learning & Libraries': [
    'Scikit-learn',
  ],
};

export const projects = [
  {
    title: 'Malicious URL Detection',
    description: 'Developed a machine learning model to detect malicious URLs using Python.',
    image: '/images/mud.jpg',
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'REST API'],
    features: [
      'Data Collection & Preprocessing: Gathered and cleaned a dataset of URLs.',
      'Feature Engineering: Extracted relevant features from URLs for model input.',
      'Model Training & Evaluation: Trained various classifiers and optimized for accuracy, precision, and recall.',
      'Exception Handling: Implemented robust error handling.',
      'Evaluating the URL: Used REST APIs to categorize URLs.',
    ],
    github: 'https://github.com/MdSaad07/Malicious-URL-detection',
  },
  {
    title: 'Dice Rolling App',
    description: 'Developed a Flutter app that simulates rolling a dice.',
    image: '/images/dice.png',
    technologies: ['Flutter'],
    features: [
      'User Interaction: Roll the dice by clicking a button.',
      'Randomization: Generates a random number to display a dice face.',
      'User Interface: Clean and simple design with smooth animations.',
    ],
    github: 'https://github.com/MdSaad07/Dice-Roller-using-Flutter',
  },
];

export const experience = [
  {
    role: 'Data Science Intern',
    company: 'CodeClause',
    location: 'Bengaluru, India',
    duration: 'October 2024 - November 2024',
    achievements: [
      'Gained hands-on experience in Python and machine learning.',
      'Preprocessed and cleaned real-world datasets for machine learning projects.',
      'Implemented and evaluated machine learning models using Python libraries like scikit-learn and TensorFlow.',
      'Analyzed model performance metrics to understand strengths and weaknesses.',
    ],
  },
  {
    role: 'Web Developer Intern',
    company: 'addiTLabs',
    location: 'Bengaluru, India',
    duration: 'August 2023 - September 2023',
    achievements: [
      'Designed and developed responsive, user-friendly websites using HTML, CSS, JavaScript, and React.js.',
      'Gained hands-on experience in modern web development practices and problem-solving.',
    ],
    techStack: [
      'React.js',
      'HTML',
      'CSS',
      'Figma',
      'REST API',
      'Postman',
      'MUI',
      'React Router',
    ],
  },
];

export const education = [
  {
    degree: 'Bachelor of Technology in Computer Science',
    institution: 'Dayananda Sagar University',
    duration: '2021 - 2025',
    cgpa: '7.14/10',
    courses: [
      'Data Structures',
      'Software Engineering and Project Management',
      'DBMS',
      'OOPS',
      'Computational Thinking with Python',
      'Machine Learning',
      'Statistical Tools and Techniques of Data Science',
      'Machine Learning for Healthcare',
      'Probability and Statistics',
      'Programming Using R',
      'AWS',
    ],
  },
  {
    degree: '12th: Physics, Chemistry, Maths & Computer Science',
    institution: 'The Oxford Senior Secondary School',
    duration: '2020 - 2021',
    cgpa: '85%',
    courses: ['Python Programming', 'SQL', 'HTML & CSS', 'Django'],
  },
  {
    degree: '10th',
    institution: 'International Indian School Dammam',
    duration: '2018 - 2019',
    cgpa: '76.6%',
  },
];

export const hackathons = [
  {
    name: 'Global Tech Hackathon 2023',
    description: 'Built a real-time traffic management system using IoT sensors and ML',
    achievement: '1st Place Winner',
  },
];

export const testimonials = [
  {
    name: 'Dr. Jane Smith',
    role: 'Professor, Tech University',
    text: 'Mohammed Saad Fazal is one of the most talented and dedicated students I have had the pleasure of teaching.',
  },
  {
    name: 'Alex Johnson',
    role: 'Senior Developer, Tech Corp',
    text: 'Working with Mohammed Saad Fazal has been incredible. His problem-solving skills and attention to detail are outstanding.',
  },
];
