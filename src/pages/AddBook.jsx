import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../redux/booksSlice';
import { categories } from '../data/books';

function AddBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: '',
    author: '',
    category: categories[0],
    description: '',
    rating: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.author) return;
    dispatch(addBook({ ...form, popular: false }));
    navigate('/books');
  };

  return (
    <div className="container section">
      <div className="card">
        <h1 className="section-title" style={{ textAlign: 'center' }}>Add a New Book</h1>
        <form onSubmit={handleSubmit}>
          <label>Title
            <input name="title" value={form.title} onChange={handleChange} className="input" required />
          </label>
          <label>Author
            <input name="author" value={form.author} onChange={handleChange} className="input" required />
          </label>
          <label>Category
            <select name="category" value={form.category} onChange={handleChange} className="select">
              {categories.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </label>
          <label>Description
            <textarea name="description" value={form.description} onChange={handleChange} rows="4" className="input" />
          </label>
          <label>Rating (0-5)
            <input name="rating" type="number" min="0" max="5" step="0.1" value={form.rating} onChange={handleChange} className="input" />
          </label>
          <button type="submit" className="btn">Add Book</button>
        </form>
      </div>
    </div>
  );
}

export default AddBook;