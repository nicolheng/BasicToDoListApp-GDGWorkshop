# Basic ToDo List App — Workshop Base Project

This folder contains the clean, simplified base code used for the React beginner workshop.
It is not the final version of the app — it is the starting point from which all milestone branches (v1 → v6) will be built.

## What This Base Contains

- A minimal React + Vite setup
- Pre-organized folder structure
- Basic UI components (Header, AddTask, TasksList, Footer)
- Clean variable names and simple logic
- No advanced hooks or patterns
- Tailwind CSS included via CDN
- Ready for students to add logic step-by-step

## Folder Structure

```
workshop-base/
  src/
    App.jsx
    components/
      Header.jsx
      AddTask.jsx
      TasksList.jsx
      Footer.jsx
  index.html
  package.json
  README.md  ← this file
```

## Purpose of This Base

This version is designed to:

- keep the code simple
- focus on React fundamentals
- reduce UI noise for beginners
- serve as the foundation for workshop milestones
- Students will not create a project from scratch.
- They will start from this base and learn concepts in stages.

## How to Run

```
npm install
npm run dev
```

## Notes

See `./notes-refactor.md` for details on how this base was cleaned, refactored, and simplified for teaching.