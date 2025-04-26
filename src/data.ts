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
    'Amazon EC2',
    'AWS Lambda',
    'Amazon S3',
    'Amazon RDS',
    'Amazon VPC',
    'AWS IAM',
    'AWS CloudFront',
    'Amazon CloudWatch',
    'NPM',
],
  'Machine Learning & Libraries': [
    'Scikit-learn',
    'TensorFlow',
    'Keras',
    'PyTorch',
    'OpenCV',
    'NLTK',
    'SpaCy',
    'Pandas',
    'NumPy',
],
};


export const projects = [
  {
    title: 'Silent Care (Ongoing)',
    description: 'Developing a chatbot system to assist individuals with speech and hearing impairments using NLP and audio processing.',
    technologies: ['Python', 'NLP', 'TensorFlow', 'Speech-to-Text', 'Text-to-Speech', 'Flask', 'BERT','OpenCV'],
    features: [
      'Speech & Text Processing: Converts speech to text and vice versa for seamless communication.',
      'Emotion Recognition: Detects user emotions through text and voice input.',
      'AI-Powered Chatbot: Provides intelligent responses tailored for users with impairments.',
      'Multilingual Support: Supports multiple languages for broader accessibility.',
      'Web & Mobile Integration: Designed to work on both web and mobile platforms.',
    ],
    github: 'https://github.com/MdSaad07/Silent-Care',
  },
  {
    title: 'Malicious URL Detection',
    description: 'Developed a machine learning model to detect malicious URLs using Python.',
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
    title: 'Customer Lifetime Value Prediction',
    description: 'Developed a machine learning model to predict Customer Lifetime Value, enabling businesses to estimate future revenues.',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'Regression Analysis', 'Data Visualization'],
    github: 'https://github.com/MdSaad07/Customer-Lifetime-Value-Prediction',
  },
  {
    title: 'Housing Price Prediction',
    description: 'Created a system to analyze housing market trends and predict prices using Python-based ML algorithms, achieving 93% accuracy.',
    technologies: ['Python', 'Machine Learning', 'Exploratory Data Analysis', 'Regression Modeling'],
    github: 'https://github.com/MdSaad07/CodeClauseInternship_Housing-Price-Prediction',
  },
  {
    title: 'Student Exam Marks Indicator Prediction',
    description: 'Designed a model to predict student exam performance using academic and demographic factors.',
    technologies: ['Python', 'Classification Techniques', 'Data Preprocessing', 'Data Visualization'],
    github: 'https://github.com/MdSaad07/student-exam-performance-indicator-prediction',
  },
  {
    title: 'Rabin-Karp Algorithm Implementation 🔍',
    description: 'A React.js implementation of the Rabin-Karp Algorithm for pattern matching, intrusion detection, and plagiarism checking. The application provides a simple UI to input text and patterns, executing the Rabin-Karp algorithm for efficient string searching.',
    technologies: ['React.js', 'JavaScript'],
    features: [
      'Pattern Matching: Find occurrences of a pattern in a given text using the Rabin-Karp algorithm.',
      'Intrusion Detection: Detect suspicious patterns in a given text, useful for security applications.',
      'Plagiarism Check: Identify matching text fragments to check for possible plagiarism.',
    ],
    github: 'https://github.com/MdSaad07/Rabin-Karp-Algorithm', // Add the GitHub link if available
  },
  {
    title: 'Pass 1 Assembler Simulation',
    description: 'A web-based tool that simulates the first pass of an assembler, processing assembly code and generating symbol tables.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Node.js', 'Express.js', 'Multer'],
    features: [
      'Upload Operational Table and Input Assembly File.',
      'Process the files and generate Symbol Table.',
      'Interactive UI with Bootstrap styling.',
      'Backend processing using Node.js & Express.',
    ],
    github: 'https://github.com/MdSaad07/Pass1_Assembler', // Add the GitHub link if available
  },
  {
    title: 'Dicee Game',
    description: 'A simple web-based dice game where two players roll dice, and the higher roll wins. Refresh the page to roll the dice again.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    features: [
      'Two-player dice rolling game.',
      'Randomized dice rolls on refresh.',
      'Simple and clean UI.',
    ],
    github: 'https://github.com/MdSaad07/The-Dice-Game', // Add the GitHub link if available
  },
  {
    title: 'Drum Kit 🥁',
    description: 'A simple and interactive Drum Kit web application that allows users to play drum sounds by clicking on buttons or pressing corresponding keys on the keyboard.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    features: [
      'Responsive and interactive drum buttons.',
      'Play drum sounds by clicking buttons.',
      'Play drum sounds using keyboard keys.',
      'Simple and clean user interface.',
      'Smooth animations when keys or buttons are pressed.',
    ],
    github: 'https://github.com/MdSaad07/Drum-Kit', // Add the GitHub link if available
  },
  
  {
    title: 'Dice Rolling App',
    description: 'Developed a Flutter app that simulates rolling a dice.',
    technologies: ['Flutter'],
    features: [
      'User Interaction: Roll the dice by clicking a button.',
      'Randomization: Generates a random number to display a dice face.',
      'User Interface: Clean and simple design with smooth animations.',
    ],
    github: 'https://github.com/MdSaad07/Dice-Roller-using-Flutter',
  },
  
  {
    title: 'Vehicle Intersection Simulation',
    description: 'Designed a web-based simulation for vehicle movement at intersections using JavaScript with traffic logic and real-time animations.',
    technologies: ['JavaScript', 'Collision Detection', 'Animation', 'Traffic Optimization'],
    github: 'https://github.com/MdSaad07/Vehicle-Intersection-Simulation',
  },
  {
    title: 'Calculator',
    description: 'Designed an intuitive user interface with HTML5 and CSS, ensuring a visually appealing and responsive layout.',
    technologies: ['HTML5', 'CSS', 'JavaScript'],
    github: 'https://github.com/MdSaad07/Calculator',
  },
  {
    title: 'Burger Kings Landing Page',
    description: 'Developed a responsive and visually engaging landing page for Burger King using HTML5 and CSS.',
    technologies: ['HTML5', 'CSS'],
    github: 'https://github.com/MdSaad07/Burger-King',
  },
  {
    title: 'Starbucks Landing Page',
    description: 'Designed a modern and responsive landing page for Starbucks using HTML5 and CSS.',
    technologies: ['HTML5', 'CSS'],
    github: 'https://github.com/MdSaad07/Starbucks-clone',
  },
];


