// ResumeSection.tsx
import React, { useState } from 'react';
import './ResumeSection.css';

interface ResumeSectionProps {
  title: string;
  expandable: boolean;
  visibleChildren?: number;
  children: React.ReactNode;
}

const ResumeSection: React.FC<ResumeSectionProps> = ({ title, expandable, visibleChildren=0, children }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    if (expandable) {
      setExpanded(!expanded);
    }
  };
  const renderChildren = () => {
    if (Array.isArray(children) && visibleChildren > 0) {
      if (!expanded){
        return children.slice(0, visibleChildren);
      }
    }
    return children;
  };

  return (
    <div className="resumeSection">
      <h2 className="sectionTitle" onClick={handleExpand}>
        {title}
        {expandable && <span className={`expandIndicator ${expanded ? 'expanded' : ''}`}>▼</span>}
      </h2>
      <br/>
      <div className={`sectionContent ${expandable && !expanded ? 'collapsed' : ''}`}>
        {renderChildren()}
      </div>
    </div>
  );
};

export default ResumeSection;
