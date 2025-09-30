// MAIN COMPONENTS
import TextType from "./components/TextType";
import Squares from "./components/Squares";
import Header from "./components/header";
import Footer from "./components/footer";

import AboutMeTerminal from "./components/aboutme";
import Projects from "./pages/projects";
import ResumeDownload from "./components/resume";

// STYLES
import "./App.css";

// ICONS
import { Linkedin, Github, Instagram, Mail } from "lucide-react";

function App() {
  return (
    <div className="relative w-full h-screen">
      {/* Background squares */}
      <div className="absolute inset-0 -z-10">
        <Squares
          speed={0.2}
          squareSize={100}
          direction="diagonal"
          borderColor="#271e37"
          hoverFillColor="#222"
        />
      </div>

      {/* Foreground content */}
      <div
        className="main relative z-10 flex items-center justify-center h-full"
        id="home"
      >
        <div className="hero-text">
          <TextType
            text={["Z:\\ Hi, I'm Zijie!"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="_"
          />
        </div>
      </div>
      <Header />
      <div className="h-[60px]" id="about"></div>
      <div className="flex items-center justify-center mt-8 mb-8">
        <AboutMeTerminal
          name="Jin (ttiramisu) Zijie"
          role="Web Developer | Python"
          description="I'm a leader and web developer with a love for creating innovative solutions. I enjoy working on web development and Python "
          imageUrl="/me.jpg"
          typingSpeed={40}
        />
      </div>
      <div className="flex flex-col items-center justify-center text-violet-400 text-xl gap-4 mb-4">
        Reach me here:
        <div className=" flex text-gray-200 text-4xl">
          <a
            href="https://www.linkedin.com/in/jin-zijie"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4 hover:text-violet-300 transition-colors duration-300 social-icons"
          >
            <Github size={36} />
          </a>
          <a
            href="https://www.linkedin.com/in/jin-zijie"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4 hover:text-violet-300 transition-colors duration-300 social-icons"
          >
            <Linkedin size={36} />
          </a>
          <a
            href="https://www.linkedin.com/in/jin-zijie"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4 hover:text-violet-300 transition-colors duration-300 social-icons"
          >
            <Instagram size={36} />
          </a>
          <a
            href="mailto:ttiramisu10@gmail.com"
            rel="noopener noreferrer"
            className="mx-4 hover:text-violet-300 transition-colors duration-300 social-icons"
          >
            <Mail size={36} />
          </a>
        </div>
      </div>
      <div className="h-[60px]" id="projects"></div>
      <Projects />
      <div className="h-[60px]" id="resume"></div>
      <ResumeDownload />
      <Footer />
    </div>
  );
}

export default App;
