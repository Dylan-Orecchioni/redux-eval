import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  articles: [],
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    addArticle: (state, action) => {
        const article = action.payload;
        state.articles.push({
          id: uuidv4(),
          ...article,
        });
    },

    deleteArticle: (state, action) => {
      const id_article = action.payload;
      state.articles = state.articles.filter((article) => article.id !== id_article);
    },

    setQuantity: (state, action) => {
      const { newQuantity, id_article } = action.payload;
      state.articles = state.articles.map((article) =>
        article.id === id_article ? { ...article, quantity: newQuantity } : article
      );
    },

    setName: (state, action) => {
      const { newName, id_article } = action.payload;
      state.articles = state.articles.map((article) =>
        article.id === id_article ? { ...article, name: newName } : article
      );
    },
  },
});

export const { addArticle, deleteArticle, setQuantity, setName } = appSlice.actions;

export default appSlice.reducer;
