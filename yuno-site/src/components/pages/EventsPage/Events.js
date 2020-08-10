import React from "react";
import "./Events.scss";
import EventsContainer from "../../shared/EventsContainer/EventsContainer";

class Events extends React.Component {
  render() {
    return (
      <div className="events-page-container">
        <h1>Upcoming YUNO Events</h1>
        <EventsContainer />
      </div>
    );
  }
}

export default Events;
