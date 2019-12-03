import React from 'react';
import TeacherList from '../data/teacher';

const Teachers = () => {
  let teachersInfo = TeacherList.map((single_teacher) => {
    return (
      <li className="teacher" key={single_teacher.id} >
        <img className="teacher-img" src={single_teacher.img_src} alt="teacher" />
        <h3>{single_teacher.name}</h3>
        <p>{single_teacher.bio}</p>
      </li>
    );
  }); 
  
  return (
    <div className="main-content">
      <h2>Teachers</h2>
      <ul className="group">
        {teachersInfo}    
      </ul>
    </div>
  );
}

export default Teachers;