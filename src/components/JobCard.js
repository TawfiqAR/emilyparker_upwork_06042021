import React, { useState } from "react";
// import TinderCard from '../react-tinder-card/index'
import TinderCard from "react-tinder-card";
import { employers, jobs, employee } from "../data/Data";

function JobCard() {
  const [lastDirection, setLastDirection] = useState();

  const swiped = (direction, job) => {
    setLastDirection(direction);
    employee.jobsLiked.push(job);
    job.employeeInterested.push(employee);
    console.log(jobs);
  };

  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css?family=Damion&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Alatsi&display=swap"
        rel="stylesheet"
      />
      <h1>Find A Job</h1>
      <div className="cardContainer">
        {jobs.map((job) => (
          <TinderCard
            className="swipe"
            key={job.id}
            onSwipe={(dir) => swiped(dir, job)}
          >
            <div style={{ backgroundColor: "#000" }} className="card">
              <h3>{job.description}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
      {lastDirection === "right" ? (
        <h2 className="infoText">Job Liked</h2>
      ) : (
        <h2 className="infoText">Job Skipped</h2>
      )}
    </div>
  );
}

export default JobCard;
