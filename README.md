# Hafiz Al Asad — Portfolio Admin Demo

A fully standalone demo version of the portfolio admin panel.  
No Firebase. No database. Changes persist in the browser via `localStorage`.

---

## Usage

Open `admin-demo.html` in a browser.  
**Demo password:** `asad@admin2026`

Everything works — add, edit, delete, drag to reorder.  
Changes are saved to your browser only. No real database is touched.

---

## How it differs from the real `admin.html`

| Feature | `admin.html` (real) | `admin-demo.html` |
|---|---|---|
| Database | Firebase Firestore | `localStorage` mock store |
| File uploads | Firebase Storage | `FileReader` preview only |
| Auth | sessionStorage + password | Same |
| External CSS | `style.css` | Inlined in `admin-demo.css` |

---