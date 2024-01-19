import React, {useState} from 'react';
import Form from './component/Form';
import ItemList from './component/ItemList';
import {v4 as uuidv4} from 'uuid';
import {useSelector} from 'react-redux';
import {store} from './redux/store'
import {addArticle, deleteArticle, setQuantity, setName} from './redux/App/AppSlice'


function App(){

  const articles = useSelector((state) => state.app.articles);


return (
  <div className="container">
    <h3>Liste de courses</h3>
    <Form formTitle="Ajouter un article" addArticle={() => store.dispatch(addArticle())}/>
    <ItemList articles={articles} deleteArticle={() => store.dispatch(deleteArticle())} setQuantity={() => store.dispatch(setQuantity())} setName={() => store.dispatch(setName())} />
  </div>
)

}

export default App;
