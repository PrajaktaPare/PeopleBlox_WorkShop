import React from "react";
import './navbar.css';
import SearchBar from './SearchBar';
export default function()
{
  return(
    <div className="navbar">
      <nav className="a">
      <a href="#" className="Title">PeopleBlox</a>
      <a href="#">Movies</a>
      
        <a href="#">Home</a>
        <a href="#">About</a>
        <SearchBar/>
      </nav>
    </div>);
}

