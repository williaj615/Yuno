import React from "react";
import "./ContactForm.scss";

class ContactForm extends React.Component {
  render() {
    return (
      <div className="contact-form">
        <form>
          <div className="form-group">
            <div class="row">
              <legend class="col-form-label col-sm-2 pt-0">I am a:</legend>
              <div class="col-sm-10">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios1"
                    value="option1"
                  ></input>
                  <label class="form-check-label" for="gridRadios1">
                    Parent
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios2"
                    value="option2"
                  ></input>
                  <label class="form-check-label" for="gridRadios2">
                    Teacher/School Official
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios3"
                    value="option3"
                  ></input>
                  <label class="form-check-label" for="gridRadios3">
                    Student/Youth Player
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="form-group row pt-2">
            <div class="col-sm-2">I'm interested in:</div>
            <div class="col-sm-10">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="formCheck1"
                ></input>
                <label class="form-check-label" for="formCheck1">
                  Forming a team at my school
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="formCheck2"
                ></input>
                <label class="form-check-label" for="formCheck2">
                  Participating in a clinic
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="formCheck3"
                ></input>
                <label class="form-check-label" for="formCheck3">
                  Getting my child involved in ultimate
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="formCheck4"
                ></input>
                <label class="form-check-label" for="formCheck4">
                  Joining a team
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="formCheck5"
                ></input>
                <label class="form-check-label" for="formCheck5">
                  More information
                </label>
              </div>
            </div>
          </div>
          <div class="form-group col-md-6">
            <label for="inputEmail">Your contact email:</label>
            <input
              type="email"
              class="form-control"
              id="inputEmail"
              placeholder="Email"
            ></input>
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default ContactForm;
