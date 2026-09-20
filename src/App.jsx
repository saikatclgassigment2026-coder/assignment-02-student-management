import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import StudentList from './components/StudentList';
import './index.css';

const MOCK_STUDENTS = [
  {
    id: 1,
    name: "Alex Johnson",
    rollNumber: "CS2024-001",
    department: "Computer Science",
    semester: "6th",
    cgpa: 3.8,
    photo: "https://i.pravatar.cc/150?u=alex"
  },
  {
    id: 2,
    name: "Sarah Williams",
    rollNumber: "EE2024-042",
    department: "Electrical Eng.",
    semester: "4th",
    cgpa: 3.95,
    photo: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    id: 3,
    name: "Michael Chen",
    rollNumber: "ME2024-112",
    department: "Mechanical Eng.",
    semester: "8th",
    cgpa: 3.2,
    photo: "https://i.pravatar.cc/150?u=michael"
  },
  {
    id: 4,
    name: "Emily Davis",
    rollNumber: "CS2024-015",
    department: "Computer Science",
    semester: "2nd",
    cgpa: 3.6,
    photo: "https://i.pravatar.cc/150?u=emily"
  },
  {
    id: 5,
    name: "James Wilson",
    rollNumber: "CE2024-089",
    department: "Civil Eng.",
    semester: "6th",
    cgpa: 3.1,
    photo: "https://i.pravatar.cc/150?u=james"
  },
  {
    id: 6,
    name: "Olivia Martinez",
    rollNumber: "CS2024-033",
    department: "Computer Science",
    semester: "8th",
    cgpa: 4.0,
    photo: "https://i.pravatar.cc/150?u=olivia"
  }
];

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <div className="container">
          <StudentList students={MOCK_STUDENTS} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
