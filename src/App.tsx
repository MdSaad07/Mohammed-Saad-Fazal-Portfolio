import React, { useState, useEffect } from "react";
import saadImage from "../src/images/saad.png";

import {
  Github,
  Linkedin,
  Mail,
  Phone,
  User,
  Download,
  BookOpen,
  // ExternalLink,
  MapPin,
  Calendar,
  Briefcase,
  GraduationCap,
  Award,
} from "lucide-react";
import { ThemeToggle } from "./components/ThemeToggle";
import { projects, skills, experience,research, education } from "./data";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return (
      savedTheme === "dark" ||
      (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      <div className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 animate-gradient">
        {/* Header */}
        <header className="header fixed top-0 w-full backdrop-blur-md bg-white/70 dark:bg-gray-800/70 shadow-sm z-50">
          <nav className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 animate-pu lse to-purple-600 bg-clip-text text-transparent animate-fade-in">
                Mohammed Saad Fazal
              </h1>

              {/* Hamburger Menu for Mobile */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                </button>
              </div>

              {/* Navigation Links */}
              <div
                className={`${
                  isMenuOpen ? "block" : "hidden"
                } md:flex md:items-center md:space-x-6`}
              >
                <a
                  href="#about"
                  className="block mt-4 md:mt-0 hover:text-blue-400 dark:text-white dark:hover:text-blue-400 transition-colors font-mono"
                >
                  About
                </a>
                <a
                  href="#skills"
                  className="block mt-4 md:mt-0 hover:text-blue-400 dark:text-white dark:hover:text-blue-400 transition-colors font-mono"
                >
                  Skills
                </a>
                <a
                  href="#experience"
                  className="block mt-4 md:mt-0 hover:text-blue-400 dark:text-white dark:hover:text-blue-400 transition-colors font-mono"
                >
                  Experience
                </a>
                <a
                  href="#education"
                  className="block mt-4 md:mt-0 hover:text-blue-400 dark:text-white dark:hover:text-blue-400 transition-colors font-mono"
                >
                  Education
                </a>
                <a
                  href="#projects"
                  className="block mt-4 md:mt-0 hover:text-blue-400 dark:text-white dark:hover:text-blue-400 transition-colors font-mono"
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className="block mt-4 md:mt-0 hover:text-blue-400 dark:text-white dark:hover:text-blue-400 transition-colors font-mono"
                >
                  Contact
                </a>
                <a
                  href="https://drive.google.com/file/d/1LuGrLdfxCpdgggCneX05PZBR4fiVf1bh/view?usp=sharing"
                  download="Mohammed Saad Fazal.pdf"
                  className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition animate-pulse mt-4 md:mt-0"
                >
                  <Download className="mr-2" size={20} />
                  Download Resume
                </a>
                <ThemeToggle
                  darkMode={darkMode}
                  toggleDarkMode={toggleDarkMode}
                />
              </div>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main className="relative">
          {/* Hero Section */}
          <section id="about" className="pt-32 pb-16 px-6">
            <div className="container mx-auto max-w-4xl animate-slide-up">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Hi, I'm Mohammed Saad Fazal
                  </h1>
                  <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
                    Full Stack Developer and Data Science enthusiast passionate
                    about building innovative, scalable solutions. Experienced
                    in AI, cloud technologies, and data-driven decision-making,
                    with a strong focus on problem-solving and optimizing user
                    experiences.
                  </p>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/MdSaad07"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors dark:text-white dark:hover:text-blue-400 dark:hover:animate-bounce hover:animate-bounce"
                    >
                      <Github
                        className="transform hover:scale-110 transition-transform"
                        size={24}
                      />
                    </a>
                    <a
                      href="www.linkedin.com/in/msaadf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors dark:text-white dark:hover:text-blue-400 dark:hover:animate-bounce hover:animate-bounce"
                    >
                      <Linkedin
                        className="transform hover:scale-110 transition-transform"
                        size={24}
                      />
                    </a>
                    <a
                      href="mailto:mdsaad7803@gmail.com"
                      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors dark:text-white dark:hover:text-blue-400 dark:hover:animate-bounce hover:animate-bounce"
                    >
                      <Mail
                        className="transform hover:scale-110 transition-transform"
                        size={24}
                      />
                    </a>
                    <a
                      href="tel:+918296712616"
                      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors dark:text-white dark:hover:text-blue-400 dark:hover:animate-bounce hover:animate-bounce"
                    >
                      <Phone
                        className="transform hover:scale-110 transition-transform"
                        size={24}
                      />
                    </a>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                    <img
                      src={saadImage}
                      alt="Profile"
                      className="relative rounded-full w-48 h-48 md:w-64 md:h-64 object-cover mx-auto transform group-hover:scale-105 transition duration-200"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section
            id="skills"
            className="py-16 px-6 bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm"
          >
            <div className="container mx-auto max-w-4xl">
              <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Technical Skills
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 dark:text-blue-300">
                {Object.entries(skills).map(([category, items], index) => (
                  <div
                    key={category}
                    className="p-6 rounded-lg bg-white/50 dark:hover:bg-blue-900/70 hover:bg-blue-100/70 dark:bg-gray-800/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    <h3 className="text-xl font-semibold mb-4">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 rounded-full bg-blue-100 dark:text-white dark:bg-blue-900/50 text-blue-1000 dark:text-blue-100 hover:scale-105 transition-transform dark:hover:bg-blue-900/70 hover:bg-blue-900/70"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="py-16 px-6">
            <div className="container mx-auto max-w-4xl">
              <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Internship Experience
              </h2>
              <div className="space-y-8">
                {experience.map((job, index) => (
                  <div
                    key={job.company}
                    className="p-6 rounded-lg bg-white/50  hover:bg-blue-100/70 dark:text-blue-300 dark:bg-gray-800/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full  bg-blue-100  dark:bg-blue-900/70">
                        <Briefcase
                          className="text-blue-600  dark:text-blue-100"
                          size={24}
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold">{job.role}</h3>
                        <p className="text-gray-600  dark:text-gray-300 mb-2 dark:text-blue-500">
                          {job.company}
                        </p>
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                          <Calendar size={16} className="mr-2" />
                          {job.duration}
                        </div>
                        <ul className="space-y-2">
                          {job.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start">
                              <span className="mr-2 text-blue-600 dark:text-blue-400">
                                •
                              </span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section
            id="education"
            className="py-16 px-6 bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm"
          >
            <div className="container mx-auto max-w-4xl">
              <h2 className="text-3xl font-bold mb-8 dark:text-purple-800 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Education
              </h2>
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div
                    key={edu.degree}
                    className="p-6 rounded-lg dark:text-white bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 dark:hover:bg-purple-900/70 hover:bg-purple-100/70"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900/50 ">
                        <GraduationCap
                          className="text-purple-600 dark:hover:animate-fade-in dark:text-purple-400"
                          size={24}
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold">{edu.degree}</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-2">
                          {edu.institution}
                        </p>
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                          <Calendar size={16} className="mr-2" />
                          {edu.duration}
                          <span className="mx-2">•</span>
                          <Award size={16} className="mr-2" />
                          CGPA/Percentage: {edu.cgpa}
                        </div>

                        {edu.courses && edu.courses.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {edu.courses.map((course, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 text-sm rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:hover:bg-purple-900/70 hover:bg-purple-500/70 dark:hover:bg-purple-100/70 dark:text-purple-100"
                              >
                                {course}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section
            id="projects"
            className="py-16 px-6 bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm"
          >
            <div className="container mx-auto max-w-4xl">
              <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Projects
              </h2>
              <div className="relative overflow-hidden">
                <div
                  className="flex space-x-6 overflow-x-scroll scrollbar-hide snap-x"
                  id="projectSlider"
                >
                  {projects.map((project) => (
                    <div
                      key={project.title}
                      className="p-6 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 min-w-[300px] snap-center dark:hover:bg-blue-900/70 hover:bg-blue-100/70"
                    >
                      <h3 className="text-xl font-semibold mb-2 dark:text-white">
                        {project.title}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-600/70 hover:bg-blue-600/70 text-blue-800 dark:text-blue-100 hover:scale-105 transition-transform"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          GitHub
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800/50  fa-2x text-white p-2 rounded-full shadow-lg hover:bg-gray-900/70"
                  onClick={() =>
                    document
                      .getElementById("projectSlider")
                      .scrollBy({ left: -300, behavior: "smooth" })
                  }
                >
                  ◀
                </button>
                <button
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800/50  text-white p-2 rounded-full shadow-lg hover:bg-gray-900/70"
                  onClick={() =>
                    document
                      .getElementById("projectSlider")
                      .scrollBy({ left: 300, behavior: "smooth" })
                  }
                >
                  ▶
                </button>
              </div>
            </div>
          </section>
          
          {/* Research Section */}  
          <section id="research" className="py-16 px-6">
  <div className="container mx-auto max-w-4xl">
    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
      Research & Publications
    </h2>
    <div className="space-y-8">
      {research.map((project, index) => (
        <div
          key={project.title}
          className="p-6 rounded-lg bg-white/50 hover:bg-green-100/70 dark:text-green-300 dark:bg-gray-800/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-full bg-green-100 dark:bg-green-900/70">
              <BookOpen className="text-green-600 dark:text-green-100" size={24} />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">{project.field}</p>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                <Calendar size={16} className="mr-2" />
                {project.year}
              </div>
              <ul className="space-y-2">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2 text-green-600 dark:text-green-400">•</span>
                    {highlight}
                  </li>
                ))}
              </ul>
              {/* Contributors Section */}
              {project.contributors && project.contributors.length > 0 && (
                <div className="mt-4">
                  <h4 className="text-lg font-semibold text-green-700 dark:text-green-400">Contributors:</h4>
                  <ul className="space-y-1">
                    {project.contributors.map((contributor, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-700 dark:text-gray-300">
                        <User size={16} className="mr-2 text-green-500 dark:text-green-300" />
                        <a href={contributor.email} className="hover:underline text-green-600 dark:text-green-400">
                          {contributor.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {/* Research Paper Link */}
              {project.link && (
                <div className="mt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 dark:text-green-400 hover:underline"
                  >
                    View Research Paper
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
    {/* Collaboration Invitation Section */}
    <div className="mt-12 text-center">
      <p className="text-lg text-gray-800 dark:text-gray-300">
        If you would like to collaborate on a research project, please feel free to{' '}
        <a
          href="mailto:mdsaad7803@gmail.com"
          className="text-green-600 dark:text-green-400 font-semibold hover:underline"
        >
          contact me
        </a>.
      </p>
    </div>
  </div>
</section>


          {/* <section
            id="testimonials"
            className="py-16 px-6 bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm"
          >
            <div className="container mx-auto max-w-4xl">
              <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Testimonials
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.name}
                    className="p-6 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      "{testimonial.feedback}"
                    </p>
                    <div className="flex items-center gap-4">
                      {testimonial.image && (
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 object-cover rounded-full"
                        />
                      )}
                      <h3 className="text-lg font-semibold">
                        {testimonial.name}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section> */}

          {/* Contact Section */}
          <section id="contact" className="py-16 px-6">
            <div className="container mx-auto max-w-4xl">
              <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Get in Touch
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-6 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-lg">
                  <h3 className="text-xl font-semibold mb-4 dark:text-white">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    <a
                      href="mailto:mdsaad7803@gmail.com"
                      className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <Mail size={20} />
                      <span>mdsaad7803@gmail.com</span>
                    </a>
                    <a
                      href="tel:+1234567890"
                      className="flex items-center space-x-3 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <Phone size={20} />
                      <span>+91 82967 12616</span>
                    </a>
                    <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
                      <MapPin size={20} />
                      <span>Bengaluru, India</span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <h4 className="font-semibold mb-3 dark:text-white">
                      Connect with me
                    </h4>
                    <div className="flex space-x-4">
                      <a
                        href="https://github.com/MdSaad07"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                      >
                        <Github size={24} />
                      </a>
                      <a
                        href="www.linkedin.com/in/msaadf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                      >
                        <Linkedin size={24} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-lg">
                  <form className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-700/50 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 outline-none transition-colors"
                        placeholder="Your message"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-gradient-to-r dark:hover:animate-ping from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="py-8 px-6 backdrop-blur-md bg-white/30 dark:bg-gray-800/30">
          <div className="container mx-auto max-w-4xl text-center">
            <p className="text-gray-600 dark:text-gray-300">
              © {new Date().getFullYear()} Mohammed Saad Fazal. All rights
              reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
