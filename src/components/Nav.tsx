import React from 'react';
import { Link } from '@reach/router';

export const Nav: React.FC = () => {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/add'>Add a planet</Link>
    </nav>
  );
};
