export interface Project {
  name: string;
  desc: string;
  tech: string[];
  link: string;
}

export const projects: Project[] = [
  {
    name: "Homework Tracker",
    desc: "A simple homework tracker to track homeworks and deadlines",
    tech: ["Electron", "HTML, CSS, JS"],
    link: "https://github.com/ttiramisu/hw-tracker",
  },
  {
    name: "Music Player",
    desc: "A simple music player that plays local music files",
    tech: ["Expo", "React Native"],
    link: "https://github.com/ttiramisu/music-player",
  },
  {
    name: "Website 2023",
    desc: "A multi-paged website that shows the history of the silkroad",
    tech: ["Python", "Flask", "Bootstrap"],
    link: "https://github.com/ttiramisu/website-2023",
  },
];