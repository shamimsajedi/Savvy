import type { Item } from "../types";

type ItemListProps = {
  items: Item[];
  onEdit: (item: Item) => void;
  onDelete: (id: string) => void;
};

export default function ItemList({
  items = [],
  onEdit,
  onDelete,
}: ItemListProps) {
  if (items.length === 0) {
    return (
      <div className="opacity-70 py-8 text-center">
        No items yet. Click Create to add one.
      </div>
    );
  }

  return (
    <ul className="list-none p-0 m-0 flex flex-col gap-3">
      {items.map((item) => (
        <li
          key={item.id}
          className="flex items-center justify-between gap-4 px-4 py-3.5 bg-white/5 border border-white/8 rounded-xl"
        >
          <div className="text-left">
            <div className="font-semibold text-lg">{item.title}</div>
            <div className="opacity-80 text-sm">{item.subtitle}</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="opacity-70 text-sm whitespace-nowrap">
              {new Date(item.createdAt).toLocaleString()}
            </div>
            <div className="flex gap-2">
              <button
                className="bg-gray-800 text-white border border-transparent rounded-lg px-3.5 py-2 hover:bg-gray-700 transition-colors"
                onClick={() => onEdit(item)}
              >
                Edit
              </button>
              <button
                className="bg-red-700 text-white border border-transparent rounded-lg px-3.5 py-2 hover:bg-red-800 transition-colors"
                onClick={() => onDelete(item.id)}
              >
                Delete
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
