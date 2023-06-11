import { useState } from "react";
//Using type annotations to specify the types of various properties.
interface Props {
  onSelectItem: (item: string) => void;
  items: string[];
  heading: string;
}
//Destructuring props -|
function ListGroup({ items, heading, onSelectItem }: Props) {
  //in jsx we don't have a for loop

  //The event: MouseEvent below is a type annotation in typescript we can declare type of variable , parameter and so on.
  //Managing state
  //use state Hook  -A hook is function  Allows us to tab into buildin feature in react
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //using curly braces we can render data dynamically
  return (
    <>
      <h1>{heading}</h1>
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
                onSelectItem(item);
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
