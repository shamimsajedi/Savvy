# Savvy - Item Management App

A modern, responsive item management application built with React, TypeScript, and Tailwind CSS. Create, edit, and delete items with an intuitive user interface and real-time updates.

## ✨ Features

- **📋 List View**: Display all items with date created, title, and subtitle
- **➕ Create Items**: Add new items through a user-friendly modal form
- **✏️ Edit Items**: Update existing items with pre-filled form data
- **🗑️ Delete Items**: Remove items with a single click
- **✅ Form Validation**: Built-in validation for title (required) and subtitle (max 120 characters)
- **💾 Local Storage**: Automatically save new items to browser localStorage
- **🎨 Modern UI**: Beautiful, responsive design with Tailwind CSS
- **🌙 Dark Theme**: Optimized dark mode interface
- **⚡ Fast Performance**: Built with Vite for lightning-fast development and builds

## 🛠️ Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **ESLint** - Code linting

## 📦 Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd Savvy
```

2. Install dependencies:

```bash
npm install
```

## 🚀 Getting Started

1. Start the development server:

```bash
npm run dev
```

2. Open your browser and navigate to the URL shown in the terminal (typically `http://localhost:5173`)

3. Start managing your items:
   - Click **Create** to add a new item
   - Click **Edit** on any item to modify it
   - Click **Delete** to remove an item

## 📜 Available Scripts

- `npm run dev` - Start development server with hot module replacement
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 📁 Project Structure

```
src/
├── components/
│   ├── ItemList.tsx      # List component displaying all items
│   └── ItemModal.tsx     # Modal component for create/edit forms
├── types.ts              # TypeScript type definitions
├── App.tsx               # Main application component
├── main.tsx              # Application entry point
└── index.css             # Global styles and Tailwind imports
```

## 🎯 Usage

### Creating an Item

1. Click the **Create** button in the header
2. Fill in the **Title** (required) and **Subtitle** (optional)
3. Click **Create** to add the item to your list

### Editing an Item

1. Click the **Edit** button on any item
2. Modify the title or subtitle in the modal
3. Click **Save** to update the item

### Deleting an Item

1. Click the **Delete** button on any item
2. The item will be immediately removed from the list

## 🔍 Features in Detail

### Form Validation

- **Title**: Required field - cannot be empty
- **Subtitle**: Optional field with a maximum length of 120 characters
- Validation errors are displayed inline below the input fields

### Data Persistence

- New items are automatically saved to `localStorage`
- Items persist across browser sessions
- Note: Edits and deletions are currently session-only (not persisted to localStorage)

### User Experience

- Clean, modern interface with smooth transitions
- Responsive design that works on all screen sizes
- Intuitive modal interactions with click-outside-to-close
- Clear visual feedback for all actions

## 🧩 Component Architecture

- **ItemList**: Renders the list of items with edit/delete actions
- **ItemModal**: Reusable modal component for both creating and editing items
- **App**: Main container managing state and orchestrating components

## 🎨 Styling

The project uses Tailwind CSS v4 with a utility-first approach. All styling is done through Tailwind utility classes, making it easy to customize and maintain.

## 🔧 Development

### TypeScript

The project is fully typed with TypeScript. Type definitions are centralized in `types.ts` for easy maintenance.

### Code Quality

ESLint is configured with React-specific rules to ensure code quality and consistency.


