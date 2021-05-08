import React from "react";

function Header() {
  return (
    <header>
      <img
        src="https://linkrr.in/uploads/avatars/13eb41f6a112c6773427fc24b53d06b1.png"
        className="profile__pic"
        alt="ProfilePhoto"
      />

      <div className="profile__detail">
        <h1>DESIGNSUBWAY</h1>
        <p>GRAPHIC DESIGNER</p>
      </div>
    </header>
  );
}

export default Header;
