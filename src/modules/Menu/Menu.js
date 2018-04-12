import './Menu.css';

import React from 'react';
import { Link } from './Link';

export const Menu = () => (
  <ul className="Menu">
    <li>
      <Link exact to="/">
        index
      </Link>
    </li>
    <li>
      <Link to="/about">about</Link>
    </li>
    <li>
      <Link to="/counters">counters</Link>
    </li>
  </ul>
);
