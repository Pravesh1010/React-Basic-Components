import { useState } from "react";
import ItemList from "./ItemList";
export function Content({ items, handleClick, handleDelete }) {
  return (
    <div>
      {items.length ? (
        <ItemList 
            items={items} 
            handleClick={handleClick} 
            handleDelete={handleDelete} 
        />
      ) : (
        <p style={{ marginTop: "2rem" }}>Your list is Empty.</p>
      )}
    </div> 
  );
}

