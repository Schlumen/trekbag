import { useRef, useState } from "react";
import Button from "./Button";

export default function AddItemForm({ onAddItem }) {
  const [itemText, setItemText] = useState("");
  const inputRef = useRef();

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

    onAddItem(newItem);
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
      />
      <Button>Add to list</Button>
    </form>
  );
}
