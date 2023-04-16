// Resume.tsx
import React from 'react';
import ResumeSection from './ResumeSection';
import EducationItem from './EducationItem';
import './Resume.css';

const Resume: React.FC = () => {
  return (
    <div className="resume">
      <ResumeSection title="Education" expandable={true} visibleChildren={2}>
        <EducationItem institution="Boston University" location="Boston, MA" degree="B.S. Computer Science" year="2025 (Expected)" subText="GPA 3.71"/>
        <EducationItem institution="Imperial College London" location="Online" degree="Mathematics for Machine Learning" subText="Certificate Course"/>
        <EducationItem institution="Stanford" location="Online" degree="Statistical Learning (STATSx0001)" year="A statistical view of AI models" subText="Certificate Course, Ongoing"/>
      </ResumeSection>
      <ResumeSection title="Experience" expandable={true}>
        {/* Add ExperienceItem and ProjectsItem components here */}
      </ResumeSection>
      <ResumeSection title="Skills" expandable={true}>
        {/* Add SkillsCategory components here */}
      </ResumeSection>
      <ResumeSection title="Interests" expandable={false}>
        {/* Add InterestItem components here */}
      </ResumeSection>
    </div>
  );
};

export default Resume;
