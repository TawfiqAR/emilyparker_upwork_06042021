import React, { useState } from "react";
import { Modal, Button } from "antd";
import TinderCard from "react-tinder-card";
import { employers, jobs, employee } from "../data/Data";
import { Drawer } from "antd";
import EmployeeProfile from "./EmployeeProfile";

function JobCard() {
  const [lastDirection, setLastDirection] = useState();

  const swiped = (direction, job) => {
    setLastDirection(direction);
    if (direction === "right") {
      employee.jobsLiked.push(job);
      job.employeeInterested.push(employee);
    }
  };
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const [descriptionVisible, setDescriptionVisible] = useState(false);

  const showDiscription = () => {
    setDescriptionVisible(true);
  };

  const handleOkDescription = () => {
    setDescriptionVisible(false);
  };

  const handleCancelDescription = () => {
    setDescriptionVisible(false);
  };

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Show User Profile
      </Button>
      <Modal
        title="Employee Profile"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <EmployeeProfile />
      </Modal>

      <h1>Find A Job</h1>

      <div className="cardContainer">
        {jobs.map((job) => (
          <>
            <TinderCard
              className="swipe"
              key={job.id}
              onSwipe={(dir) => swiped(dir, job)}
            >
              <Modal
                title={job.title}
                visible={descriptionVisible}
                onOk={handleOkDescription}
                onCancel={handleCancelDescription}
              >
                <p>{job.description}</p>
              </Modal>
              <div
                style={{ backgroundImage: "url(" + job.url + ")" }}
                className="card"
              >
                <h3>{job.title}</h3>
                <a onClick={showDiscription}>Description</a>
              </div>
              <p />
            </TinderCard>
          </>
        ))}
      </div>

      {lastDirection === "right" && <h2 className="infoText">Job Liked</h2>}
    </div>
  );
}

export default JobCard;
