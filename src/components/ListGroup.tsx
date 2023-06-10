function ListGroup() {
  const items = ["Naruto", "Sasuke", "Itachi", "Nagato", "Zoro"];
  //in jsx we don't have a for loop
  //using curly braces we can render data dynamically

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
