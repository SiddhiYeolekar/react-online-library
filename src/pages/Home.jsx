import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { categories } from '../data/books';

function Home() {
  const books = useSelector((state) => state.books);
  const popularBooks = books.filter((b) => b.popular).slice(0, 5);

  return (
    <div>
      <h1 className="page-title">Welcome to the Online Library</h1>

      <section className="section">
        <h2 className="section-title">Categories</h2>
        <ul className="category-grid list-reset">
          {categories.map((c) => (
            <li key={c}>
              <Link to={`/books/${c}`} className="category-link">
                {c}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2 className="section-title">Popular Books</h2>
        <ul className="list-vertical list-reset">
          {popularBooks.map((book) => (
            <li key={book.id} className="card list-item">
              <span>
                {book.title} <span className="muted">by {book.author}</span>
              </span>
              <Link to={`/book/${book.id}`} className="link-primary">View Details</Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Home;