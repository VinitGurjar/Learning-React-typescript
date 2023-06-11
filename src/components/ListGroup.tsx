function ListGroup() {
  var items = ["Naruto", "Sasuke", "Itachi", "Nagato", "Zoro"];
  //in jsx we don't have a for loop
  //using curly braces we can render data dynamically

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          //Below Each Prop is on a single line after formating
          <li
            className="list-group-item"
            key={item}
            onClick={() => console.log(item, index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
