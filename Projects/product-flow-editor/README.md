# 🧩 Product Flow Editor

A visually interactive product flow editor that allows users to:

- View products in a beautiful card layout with gradient styling
- Dynamically add products to a cart-like section using toggle buttons
- See selected product details (title and price)
- Visually map out relationships between selected products (nodes and edges) using a drag-and-drop editor

## 🚀 Live Demo

🔗 [Click here to view the deployed app](https://policy-flow-editor.vercel.app/)

> Replace the above URL with your actual deployed link

---

## 🛠 Features

- ✅ Product fetching from DummyJSON API
- ✅ Dynamic "Add to Cart" toggle for title and price
- ✅ Beautiful UI using Tailwind CSS gradients and hover effects
- ✅ Flow editor to add products as nodes and draw arrows between them
- ✅ Modular component structure for scalability

---

## 🧱 Tech Stack

- **React** (Vite)
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **React Flow** for drag-and-drop product nodes and edge connections
- **DummyJSON API** for fetching sample products

---

## 📁 Folder Structure

```bash
src/
├── components/
│   ├── Product.jsx         # Individual product card
│   ├── Products.jsx        # Product list and data fetching
│   ├── FlowEditor.jsx      # Canvas for node/edge-based product flow
│   ├── ProductList.jsx     # List of products to add to the flow
│   └── Node.jsx            # Node component for the flow
├── App.jsx
├── main.jsx
└── index.css
```
