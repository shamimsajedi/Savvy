import { useEffect, useMemo, useState } from "react";
import type { Item } from "../types";

type ItemModalProps = {
  isOpen: boolean;
  initialItem?: Partial<Item> | null;
  onCancel: () => void;
  onSubmit: (data: { title: string; subtitle: string }) => void;
};

export default function ItemModal({
  isOpen,
  initialItem,
  onCancel,
  onSubmit,
}: ItemModalProps) {
  const [title, setTitle] = useState<string>("");
  const [subtitle, setSubtitle] = useState<string>("");
  const [touched, setTouched] = useState<boolean>(false);

  const isEditing = useMemo(
    () => Boolean(initialItem && initialItem.id),
    [initialItem]
  );

  useEffect(() => {
    if (isOpen) {
      setTitle(initialItem?.title ?? "");
      setSubtitle(initialItem?.subtitle ?? "");
      setTouched(false);
    }
  }, [isOpen, initialItem]);

  const errors = useMemo(() => {
    const errs: { title?: string; subtitle?: string } = {};
    if (!title.trim()) errs.title = "Title is required";
    if (subtitle.length > 120)
      errs.subtitle = "Subtitle must be ≤ 120 characters";
    return errs;
  }, [title, subtitle]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center p-4"
      onClick={onCancel}
    >
      <div
        className="w-full max-w-[520px] bg-gray-900 border border-white/8 rounded-2xl shadow-2xl"
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-5 py-4 border-b border-white/8">
          <h2 className="m-0 text-xl">
            {isEditing ? "Edit Item" : "Create Item"}
          </h2>
        </div>
        <div className="px-5 py-4 flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="title" className="text-sm opacity-85">
              Title
            </label>
            <input
              id="title"
              className="px-3 py-2.5 bg-gray-950 text-inherit border border-white/8 rounded-lg focus:outline-none focus:border-blue-600"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onBlur={() => setTouched(true)}
              placeholder="Enter a title"
            />
            {touched && errors.title ? (
              <div className="text-red-400 text-xs">{errors.title}</div>
            ) : null}
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="subtitle" className="text-sm opacity-85">
              Subtitle
            </label>
            <input
              id="subtitle"
              className="px-3 py-2.5 bg-gray-950 text-inherit border border-white/8 rounded-lg focus:outline-none focus:border-blue-600"
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
              placeholder="Enter a subtitle (optional)"
            />
            {touched && errors.subtitle ? (
              <div className="text-red-400 text-xs">{errors.subtitle}</div>
            ) : null}
          </div>
        </div>
        <div className="px-5 py-4 flex justify-end gap-2 border-t border-white/8">
          <button
            className="bg-gray-800 text-white border border-transparent rounded-lg px-3.5 py-2 hover:bg-gray-700 transition-colors"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="bg-blue-600 text-white border-none rounded-lg px-4 py-2.5 hover:bg-blue-700 transition-colors"
            onClick={() => {
              setTouched(true);
              if (Object.keys(errors).length === 0) {
                onSubmit({ title: title.trim(), subtitle: subtitle.trim() });
              }
            }}
          >
            {isEditing ? "Save" : "Create"}
          </button>
        </div>
      </div>
    </div>
  );
}
