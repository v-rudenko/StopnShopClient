const DeleteItem = async (id) => {
  const api = `http://127.0.0.1:8000/item/${id}`;
  const response = await fetch(api, {method:"DELETE"});
  const data = await response.json();
  console.log(data);
};

export default DeleteItem;
