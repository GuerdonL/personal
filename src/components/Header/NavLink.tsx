// NavLink.tsx
import React from 'react';
import './NavLink.css';

interface NavLinkProps {
  iconName: string;
  linkText: string;
  url: string;
}

const NavLink: React.FC<NavLinkProps> = ({ iconName, linkText, url }) => {
  return (
    <a href={url} className="navLink">
      <i className={`icon ${iconName}`} />
      <span className="linkText">{linkText}</span>
    </a>
  );
};

export default NavLink;
