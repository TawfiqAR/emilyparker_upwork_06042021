import React, { useState } from "react";
import { jobs, employers } from "../data/Data";
import { List, Modal, Button } from "antd";
import { useParams } from "react-router";
import EmployeeProfile from "./EmployeeProfile";

function EmployerProfile() {
  const { id } = useParams();

  const employer = employers.find((employer) => employer.id == id);
  const employerJobs = jobs.filter((job) => employer.jobs.includes(job.id));

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
    <div>
      <h1>{employer.name}</h1>
      <p />
      <h1>Jobs Posted</h1>
      <List
        bordered
        dataSource={employerJobs}
        renderItem={(item) => (
          <List.Item>
            Title: {item.title}
            <p />
            Description: {item.description}
            <p />
            {item.employeeInterested.length != 0 && (
              <>
                Employees Interested
                <p />
                <Button type="primary" onClick={showModal}>
                  {item.employeeInterested[0].name}
                </Button>
                <Modal
                  title={item.employeeInterested[0].name}
                  visible={isModalVisible}
                  onOk={handleOk}
                  onCancel={handleCancel}
                >
                  <EmployeeProfile />
                </Modal>
              </>
            )}
          </List.Item>
        )}
      />
    </div>
  );
}

export default EmployerProfile;
