import React from "react";
import "./Resources.scss";

class Resources extends React.Component {
  render() {
    return (
      <div className="resources-container">
        <h1 className="mt-3">Community Resources</h1>
        <p className="one-line">
          Youth Ultimate, Nashville Organized is a part of a bigger ultimate
          scene, all promoting competitive high level ultimate.
        </p>
        <div className="resources-container d-flex flex-column text-left ml-4">
          <div className="num-container mb-3">
            <a href="https://www.nashvilleultimate.com">
              <h5>Nashville Ultimate Machine (NUM)</h5>
            </a>
            <div className="num-content d-flex flex-row">
              <p>
                Nashville Ultimate Machine is the governing body of competitive
                ultimate frisbee in Nashville. They offer leagues and additional
                opportunities to play and collaborate with YUNO to partner for
                clinics and youth leagues.
              </p>
              <img
                className="num-logo"
                src="https://raw.githubusercontent.com/williaj615/Yuno/master/yuno-site/photos/num%20logo.png"
                alt="num-logo"
              ></img>
            </div>
          </div>
          <div className="gum-container mt-2">
            <a href="https://gum.usaultimate.org/">
              <h5>Girls Ultimate Movement (GUM)</h5>
            </a>
            <div className="gum-content d-flex flex-row">
              <p>
                Girls Ultimate Movement is an organization that supports girls
                ultimate throughout the country. For more information about
                their programs, click{" "}
                <a href="https://gum.usaultimate.org/">here</a>.
              </p>
              <img
                src="https://raw.githubusercontent.com/williaj615/Yuno/master/yuno-site/photos/gum%20logo.png"
                alt="gum-logo"
              ></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Resources;
