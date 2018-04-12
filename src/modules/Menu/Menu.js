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
    <li>
      <Link to="/babel">babel tests</Link>
    </li>
    <li>
      <Link to="/chuck">chuck norris jokes</Link>
    </li>
  </ul>
);
