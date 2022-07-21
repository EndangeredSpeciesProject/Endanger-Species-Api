import React from 'react';

export default function About() {
  return (
    <div className="bios-and-links">
      <div className="bio-box">
        <img src="/images/icon-logo.png" />
        <h3>Pedro Chavez-Nolasco</h3>
        <h4>One sentence text for Pedro</h4>
        <div className="icons">
          <a href="https://www.linkedin.com/in/pedro-chaveznolasco/" target="/blank"><img src="/images/LinkedIn-icon.png" className="linkedin-icon" /></a>
          <a href="https://github.com/PCN23" target="/blank"><img src="/images/GitHub-icon.png" className="github-icon" /></a>
        </div>
      </div>
      <div className="bio-box">
        <img src="/images/icon-logo.png" />
        <h3>Austin Han</h3>
        <h4>One sentence text for Austin</h4>
        <div className="icons">
          <a href="https://www.linkedin.com/in/austin-han-740a69157/" target="/blank"><img src="/images/LinkedIn-icon.png" className="linkedin-icon" /></a>
          <a href="https://github.com/austinbhan" target="/blank"><img src="/images/GitHub-icon.png" className="github-icon" /></a>
        </div>
      </div>
      <div className="bio-box">
        <img src="/images/icon-logo.png" />
        <h3>Amanda Hecht</h3>
        <h4>One sentence text for Amanda</h4>
        <div className="icons">
          <a href="https://www.linkedin.com/in/amanda-hecht/" target="/blank"><img src="/images/LinkedIn-icon.png" className="linkedin-icon" /></a>
          <a href="https://github.com/amanda-hecht89" target="/blank"><img src="/images/GitHub-icon.png" className="github-icon" /></a>
        </div>
      </div>

      <div className="bio-box">
        <img src="/images/icon-logo.png" />
        <h3>Chad Stabler</h3>
        <h4>One sentence text for Chad</h4>
        <div className="icons">
          <a href="https://www.linkedin.com/in/chad-stabler/" target="/blank"><img src="/images/LinkedIn-icon.png" className="linkedin-icon" /></a>
          <a href="https://github.com/Chad-Stabler" target="/blank"><img src="/images/GitHub-icon.png" className="github-icon" /></a>
        </div>
      </div>
    </div>
  );
}