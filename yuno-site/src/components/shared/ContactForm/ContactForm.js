import React from "react";
import "./ContactForm.scss";

class ContactForm extends React.Component {
  render() {
    return (
      <div className="contact-form">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfANypCj-VygrbZWonoZrrllPcHF_tU18t9NvV13XdnMNklXw/viewform?embedded=true"
          width="640"
          height="1249"
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
