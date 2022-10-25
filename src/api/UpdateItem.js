const UpdateItem = async (id, name, description, rating, price, photo) => {
  const api = `http://127.0.0.1:8000/item/${id}`;
  const response = await fetch(api, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      description: description,
      rating: rating,
      price: price,
      imageurl: photo,
    }),
  });
  const data = await response.json();
  console.log(data);
};

export default UpdateItem;
