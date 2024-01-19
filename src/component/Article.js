import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteArticle, setQuantity, setName } from '../redux/App/AppSlice';

export default function Article({ article }) {
  const dispatch = useDispatch();

  const [editMode, setEditMode] = useState(false);
  const [editedQuantity, setEditedQuantity] = useState(article.quantity);
  const [editedName, setEditedName] = useState(article.name);

  const handleDeleteArticle = () => {
    dispatch(deleteArticle(article.id));
  };

  const handleEdit = () => {
    setEditMode(!editMode);
  };

  const handleSave = () => {
    dispatch(setQuantity({ newQuantity: editedQuantity, id_article: article.id }));
    dispatch(setName({ newName: editedName, id_article: article.id }));
    setEditMode(false);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <button className="btn btn-danger btn-sm" onClick={handleDeleteArticle}>
        Delete
      </button>
      <button className="btn btn-warning btn-sm" onClick={handleEdit}>
        Edit
      </button>

      {editMode ? (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input
            type="number"
            className="ms-2"
            onChange={(e) => setEditedQuantity(e.target.value)}
            value={editedQuantity}
          />
          <input
            type="text"
            onChange={(e) => setEditedName(e.target.value)}
            value={editedName}
          />
          <button className="btn btn-success btn-sm" onClick={handleSave}>
            Save
          </button>
        </div>
      ) : (
        <p className="ms-5">
          {article.quantity} {article.name}
        </p>
      )}
    </div>
  );
}
