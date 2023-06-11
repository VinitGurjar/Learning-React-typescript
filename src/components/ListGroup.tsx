import { useState } from "react";

function ListGroup() {
  let items = ["Naruto", "Sasuke", "Itachi", "Nagato", "Zoro"];
  //in jsx we don't have a for loop

  //The event: MouseEvent below is a type annotation in typescript we can declare type of variable , parameter and so on.
  //Managing state
  //use state Hook  -A hook is function  Allows us to tab into buildin feature in react
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //using curly braces we can render data dynamically
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          //Below Each Prop is on a single line after formating
          <li
            className={
              //doing js for dynamic content
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={
              //a Function we set selected inedx to the current item
              () => {
                // giving the function new index
                setSelectedIndex(index);
              }
            }
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
