import React from 'react';
import { Row, Col } from 'antd';
import Title from "antd/lib/typography/Title";
import Text from "antd/lib/typography/Text";

export default function DisplayJob(props){
  console.log(props);

  return(
    <Row key={props.data.id}>
      <Col span={24}>
        <Title value={4}>{props.data.title}</Title>
      </Col>
    </Row>
  );
}