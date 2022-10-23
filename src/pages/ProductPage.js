import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import GetItem from '../api/GetItem';

const ProductPage = () => {
  const params = useParams();
  const [item, setItem] = useState({});

  useEffect( () => {
    async function FetchData() {
      setItem(await GetItem(params.productId));
    }
    FetchData();
  }, []);
  return (
    <section>There will be product with ID: {params.productId}
    <h1>Title: {item.name}</h1>
    <p>description: {item.description}</p>
    <img src={item.imageurl} alt="some image" />
    <p>rating: {item.rating}</p>
    <span>price: {item.price}</span>
    </section>
  )
}

export default ProductPage