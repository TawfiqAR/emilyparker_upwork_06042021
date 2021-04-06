import React, { useState } from "react";
import { Employer, Job, Employee } from "../data/EmployerData";
import { List, Card, Input, Typography, Divider } from "antd";
import { InfoCircleOutlined, UserOutlined } from "@ant-design/icons";

function EmployeeProfile() {
  return (
    <Card title={Employee.name}>
      <Input prefix={<UserOutlined />} disabled value={Employee.name} />
      <p />
      <Divider orientation="left">Skills</Divider>
      <List
        bordered
        dataSource={Employee.skills}
        renderItem={(item) => (
          <List.Item>
            <Typography.Text mark></Typography.Text> {item}
          </List.Item>
        )}
      />

      <p />
      <Divider orientation="left">Jobs Liked</Divider>
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={Employee.jobsLiked}
        renderItem={(item) => (
          <List.Item>
            <Card title={item.employerId}>{item.description}</Card>
          </List.Item>
        )}
      />
    </Card>
  );
}

export default EmployeeProfile;
