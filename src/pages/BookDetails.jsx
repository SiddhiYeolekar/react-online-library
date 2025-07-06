import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function BookDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = useSelector((state) => state.books.find((b) => b.id === id));

  if (!book) {
    return (
      <div className="section">
        <p>Book not found.</p>
        <button className="btn" onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="card container section">
      <h1 className="page-title" style={{ marginTop: 0 }}>{book.title}</h1>
      <p className="card-title">by {book.author}</p>
      <p className="muted" style={{ marginBottom: '1rem' }}>{book.description}</p>
      <p className="muted"><strong>Category:</strong> {book.category}</p>
      <p className="muted" style={{ marginBottom: '1.5rem' }}>Rating: {book.rating} ⭐</p>
      <Link to="/books" className="btn btn-outline">Back to Browse</Link>
    </div>
  );
}

export default BookDetails;