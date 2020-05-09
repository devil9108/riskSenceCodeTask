import React, { useEffect, useState } from "react";
import { Row, Col, Select, Pagination } from "antd";
import Title from "antd/lib/typography/Title";
import Text from "antd/lib/typography/Text";
import { jobs } from "../../jobsAvailable.js";

import DisplayJob from "./DisplayJob";

let { Option } = Select;

export default function Result() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([...jobs.slice(page * 5 - 5, page * 5)]);

  useEffect(() => {
    setData([...jobs.slice(page * 5 - 5, page * 5)]);
  }, [page]);

  const handleChange = value => {
    console.log(value);
    setPage(value);
  };
  return (
    <div style={{}}>
      <div style={{ padding: "20px", backgroundColor: "white" }}>
        <Row justify={"space-between"}>
          <Col>
            <Title level={3}>Results (24)</Title>
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
        {data.map(job => (
          <DisplayJob data={job} />
        ))}
      </div>
      <Pagination
        size="small"
        total={jobs.length}
        pageSize={5}
        responsive
        style={{ width: "100%", padding: "10px", textAlign: "right" }}
        onChange={handleChange}
      />
    </div>
  );
}
