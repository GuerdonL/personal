// HeaderBar.tsx
import React, { Component } from 'react';
import LargeTitle from './LargeTitle';
import NavLink from './NavLink';
import './HeaderBar.css';

interface HeaderBarProps {}

interface HeaderBarState {
  isShrinking: boolean;
  scrollPosition: number;
  headerHeight: number;
}

class HeaderBar extends Component<HeaderBarProps, HeaderBarState> {
  constructor(props: HeaderBarProps) {
    super(props);
    this.state = {
      isShrinking: false,
      scrollPosition: 0,
      headerHeight: 0,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (): void => {
    const { scrollPosition } = this.state;
    const newScrollPosition = window.scrollY;

    if (newScrollPosition > scrollPosition && !this.state.isShrinking) {
      this.setState({ isShrinking: true, headerHeight: 5});
    } else if (newScrollPosition <= scrollPosition && this.state.isShrinking) {
      this.setState({ isShrinking: false, headerHeight: 10});
    }

    this.setState({ scrollPosition: newScrollPosition });
  };

  render() {
    return (
      <div className={`headerBar ${this.state.isShrinking ? 'shrinking' : ''}`} style={{ height: this.state.headerHeight }}>
        <LargeTitle visible={!this.state.isShrinking} />
        <NavLink iconName="github" linkText="GitHub" url="https://github.com/GuerdonL" />
        <NavLink iconName="linkedin" linkText="LinkedIn" url="https://www.linkedin.com/in/guerdonligon" />
        {/* Add more NavLink components as needed */}
      </div>
    );
  }
}

export default HeaderBar;