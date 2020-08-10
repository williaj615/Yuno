import React from "react";
import "./About.scss";

class About extends React.Component {
  render() {
    return (
      <div>
        <h1> About YUNO</h1>
        <div className="page-content d-flex flex-column flex-wrap text-left ml-5">
          <div className="mission-statement">
            <h3 className="">Mission Statement</h3>
            <p className="mission-text">
              Youth Ultimate Nashville Organized (YUNO) exists to serve the
              Nashville community through building a foundation of leadership,
              teamwork, and trust for youth by increasing access to Ultimate
              Frisbee.
            </p>
          </div>
          <div className="meet-team-container mb-4">
            <h3>Meet the Team</h3>
            <div className="team-container d-flex flex-row justify-content-around">
              <div className="mia-container coach">
                <p>Mia</p>
                <img
                  src="https://raw.githubusercontent.com/williaj615/Yuno/master/yuno-site/photos/0.jpg"
                  alt="mia"
                ></img>
              </div>
              <div className="chris-container coach">
                <p>Chris</p>
                <img
                  src="https://raw.githubusercontent.com/williaj615/Yuno/master/yuno-site/photos/0-1.jpg"
                  alt="chris"
                ></img>
              </div>
              <div className="mikeie-container coach">
                <p>Mikeie</p>
                <img
                  src="https://raw.githubusercontent.com/williaj615/Yuno/master/yuno-site/photos/Screen-Shot-2016-09-28-at-5.59.38-PM.png"
                  alt="mikeie"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
