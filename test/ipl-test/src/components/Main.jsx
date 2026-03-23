import React from "react";
import "./Main.css";
import { Link } from "react-router-dom";

function Main() {
  return (
    <div>
      <header className="mainHeader">
        <h1 className="mainHeader-title">IPL Auction page</h1>
        <p className="mainHeader-description">
          Create or join a lobby to participate in auction
        </p>
        <img className="mainHeader-userLogo" src="" alt="User" />
      </header>

      <div className="body-container">
        <button className="body-button">Join Lobby</button>
        <button className="body-button">Create Lobby</button>
      </div>
    </div>
  );
}

export default Main;