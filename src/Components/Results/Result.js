import React from "react";
import { Row, Col, Select } from "antd";
import Title from "antd/lib/typography/Title";
import Text from "antd/lib/typography/Text";

let { Option } = Select;

export default function Result() {
  const handleChange = value => {
    console.log(value);
  };
  return (
    <div >
      <Row justify={"space-between"}>
        <Col>
          <Title level={3}>Results (24)</Title>
        </Col>
        <Col>
          <Text type="secondary">Sort by </Text>
          <Select defaultValue="relevence" style = {{ width: '120px' }} onChange={handleChange}>
            <Option value="relevence">Relevence</Option>
            <Option value="budget">Budget</Option>
            <Option value="payRate">Pay Rate</Option>
            <Option value="dateAdded">Date Added</Option>
          </Select>
        </Col>
      </Row>
    </div>
  );
}
