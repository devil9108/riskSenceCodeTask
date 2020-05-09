import React from "react";
import { Divider, Row, Col } from "antd";
import Title from "antd/lib/typography/Title";
import Text from "antd/lib/typography/Text";
import Paragraph from "antd/lib/typography/Paragraph";

export default function Rsider() {
  return (
    <>
      <div>
        <Title level={4}>TOP JOBS</Title>
        <Divider style={{ backgroundColor: "#bbb", margin: "10px 0px" }} />
        <Row justify={"space-between"} style={{ margin: "10px 0px" }}>
          <Col>
            <Text strong>Senior Ruby on Rails Engineer</Text>
          </Col>
          <Col>
            <Text strong>&#x20b9; 2000/hr</Text>
          </Col>
        </Row>
        <Row>
          <Col>
            <Paragraph>
              Full time role for front end development. should be able to
              develop cross browser application
            </Paragraph>
          </Col>
        </Row>
        <Row justify={"space-between"} style={{ margin: "10px 0px" }}>
          <Col>
            <Text strong>Ruby on Rails Engineer</Text>
          </Col>
          <Col>
            <Text strong>&#x20b9; 1500/hr</Text>
          </Col>
        </Row>
        <Row>
          <Col>
            <Paragraph>
              Full time role for front end development. should be able to
              develop cross browser application
            </Paragraph>
          </Col>
        </Row>
      </div>
      <br />
      <div>
        <Title level={4}>MOST VIEWED THIS WEEK</Title>
        <Divider style={{ backgroundColor: "#bbb", margin: "10px 0px" }} />
        <Row justify={"space-between"} style={{ margin: "10px 0px" }}>
          <Col>
            <Text strong>Senior Ruby on Rails Engineer</Text>
          </Col>
          <Col>
            <Text strong>&#x20b9; 2000/hr</Text>
          </Col>
        </Row>
        <Row>
          <Col>
            <Paragraph>
              Full time role for front end development. should be able to
              develop cross browser application
            </Paragraph>
          </Col>
        </Row>
        <Row justify={"space-between"} style={{ margin: "10px 0px" }}>
          <Col>
            <Text strong>Ruby on Rails Engineer</Text>
          </Col>
          <Col>
            <Text strong>&#x20b9; 1500/hr</Text>
          </Col>
        </Row>
        <Row>
          <Col>
            <Paragraph>
              Full time role for front end development. should be able to
              develop cross browser application
            </Paragraph>
          </Col>
        </Row>
      </div>
    </>
  );
}
