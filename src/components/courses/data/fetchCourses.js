import React, { useEffect, useState } from 'react';
import { Container } from '@edx/paragon';


const fetchCoursesApi = () => {
  const [courses, setCourses] = useState([]);
  const fetchData = () => {
    fetch('http://local.overhang.io:8000/api/courses/courses/')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok (status ${response.status})`);
        }
        return response.json();
      })
      .then((data) => setCourses(data.results))
      .catch((error) => {
        console.log('Error fetching data:', error);
        console.log('Error status:', error.status);
        console.log('Error response:', error.response);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return courses;
}
export default fetchCoursesApi;
