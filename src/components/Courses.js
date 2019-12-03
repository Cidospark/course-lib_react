import React from 'react';
import {NavLink, Route, Redirect} from 'react-router-dom'
import CourseContainer from "./coursesPages/CourseContainer";
import { HTMLCourses, CSSCourses, JSCourses } from '../data/courses';

const Courses = ({match}) => (
  <div className="main-content courses">
    <div className="course-header group">
      <h2>Courses</h2> 
      <ul className="course-nav">
        {/* <li><NavLink exact to='/courses/coursesPages/html'>HTML</NavLink></li>
        <li><NavLink to='/courses/coursesPages/css'>CSS</NavLink></li>
        <li><NavLink to='/courses/coursesPages/javascript'>JavaScript</NavLink></li> */}
        {/* // the advance way to do the above */}
        <li><NavLink exact to={`${match.url}/coursesPages/html`}>HTML</NavLink></li>
        <li><NavLink to={`${match.url}/coursesPages/css`}>CSS</NavLink></li>
        <li><NavLink to={`${match.url}/coursesPages/javascript`}>JavaScript</NavLink></li> 
      </ul>
    </div>
    
    {/* Write routes here... */}
    
    <Route exact path={`${match.path}`} render={ ()=><Redirect to={`${match.path}/coursesPages/html`} /> } />
    <Route path={`${match.path}/coursesPages/html`} render={ ()=> <CourseContainer data={HTMLCourses} /> } />
      <Route path={`${match.path}/coursesPages/css`} render={ ()=> <CourseContainer data={CSSCourses} /> } />
    <Route path={`${match.path}/coursesPages/javascript`} render={ ()=> <CourseContainer data={JSCourses} /> } />
    
  </div>
);

export default Courses;