import React, { useMemo, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { categories } from '../data/books';

function BrowseBooks() {
  const { category } = useParams();
  const books = useSelector((state) => state.books);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const filteredBooks = useMemo(() => {
    let list = books;
    if (category) {
      list = list.filter((b) => b.category.toLowerCase() === category.toLowerCase());
    }
    if (query.trim()) {
      const lower = query.toLowerCase();
      list = list.filter((b) => b.title.toLowerCase().includes(lower) || b.author.toLowerCase().includes(lower));
    }
    return list;
  }, [books, category, query]);

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    navigate(value ? `/books/${value}` : '/books');
  };

  return (
    <div>
      <h1 className="page-title">Browse Books {category && `- ${category}`}</h1>

      <div className="filter-bar">
        <input
          type="text"
          placeholder="Search by title or author…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="input"
        />
        <select value={category || ''} onChange={handleCategoryChange} className="select">
          <option value="">All Categories</option>
          {categories.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      {filteredBooks.length === 0 ? (
        <p>No books found.</p>
      ) : (
        <ul className="list-vertical list-reset">
          {filteredBooks.map((book) => (
            <li key={book.id} className="card list-item">
              <div>
                <h3 className="card-title">{book.title}</h3>
                <p className="muted">{book.author}</p>
              </div>
              <Link to={`/book/${book.id}`} className="link-primary">Details</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BrowseBooks;