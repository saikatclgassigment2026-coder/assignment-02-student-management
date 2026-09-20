import React from 'react';
import { BookOpen, Hash, Building2 } from 'lucide-react';
import '../styles/StudentCard.css';

const StudentCard = ({ student }) => {
  const getCgpaColor = (cgpa) => {
    if (cgpa >= 3.8) return 'cgpa-excellent';
    if (cgpa >= 3.5) return 'cgpa-good';
    if (cgpa >= 3.0) return 'cgpa-average';
    return 'cgpa-poor';
  };

  return (
    <div className="student-card">
      <div className="card-header">
        <div className="avatar-container">
          <img src={student.photo} alt={student.name} className="avatar" />
        </div>
        <div className={`cgpa-badge ${getCgpaColor(student.cgpa)}`}>
          CGPA {student.cgpa.toFixed(2)}
        </div>
      </div>
      
      <div className="card-body">
        <h3 className="student-name">{student.name}</h3>
        
        <div className="student-info-list">
          <div className="info-item">
            <Hash size={16} className="info-icon" />
            <span className="info-label">Roll No:</span>
            <span className="info-value">{student.rollNumber}</span>
          </div>
          <div className="info-item">
            <Building2 size={16} className="info-icon" />
            <span className="info-label">Dept:</span>
            <span className="info-value">{student.department}</span>
          </div>
          <div className="info-item">
            <BookOpen size={16} className="info-icon" />
            <span className="info-label">Semester:</span>
            <span className="info-value">{student.semester}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
