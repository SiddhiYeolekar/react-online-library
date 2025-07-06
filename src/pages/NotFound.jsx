import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="container section" style={{ textAlign: 'center' }}>
      <h1 className="page-title" style={{ marginBottom: '0.5rem' }}>404</h1>
      <p className="muted" style={{ marginBottom: '1.5rem' }}>Oops! The page you're looking for does not exist.</p>
      <Link to="/" className="btn btn-outline">Return Home</Link>
    </div>
  );
}

export default NotFound;

