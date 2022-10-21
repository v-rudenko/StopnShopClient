const GetItem = async (id) => {
  const api = `http://127.0.0.1:8000/item/${id}`;
  const response = await fetch(api);
  const data = await response.json();
  console.log(data);
};

export default GetItem;
