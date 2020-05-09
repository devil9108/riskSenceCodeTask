import React from "react";
import { Row, Col, Select, List } from "antd";
import Title from "antd/lib/typography/Title";
import Text from "antd/lib/typography/Text";

import DisplayJob from "./DisplayJob";

let { Option } = Select;

export default function Result(props) {

  const handleChange = value => {
    console.log(value);
  };

  return (
    <div style={{}}>
      <div style={{ padding: "20px", backgroundColor: "white" }}>
        <Row justify={"space-between"}>
          <Col>
            <Title level={3}>Results ({props.data.length})</Title>
          </Col>
          <Col>
            <Text type="secondary">Sort by </Text>
            <Select
              defaultValue="relevence"
              style={{ width: "120px" }}
              onChange={handleChange}
            >
              <Option value="relevence">Relevence</Option>
              <Option value="budget">Budget</Option>
              <Option value="payRate">Pay Rate</Option>
              <Option value="dateAdded">Date Added</Option>
            </Select>
          </Col>
        </Row>
        <List
        itemLayout='vertical'
        pagination={{
          onChange: page => console.log(page),pageSize:5, size:'small'
        }}
        dataSource={props.data}
        renderItem={ item => <DisplayJob data={item} />}
        />
      </div>
    </div>
  );
}
