import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Article from './Article';
import { deleteArticle, setQuantity, setName } from '../redux/App/AppSlice';

function ItemList() {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.app.articles);

  const handleDeleteArticle = (id) => {
    dispatch(deleteArticle(id));
  };

  const handleSetQuantity = (newQuantity, id) => {
    dispatch(setQuantity({ newQuantity, id }));
  };

  const handleSetName = (newName, id) => {
    dispatch(setName({ newName, id }));
  };

  return (
    <div>
      <h4>Liste des articles</h4>
      {articles.map((article) => (
        <Article
          key={article.id}
          article={article}
          deleteArticle={handleDeleteArticle}
          setQuantity={handleSetQuantity}
          setName={handleSetName}
        />
      ))}
    </div>
  );
}

export default ItemList;
