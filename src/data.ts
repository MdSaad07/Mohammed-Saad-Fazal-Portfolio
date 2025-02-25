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
    image: 'src/images/mud.jpg',
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
    image: 'src/images/dice.png',
    technologies: ['Flutter'],
    features: [
      'User Interaction: Roll the dice by clicking a button.',
      'Randomization: Generates a random number to display a dice face.',
      'User Interface: Clean and simple design with smooth animations.',
    ],
    github: 'https://github.com/MdSaad07/Dice-Roller-using-Flutter',
  },
  {
    title: 'Customer Lifetime Value Prediction',
    description: 'Developed a machine learning model to predict Customer Lifetime Value, enabling businesses to estimate future revenues.',
    image: 'src/images/clv.jpg',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'Regression Analysis', 'Data Visualization'],
    github: 'https://github.com/MdSaad07/Customer-Lifetime-Value-Prediction',
  },
  {
    title: 'Housing Price Prediction',
    description: 'Created a system to analyze housing market trends and predict prices using Python-based ML algorithms, achieving 93% accuracy.',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=400&fit=crop',
    technologies: ['Python', 'Machine Learning', 'Exploratory Data Analysis', 'Regression Modeling'],
    github: 'https://github.com/MdSaad07/CodeClauseInternship_Housing-Price-Prediction',
  },
  {
    title: 'Student Exam Marks Indicator Prediction',
    description: 'Designed a model to predict student exam performance using academic and demographic factors.',
    image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=400&fit=crop',
    technologies: ['Python', 'Classification Techniques', 'Data Preprocessing', 'Data Visualization'],
    github: 'https://github.com/MdSaad07/student-exam-performance-indicator-prediction',
  },
  {
    title: 'Vehicle Intersection Simulation',
    description: 'Designed a web-based simulation for vehicle movement at intersections using JavaScript with traffic logic and real-time animations.',
    image: 'src/images/realtime.png',
    technologies: ['JavaScript', 'Collision Detection', 'Animation', 'Traffic Optimization'],
    github: 'https://github.com/MdSaad07/Vehicle-Intersection-Simulation',
  },
  {
    title: 'Calculator',
    description: 'Designed an intuitive user interface with HTML5 and CSS, ensuring a visually appealing and responsive layout.',
    image: 'src/images/calculator.png',
    technologies: ['HTML5', 'CSS', 'JavaScript'],
    github: 'https://github.com/MdSaad07/Calculator',
  },
  {
    title: 'Burger Kings Landing Page',
    description: 'Developed a responsive and visually engaging landing page for Burger King using HTML5 and CSS.',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=400&fit=crop',
    technologies: ['HTML5', 'CSS'],
    github: 'https://github.com/MdSaad07/Burger-King',
  },
  {
    title: 'Starbucks Landing Page',
    description: 'Designed a modern and responsive landing page for Starbucks using HTML5 and CSS.',
    image: 'src/images/starbucks.png',
    technologies: ['HTML5', 'CSS'],
    github: 'https://github.com/MdSaad07/Starbucks-clone',
  },
];


// export const projects = [
//   { name: "Malicious URL Detection", description: "Developed a machine learning model to detect malicious URLs.", link: "#" },
//   { name: "Exam Performance Prediction", description: "Built a model to predict student exam performance using Python.", link: "#" },
//   { name: "Mental Health Chatbot", description: "Created an NLP-based chatbot to assist users with mental health concerns.", link: "#" },
// ];

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
      'AWS'
    ],
  },
  {
    degree: '12th: Physics, Chemistry, Maths & Computer Science',
    institution: 'The Oxford Senior Secondary School',
    duration: '2020 - 2021',
    cgpa: '85%',
    courses: [
      'Python Programming',
      'SQL',
      'HTML & CSS',
      'Django',
    ],
  },
  {
    degree: '10th',
    institution: 'International Indian School Dammam',
    duration: '2018 - 2019',
    cgpa: '76.6%',
    courses: [
    ],
  }
  // Add more education...
];

export const hackathons = [
  {
    name: 'Global Tech Hackathon 2023',
    description: 'Built a real-time traffic management system using IoT sensors and ML',
    achievement: '1st Place Winner',
  },
  // Add more hackathons...
];

export const testimonials = [
  {
    name: 'Dr. Jane Smith',
    role: 'Professor, Tech University',
    text: 'John is one of the most talented and dedicated students I have had the pleasure of teaching.',
  },
  {
    name: 'Alex Johnson',
    role: 'Senior Developer, Tech Corp',
    text: 'Working with John has been incredible. His problem-solving skills and attention to detail are outstanding.',
  },
  // Add more testimonials...
];