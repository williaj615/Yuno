import React from "react";

class Programs extends React.Component {
  render() {
    return (
      <div>
        <h1>Programs</h1>
        <div className="page-content d-flex flex-column flex-wrap text-left ml-4">
          <h4>What is ultimate frisbee?</h4>
          <p>
            Ultimate frisbee is a fast-paced team sport that combines elements
            of soccer, football, and basketball. It is self-officiated, which
            places the burden for fair play on each individual player. Ultimate
            frisbee fosters leadership, teamwork, and trust.
          </p>
          <h4>Spirit of the Game</h4>
          <p>
            Spirit of the game is an important part of Ultimate. It teaches
            players how to be competitive and engaged while also standing up for
            what they believe in.
          </p>
          <h4>Clinics</h4>
          <p>
            We offer clinics to students in grades 5-12. We teach the
            fundamentals of throwing and catching, eventually advancing to more
            complex cutting patterns and plays. No prior experience is required,
            and we welcome players of all skill levels.
          </p>
          <h4>Camps</h4>
          <p>
            We plan on offering a summer camp in 2021. Stay tuned for dates and
            more information.
          </p>
        </div>
      </div>
    );
  }
}

export default Programs;
