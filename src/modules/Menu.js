import React from 'react';
import { Link } from 'react-router-dom';

export const Menu = () => (
  <ul>
    <li>
      <Link to="/">index</Link>
    </li>
    <li>
      <Link to="/about">about</Link>
    </li>
  </ul>
);
