import React from 'react';
import { BrowserRouter } from 'react-router-dom';

export const RootProvider = ({ children }) => (
  <BrowserRouter>{children}</BrowserRouter>
);
