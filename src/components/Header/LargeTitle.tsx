// LargeTitle.tsx
import React from 'react';
import './LargeTitle.css';

interface LargeTitleProps {
  visible: boolean;
}

const LargeTitle: React.FC<LargeTitleProps> = ({ visible }) => {
  return (
    <h1 className={`largeTitle ${visible ? '' : 'hidden'}`}>Guerdon Ligon</h1>
  );
};

export default LargeTitle;
