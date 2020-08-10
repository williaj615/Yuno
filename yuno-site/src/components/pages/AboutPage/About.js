import React from "react";
import ContactForm from "../../shared/ContactForm/ContactForm";
import "./About.scss";

class About extends React.Component {
  render() {
    return (
      <div>
        <h1> About YUNO</h1>
        <div className="page-content d-flex flex-column flex-wrap text-left ml-5">
          <div className="mission-statement">
            <h3 className="">Mission Statement</h3>
            <p>
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
                <h5>Mia</h5>
                <img
                  src="https://media-exp1.licdn.com/dms/image/C5603AQGC2KNzE6s61Q/profile-displayphoto-shrink_400_400/0?e=1600905600&v=beta&t=gL6sf4c-n9lhQsH9uvjs0UUABkvXc0QVUbFJY_rxmQg"
                  alt="mia"
                ></img>
              </div>
              <div className="chris-container coach">
                <h5>Chris</h5>
                <img
                  src="https://media-exp1.licdn.com/dms/image/C4E03AQF6vgcq4d5MAA/profile-displayphoto-shrink_400_400/0?e=1600905600&v=beta&t=p4gKQyu86eBng3jIo_Y2O6cSVT5ebjO1AkrtIePy9JE"
                  alt="chris"
                ></img>
              </div>
              <div className="mikeie-container coach">
                <h5>Mikeie</h5>
                <img
                  src="https://storyterrace.com/wp-content/uploads/2017/09/Screen-Shot-2016-09-28-at-5.59.38-PM.png"
                  alt="mikeie"
                ></img>
              </div>
            </div>
          </div>
          <div>
            <h3>Contact YUNO</h3>
            <p>
              Complete the form below or send an email to
              <a className="ml-1" href="mailto:yunonashville@gmail.com">
                yunonashville@gmail.com
              </a>
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
