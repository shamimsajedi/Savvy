import {  useMemo, useState } from "react";
import "./App.css";
import type { Item } from "./types";
import ItemModal from "./components/ItemModal";
import ItemList from "./components/ItemList";

function App() {
  const [items, setItems] = useState<Item[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [editingItem, setEditingItem] = useState<Item | null>(null);

  const isEditing = useMemo(() => Boolean(editingItem), [editingItem]);

  const handleCreateClick = () => {
    setEditingItem(null);
    setIsModalOpen(true);
  };

  const handleEdit = (item: Item) => {
    setEditingItem(item);
    setIsModalOpen(true);
  };

  const handleDelete = (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const handleSubmit = (data: { title: string; subtitle: string }) => {
    if (isEditing && editingItem) {
      setItems((prev) =>
        prev.map((i) =>
          i.id === editingItem.id
            ? { ...i, title: data.title, subtitle: data.subtitle }
            : i
        )
      );
    } else {
      const newItem: Item = {
        id: crypto.randomUUID(),
        title: data.title,
        subtitle: data.subtitle,
        createdAt: new Date().toISOString(),
      };
      setItems((prev) => [newItem, ...prev]);
    }
    setIsModalOpen(false);
    setEditingItem(null);
  };

  return (
    <div className="container">
      <header className="header">
        <h1 className="app-title">Items</h1>
        <button className="btn-primary" onClick={handleCreateClick}>
          Create
        </button>
      </header>

      <ItemList items={items} onEdit={handleEdit} onDelete={handleDelete} />

      <ItemModal
        isOpen={isModalOpen}
        initialItem={editingItem ?? undefined}
        onCancel={() => {
          setIsModalOpen(false);
          setEditingItem(null);
        }}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;
