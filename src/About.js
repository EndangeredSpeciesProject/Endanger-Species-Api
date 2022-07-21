import React from 'react';

export default function About() {
  return (
    <div className="bios-and-links">
      <div className="bio-box">
        <img className="profile-pic" src="/images/pedro.jpeg" />
        <h3>Pedro Chavez-Nolasco</h3>
        <div className="icons">
          <a href="https://www.linkedin.com/in/pedro-chaveznolasco/" target="/blank"><img src="/images/LinkedIn-icon.png" className="linkedin-icon" /></a>
          <a href="https://github.com/PCN23" target="/blank"><img src="/images/GitHub-icon.png" className="github-icon" /></a>
        </div>
      </div>
      <div className="bio-box">
        <img className="profile-pic" src="/images/austin.jpeg" />
        <h3>Austin Han</h3>
        <div className="icons">
          <a href="https://www.linkedin.com/in/austin-han-740a69157/" target="/blank"><img src="/images/LinkedIn-icon.png" className="linkedin-icon" /></a>
          <a href="https://github.com/austinbhan" target="/blank"><img src="/images/GitHub-icon.png" className="github-icon" /></a>
        </div>
      </div>
      <div className="bio-box">
        <img className="profile-pic" src="/images/amanda.jpeg" />
        <h3>Amanda Hecht</h3>
        <div className="icons">
          <a href="https://www.linkedin.com/in/amanda-hecht/" target="/blank"><img src="/images/LinkedIn-icon.png" className="linkedin-icon" /></a>
          <a href="https://github.com/amanda-hecht89" target="/blank"><img src="/images/GitHub-icon.png" className="github-icon" /></a>
        </div>
      </div>

      <div className="bio-box">
        <img className="profile-pic" src="/images/chad.jpeg" />
        <h3>Chad Stabler</h3>
        <div className="icons">
          <a href="https://www.linkedin.com/in/chad-stabler/" target="/blank"><img src="/images/LinkedIn-icon.png" className="linkedin-icon" /></a>
          <a href="https://github.com/Chad-Stabler" target="/blank"><img src="/images/GitHub-icon.png" className="github-icon" /></a>
        </div>
      </div>
    </div>
  );
}