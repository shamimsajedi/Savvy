import type { Item } from '../types';

type ItemListProps = {
  items: Item[];
  onEdit: (item: Item) => void;
  onDelete: (id: string) => void;
};

export default function ItemList({ items, onEdit, onDelete }: ItemListProps) {
  if (items.length === 0) {
    return <div className="empty">No items yet. Click Create to add one.</div>;
  }

  return (
    <ul className="list">
      {items.map((item) => (
        <li key={item.id} className="list-item">
          <div className="list-meta">
            <div className="list-title">{item.title}</div>
            <div className="list-subtitle">{item.subtitle}</div>
          </div>
          <div className="list-right">
            <div className="list-date">{new Date(item.createdAt).toLocaleString()}</div>
            <div className="list-actions">
              <button className="btn-secondary" onClick={() => onEdit(item)}>Edit</button>
              <button className="btn-danger" onClick={() => onDelete(item.id)}>Delete</button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}


