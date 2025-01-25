import React from 'react';
import { Link } from 'react-router-dom';

import './mentalhealth.css';
function CustomLink({ href, children }) {
  return (
    <li>
      <Link to={`/${href}`}>{children}</Link>
    </li>
  );
}

export default function Mentalhealth() {
  return (
    <div id='mental-section'>
      <h1>Your Mental Well Being Matters</h1>
      <ol>
        <CustomLink href="couns">Speak To Counsellor</CustomLink>
        <CustomLink href="resouce">Explore Resources</CustomLink>
        <CustomLink href="selfasses">Take A Self Assessment</CustomLink>
      </ol>
    </div>
  );
}
