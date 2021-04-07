import logo from "./logo.svg";
import "./App.css";
import JobCard from "./components/JobCard";
import EmployeeProfile from "./components/EmployeeProfile";
import "antd/dist/antd.css";
import React, { useState } from "react";
import { Modal, Button } from "antd";

function App() {
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

  return (
    <>
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

      <JobCard />
    </>
  );
}

export default App;