// export const projects = [
//   { name: "Malicious URL Detection", description: "Developed a machine learning model to detect malicious URLs.", link: "#" },
//   { name: "Exam Performance Prediction", description: "Built a model to predict student exam performance using Python.", link: "#" },
//   { name: "Mental Health Chatbot", description: "Created an NLP-based chatbot to assist users with mental health concerns.", link: "#" },
// ];

export const experience = [{
  role: 'Software Developer Intern',
  company: 'ThamZeal International LLP (in collaboration with XyberAI LLC, USA)',
  location: 'Remote',
  duration: 'March 2025 - Present',
  achievements: [
    'Develop and maintain scalable backend systems using Node.js and Express.js, including RESTful API development.',
    'Deploy backend services and manage version control workflows using Git for continuous integration and delivery.',
    'Contribute to and build dynamic, responsive frontend interfaces using React.js.',
    'Implement AI-driven functionalities using Python, focusing on optimal model selection for machine learning solutions.',
    'Collaborate with international cross-functional teams to deliver intelligent digital platforms across cloud automation, social media, and cybersecurity.',
    'Gain hands-on experience in full-stack development and real-world AI integration within a performance-driven, remote environment.',
  ],
},
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
    cgpa: '7.18/10',
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

export const research = [
  {
    title: 'Silent Care (Ongoing)',
    field: 'Assistive Technology & AI',
    year: '2025',
    highlights: [
      'Developing a communication system for individuals with speech and hearing impairments.',
      'Integrating AI-powered sign language recognition and text-to-speech conversion.',
      'Aiming to enhance accessibility and real-time communication through deep learning and NLP.',
    ],
    contributors: [  // ✅ FIXED from contributor to contributors
      {
        name: 'Mohammed Armaan Khan',
        email: 'mailto:iamarmaan312@gmail.com',
      },
      {
        name: 'Mohammed Fauzaan Zaki Meccai',
        email: 'mailto:fauzaan269@gmail.com',
      },
      {
        name: 'Mohammed Kaifulla Kazim',
        email: 'mailto:kaifullakazim@gmail.com',
      },
      {
        name: 'Mohammed Saad Fazal',
        email: 'mailto:mdsaad7803@gmail.com',
      },
    ],
    link: '',
  },
  {
    title: 'Emergency Clearance System (Ongoing)',
    field: 'Smart Traffic Management & IoT',
    year: '2025',
    highlights: [
      'Building an AI-driven system to optimize emergency vehicle movement in urban traffic.',
      'Using computer vision and IoT-enabled traffic signals for dynamic route clearance.',
      'Implementing real-time monitoring to reduce emergency response time significantly.',
    ],
    contributors: [  // ✅ FIXED from contributor to contributors
      {
        name: 'Mohammed Kaifulla Kazim',
        email: 'mailto:kaifullakazim@gmail.com',
      },
      {
        name: 'Mohammed Saad Fazal',
        email: 'mailto:mdsaad7803@gmail.com',
      },
    ],
    link: '',
  },
];


