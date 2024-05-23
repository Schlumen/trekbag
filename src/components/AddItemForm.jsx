import { useRef, useState } from "react";
import Button from "./Button";
import { useItemsStore } from "../stores/itemStore";

export default function AddItemForm() {
  const [itemText, setItemText] = useState("");
  const inputRef = useRef();
  const addItem = useItemsStore(state => state.addItem);

  const handleSumbit = e => {
    e.preventDefault();

    if (!itemText.trim()) {
      alert("Please enter an item name.");
      inputRef.current.focus();
      return;
    }

    const newItem = {
      id: Date.now(),
      name: itemText.trim(),
      packed: false,
    };

    addItem(newItem);
    setItemText("");
  };

  return (
    <form onSubmit={handleSumbit}>
      <h2>Add an Item</h2>
      <input
        ref={inputRef}
        type="text"
        value={itemText}
        onChange={e => setItemText(e.target.value)}
        autoFocus
        placeholder="Toothbrush..."
      />
      <Button>Add to list</Button>
    </form>
  );
}
