import { createSlice, nanoid } from '@reduxjs/toolkit';
import { initialBooks } from '../data/books';

const booksSlice = createSlice({
  name: 'books',
  initialState: initialBooks,
  reducers: {
    addBook: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(book) {
        return { payload: { ...book, id: nanoid() } };
      },
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;