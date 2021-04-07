import React, { useState } from "react";
import { employee, jobs, employers } from "../data/Data";
import { List, Card, Input, Typography, Divider } from "antd";
import { InfoCircleOutlined, UserOutlined } from "@ant-design/icons";

function EmployeeProfile() {
  return (
    <Card title={employee.name}>
      <Input prefix={<UserOutlined />} disabled value={employee.name} />
      <p />
      <Divider orientation="left">Skills</Divider>
      <List
        bordered
        dataSource={employee.skills}
        renderItem={(item) => (
          <List.Item>
            <Typography.Text mark></Typography.Text> {item}
          </List.Item>
        )}
      />

      <p />
      <Divider orientation="left">Jobs Liked</Divider>
      <List
        bordered
        dataSource={employee.jobsLiked}
        renderItem={(item) => (
          <List.Item>
            <Typography.Text mark></Typography.Text> {item.description}
          </List.Item>
        )}
      />
    </Card>
  );
}

export default EmployeeProfile;
