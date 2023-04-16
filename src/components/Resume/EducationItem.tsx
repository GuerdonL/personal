// EducationItem.tsx
import React from 'react';
import './EducationItem.css';

interface EducationItemProps {
  institution: string;
  location: string;
  degree: string;
  year?: string;
  subText?: string;
}

const EducationItem: React.FC<EducationItemProps> = ({
  institution,
  location,
  degree,
  year,
  subText,
}) => {
  return (
    <div className="educationItem">
      <div className='institutionContainer'>
        <span className="institution">{`${institution}, ${location}`}</span>
        {subText && <div className="subText">{subText}</div>}
      </div>
      {year && <span className="degree">{`${degree}, ${year}`}</span>}
      {!year && <span className="degree">{degree}</span>}
    </div>
  );
};

export default EducationItem;
