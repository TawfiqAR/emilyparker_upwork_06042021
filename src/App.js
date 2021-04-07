import logo from "./logo.svg";
import "./App.css";
import JobCard from "./components/JobCard";
import EmployeeProfile from "./components/EmployeeProfile";
import "antd/dist/antd.css";
import React, { useState } from "react";
import { Modal, Button } from "antd";
import Login from "./components/Login";
import Routes from "./components/Routes";

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
      <Routes />
    </>
  );
}

export default App;
