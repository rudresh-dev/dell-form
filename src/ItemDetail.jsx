import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ItemDetail() {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => {
        const itemData = data.items.find(it => it.id.toString() === itemId);
        setItem(itemData);
      });
  }, [itemId]);

  if (!item) return <p>Loading...</p>;

  return (
    <div>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
    </div>
  );
}

export default ItemDetail;
