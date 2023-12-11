import React, { useState } from "react";
import fetchCoursesApi from "./courses/data/fetchCourses";

const SearchBar = () => {
  const courses = fetchCoursesApi();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Handle the search logic when the "Search" button is clicked
  const handleSearchClick = () => {
    const filteredCourses = courses.filter((course) =>
      course.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredCourses);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search courses by name"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <button onClick={handleSearchClick}>Search</button>

      {/* Render the search results here */}
      {searchResults.map((course) => (
        <div key={course.id}>
          <img src={course.media.image.raw} alt={course.name} />
          <div>{course.name}</div>
        </div>
      ))}
    </div>
  );
};

export default SearchBar;
