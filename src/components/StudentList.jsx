import React, { useState } from 'react';
import { ArrowDownAZ, ArrowUpZA } from 'lucide-react';
import StudentCard from './StudentCard';
import '../styles/StudentList.css';

const StudentList = ({ students }) => {
  const [sortOrder, setSortOrder] = useState('desc');

  const sortedStudents = [...students].sort((a, b) => {
    if (sortOrder === 'desc') {
      return b.cgpa - a.cgpa;
    } else {
      return a.cgpa - b.cgpa;
    }
  });

  const toggleSort = () => {
    setSortOrder(prev => prev === 'desc' ? 'asc' : 'desc');
  };

  return (
    <div className="student-list-container">
      <div className="list-header">
        <div>
          <h2 className="list-title">Student Directory</h2>
          <p className="list-subtitle">Manage and view student information</p>
        </div>
        <button className="sort-btn" onClick={toggleSort}>
          {sortOrder === 'desc' ? (
            <><ArrowDownAZ size={18} /> Sort CGPA (High to Low)</>
          ) : (
            <><ArrowUpZA size={18} /> Sort CGPA (Low to High)</>
          )}
        </button>
      </div>

      <div className="student-grid">
        {sortedStudents.map(student => (
          <StudentCard key={student.id} student={student} />
        ))}
      </div>
    </div>
  );
};

export default StudentList;
