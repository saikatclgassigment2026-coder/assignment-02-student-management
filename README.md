# Assignment 02: Student Information Management

## Objective
Create a student information portal using React Props. Each student card displays Name, Roll Number, Department, Semester, CGPA, and Photo. Includes a mechanism to sort students by CGPA.

## Technologies Used
- React (Vite)
- Props for data passing
- React State for sorting
- Lucide React for icons
- CSS Variables for theming

## Features
- Displays a list of students using reusable components
- Beautiful student cards with dynamic CGPA color coding
- Sorting functionality (Toggle high-to-low / low-to-high CGPA)
- Clean, modern dashboard design

## Folder Structure
```
assignment-02-student-management/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── StudentList.jsx
│   │   └── StudentCard.jsx
│   ├── styles/
│   │   ├── Header.css
│   │   ├── Footer.css
│   │   ├── StudentList.css
│   │   └── StudentCard.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
```

## How to Install
1. Navigate to the project directory: `cd assignment-02-student-management`
2. Install dependencies: `npm install`

## How to Run
Run the development server:
```bash
npm run dev
```

## Important React Concepts Demonstrated
- **Props**: Passing student data from the parent `App` down to `StudentList`, and then individual student objects down to `StudentCard`.
- **Component Reusability**: Using the `StudentCard` component multiple times to render a list of students.
- **State Management**: Using `useState` in `StudentList` to track and toggle the sorting order (ascending vs descending).
- **Array Sorting**: Utilizing JavaScript's `.sort()` method combined with React state to dynamically order the UI.
