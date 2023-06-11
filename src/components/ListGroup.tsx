function ListGroup() {
  var items = ["Naruto", "Sasuke", "Itachi", "Nagato", "Zoro"];
  //in jsx we don't have a for loop
  //using curly braces we can render data dynamically

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
