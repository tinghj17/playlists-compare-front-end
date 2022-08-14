import React from "react";


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="leftSide">
      🎸 Playlists Compare 🎸
      </div>

      <div className="rightSide">
        <a href="/home">
          My Playlists
        </a>

        <a  href="/compare">
          Play with Friend
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
