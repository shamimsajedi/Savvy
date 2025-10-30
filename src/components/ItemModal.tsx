import { useEffect, useMemo, useState } from 'react';
import type { Item } from '../types';

type ItemModalProps = {
  isOpen: boolean;
  initialItem?: Partial<Item> | null;
  onCancel: () => void;
  onSubmit: (data: { title: string; subtitle: string }) => void;
};

export default function ItemModal({ isOpen, initialItem, onCancel, onSubmit }: ItemModalProps) {
  const [title, setTitle] = useState<string>('');
  const [subtitle, setSubtitle] = useState<string>('');
  const [touched, setTouched] = useState<boolean>(false);

  const isEditing = useMemo(() => Boolean(initialItem && initialItem.id), [initialItem]);

  useEffect(() => {
    if (isOpen) {
      setTitle(initialItem?.title ?? '');
      setSubtitle(initialItem?.subtitle ?? '');
      setTouched(false);
    }
  }, [isOpen, initialItem]);

  const errors = useMemo(() => {
    const errs: { title?: string; subtitle?: string } = {};
    if (!title.trim()) errs.title = 'Title is required';
    if (subtitle.length > 120) errs.subtitle = 'Subtitle must be ≤ 120 characters';
    return errs;
  }, [title, subtitle]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onCancel}>
      <div className="modal" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{isEditing ? 'Edit Item' : 'Create Item'}</h2>
        </div>
        <div className="modal-body">
          <div className="form-field">
            <label htmlFor="title">Title</label>
            <input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onBlur={() => setTouched(true)}
              placeholder="Enter a title"
            />
            {touched && errors.title ? <div className="error-text">{errors.title}</div> : null}
          </div>

          <div className="form-field">
            <label htmlFor="subtitle">Subtitle</label>
            <input
              id="subtitle"
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
              placeholder="Enter a subtitle (optional)"
            />
            {touched && errors.subtitle ? <div className="error-text">{errors.subtitle}</div> : null}
          </div>
        </div>
        <div className="modal-footer">
          <button className="btn-secondary" onClick={onCancel}>Cancel</button>
          <button
            className="btn-primary"
            onClick={() => {
              setTouched(true);
              if (Object.keys(errors).length === 0) {
                onSubmit({ title: title.trim(), subtitle: subtitle.trim() });
              }
            }}
          >
            {isEditing ? 'Save' : 'Create'}
          </button>
        </div>
      </div>
    </div>
  );
}


