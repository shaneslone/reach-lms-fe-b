import React from 'react';
import { Form, Input, Select, Button } from 'antd';
import ListCourseCards from './ListCourseCards';

export default ({
  onCourseRemove,
  getFieldValue,
  triggerEdit,
  showCourseModal,
}) => {
  return (
    <>
      {/* PROGRAM NAME */}
      <Form.Item
        name="programName"
        label="Program Name"
        rules={[{ required: true, message: 'Missing Program Name' }]}
      >
        <Input />
      </Form.Item>

      {/* Program Type */}
      <Form.Item
        name="programType"
        label="Program Type"
        rules={[{ required: true, message: 'Missing Program Type' }]}
      >
        <Select defaultValue="edu_k12">
          <Select.Option value="edu_k12">Education (K-12)</Select.Option>
          <Select.Option value="edu_higher">Education (Higher)</Select.Option>
          <Select.Option value="training">Training</Select.Option>
          <Select.Option value="other">Other</Select.Option>
        </Select>
      </Form.Item>

      {/* Program Description */}
      <Form.Item name="programDescription" label="Program Description">
        <Input.TextArea />
      </Form.Item>
    </>
  );
};
