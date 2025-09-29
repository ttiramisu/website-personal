// AboutMeTerminal.tsx
import React, { useState, useEffect, useRef } from "react";

interface AboutMeTerminalProps {
  name: string;
  role: string;
  description: string;
  imageUrl: string;
  typingSpeed?: number;
}

const AboutMeTerminal: React.FC<AboutMeTerminalProps> = ({
  name,
  role,
  description,
  imageUrl,
  typingSpeed = 50,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [charIndex, setCharIndex] = useState(0);
  const [lineIndex, setLineIndex] = useState(0);
  const [typingDone, setTypingDone] = useState(false);

  const lines = [
    `Z:\\ ${name}`,
    `Z:\\ ${role}`,
    `Z:\\ ${description}`,
  ];

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Typing effect
  useEffect(() => {
    if (!inView || lineIndex >= lines.length) {
      setTypingDone(true);
      return;
    }

    const currentLine = lines[lineIndex];
    if (charIndex < currentLine.length) {
      const timeout = setTimeout(() => {
        setDisplayedLines((prev) => {
          const newLines = [...prev];
          if (!newLines[lineIndex]) newLines[lineIndex] = "";
          newLines[lineIndex] += currentLine[charIndex];
          return newLines;
        });
        setCharIndex(charIndex + 1);
      }, typingSpeed);

      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setLineIndex(lineIndex + 1);
        setCharIndex(0);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, lineIndex, inView, lines, typingSpeed]);

  return (
    <div
      ref={containerRef}
      className="flex flex-col md:flex-row content-center justify-center font-mono text-gray-200 max-w-4xl w-full mx-4 gap-8"
    >
      {/* Avatar */}
      <img
        src={imageUrl}
        alt={`${name}'s avatar`}
        className="w-64 h-64 self-center rounded-full border-2 border-cyan-400 object-cover flex-shrink-0"
      />

      {/* Terminal-style text */}
      <div className="flex-1 text-lg space-y-2">
        {displayedLines.map((line, idx) => (
          <p key={idx} className="text-gray-200 flex">
            {/* Z:\ label */}
            <span className="text-violet-400 mr-2">Z:\</span>
            {/* Text content */}
            <span>
              {line.replace(/^Z:\\ /, "")}
              {/* Show blinking cursor if typing this line OR typing done on last line */}
              {(lineIndex === idx || (typingDone && idx === displayedLines.length - 1)) && (
                <span className="text-violet-900 animate-blink">_</span>
              )}
            </span>
          </p>
        ))}
      </div>

      {/* Tailwind custom animation */}
      <style>
        {`
          @keyframes blink {
            0%, 50%, 100% { opacity: 1; }
            25%, 75% { opacity: 0; }
          }
          .animate-blink {
            animation: blink 2.5s ease-in-out infinite;
            font-weight: bold;
          }
        `}
      </style>
    </div>
  );
};

export default AboutMeTerminal;
