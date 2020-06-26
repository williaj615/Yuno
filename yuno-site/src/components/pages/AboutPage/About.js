import React from "react";
import ContactForm from "../../shared/ContactForm/ContactForm";

class About extends React.Component {
  render() {
    return (
      <div>
        <h1> About YUNO</h1>
        <div>
          <h3 className="">Mission Statement</h3>
          <p>
            Youth Ultimate Nashville Organized (YUNO) exists to serve the
            Nashville community through building a foundation of leadership,
            teamwork, and trust for youth by increasing access to Ultimate
            Frisbee.
          </p>
        </div>
        <div>
          <h3>Meet the Team</h3>
          <h5>Mia</h5>
          <h5>Chris</h5>
          <h5>Mikeie</h5>
        </div>
        <div>
          <h3>Contact YUNO</h3>
          <p>
            Complete the form below or send an email to yunonashville@gmail.com
          </p>
          <ContactForm />
        </div>
      </div>
    );
  }
}

export default About;
