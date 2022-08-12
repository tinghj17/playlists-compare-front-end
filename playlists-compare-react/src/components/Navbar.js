import React from "react";

const Navbar = () => {
  return (
      <nav className="nav">
        {/* <a href="/" className="site-title">Demo</a> */}
        <ul>
          <li className="active">
            <a href="/home">My Playlists</a>
          </li>
          <li className="active">
            <a href="/compare">Play with Friends</a>
          </li>
        </ul>
      </nav>
  )
}

export default Navbar;