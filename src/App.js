import React, {useState} from 'react';
import Form from './component/Form';
import ItemList from './component/ItemList';
import {useSelector} from 'react-redux';


function App(){

  const articles = useSelector((state) => state.app.articles);


return (
  <div className="container">
    <h3>Liste de courses</h3>
    <Form formTitle="Ajouter un article" />
    <ItemList />
  </div>
)

}

export default App;
