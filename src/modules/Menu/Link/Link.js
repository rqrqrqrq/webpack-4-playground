import './Link.css';

import React from 'react';
import { NavLink } from 'react-router-dom';

export const Link = props => (
  <NavLink
    className="Menu__Link"
    activeClassName="Menu__Link--active"
    {...props}
  />
);
