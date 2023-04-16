// ProjectCardsSection.tsx
import React from 'react';
import './ProjectCardsSection.css';
import ProjectCard from "./ProjectCard";

const projects = [
  // Add your projects data here
  {
    id: '1',
    title: 'Weather App',
    imageUrl: 'https://example.com/weather-app-image.jpg',
    shortDescription: 'A simple weather app that displays the current weather and forecast for a given location.',
    fullDescription: 'This weather app was built using React and TypeScript. It uses the OpenWeatherMap API to fetch weather data based on user input. Users can search for a specific location and view the current weather conditions, as well as a 5-day forecast.',
    publicationDate: '2023-05-15',
    projectWriteup: 'In this project, I learned how to work with APIs, handle user input, and create a responsive user interface using CSS Grid and Flexbox. I also gained experience with React hooks and TypeScript.',
    links: {
      github: 'https://github.com/username/weather-app',
      liveDemo: 'https://weather-app.example.com',
    },
  },
  // Add more projects here
];

const ProjectCardsSection = () => {
  return (
    <div className="grid-container">
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
};

export default ProjectCardsSection;
