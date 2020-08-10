import React from "react";
import "./ContactForm.scss";

class ContactForm extends React.Component {
  render() {
    return (
      <div className="contact-form">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSf9CX-KvDWeOL8NmOFvvCepEZ7NYV-QrQOzwi4A3i0NgCg66A/viewform?embedded=true"
          width="640"
          height="1245"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </div>
    );
  }
}

export default ContactForm;
