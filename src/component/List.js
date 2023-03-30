import React from 'react';
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

const List = ({items , deleteItem, editItem}) => {
  return <div className='list'>
    {
      items.map((item)=>{
        const{id, title} = item;
        return (
          <div className="item" key={id}>
            <p className="title">{title}</p>
            <div className="btn-container">
              <button
                type="button"
                className="edit-btn"
                onClick={() => editItem(id)}
              >
                <AiFillEdit />
              </button>
              <button
                type="button"
                className="delete-btn"
                onClick={() => deleteItem(id)}
              >
                <AiFillDelete />
              </button>
            </div>
          </div>
        );
      })
    }
  </div>;
}

export default List