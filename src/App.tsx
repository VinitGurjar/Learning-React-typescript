import ListGroup from "./components/ListGroup";
function App() {
  let items = ["Naruto", "Sasuke", "Itachi", "Nagato", "Zoro"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="ninjas"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
