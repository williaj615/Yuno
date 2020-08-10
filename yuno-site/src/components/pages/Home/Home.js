import React from "react";
import "./Home.scss";
import EventsContainer from "../../shared/EventsContainer/EventsContainer";

class Home extends React.Component {
  render() {
    return (
      <div>
        <header id="header" class="alt">
          <div clasName="inner">
            <h1>
              {" "}
              <span className="iknow">I know.</span>
              <span className="yuno">YUNO.</span>
              <span className="weknow">We know.</span>
            </h1>
            <p>Youth Ultimate Nashville Organized</p>
          </div>
        </header>
        <div>
          <h1 className="mt-3">Upcoming Events</h1>
          <EventsContainer />
        </div>
        <div className="home-photo-grid d-flex flex-row flex-wrap justify-content-center">
          <img
            src="https://images.unsplash.com/photo-1585953074857-19f89c2ed52f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
            alt=""
          ></img>
          <img
            src="https://images.unsplash.com/photo-1591337819702-5c21810edd47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            alt=""
          ></img>
          <img
            src="https://d36m266ykvepgv.cloudfront.net/uploads/media/HOZegA8WBG/s-870-653/img-3075-2.jpg"
            alt=""
          ></img>
          <img
            src="https://d36m266ykvepgv.cloudfront.net/uploads/media/eXXtlI0xsu/s-870-490/yl-15-9.png"
            alt=""
          ></img>
          <img
            src="https://d36m266ykvepgv.cloudfront.net/uploads/media/CfMaiZnkSq/s-870-490/img-3477.png"
            alt=""
          ></img>
          <img
            src="https://d36m266ykvepgv.cloudfront.net/uploads/media/rG7EneZ0wM/s-599-450/bw9sciycaaaxoru.jpg"
            alt=""
          ></img>
        </div>
      </div>
    );
  }
}

export default Home;
