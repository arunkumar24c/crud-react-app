import React, { useState, useEffect } from "react";
import List from "./component/List";

import { v4 as uuidv4 } from "uuid";
// import { clear } from "@testing-library/user-event/dist/clear";
import "./App.css";

const App = () => {
  const [itemName, setItemName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState("");

  // delete
  const deleteItem = (id) => {
    const filteredItem = list.filter((item) => item.id !== id);
    setList(filteredItem);
  };
  // edit

  const editItem = (id) => {
    const itemToEdit = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditId(id);
    setItemName(itemToEdit.title);
  };
  // clear all list
  const clearItems = () => {
    setList([]);
  };

  // submit clr
  const submitHandler = (e) => {
    e.preventDefault();
    if (!itemName) {
      alert("Enter a value");
    } else if(itemName && isEditing){
      setList(
        list.map((item)=>{
          if(item.id === editId){
            return{...item, title:itemName}
          }else{
            return item;
          }
        }),
        
      );
      setItemName("");
      setIsEditing(false);
      setEditId("");
    }
    
    else {
      const newItem = { id: uuidv4(), title: itemName };
      setList([...list, newItem]);
      setItemName("");
    }
  };

  return (
    <div>
      <section className="section">
        <form className="form" onSubmit={submitHandler}>
          <h3>Curd Application</h3>
          <div className="form-control">
            <input
              type="text"
              className="grocery"
              placeholder="apples...."
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
            />
            <button type="submit" className="btn-submit">submit</button>
          </div>
        </form>
        {list.length > 0 && (
          <div className="container">
            <List items={list} deleteItem={deleteItem} editItem={editItem} />
            <button className="btn" onClick={clearItems}>
              Clear Item
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default App;
