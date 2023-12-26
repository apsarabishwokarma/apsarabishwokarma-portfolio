import React from "react";

function Header() {
  return (
    <header>
      <div className="flex gap-4">
        <h2>AB</h2>
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Work</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Contact Me</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
