import React from "react";
import { Row, Col } from "antd";
import Title from "antd/lib/typography/Title";
import Text from "antd/lib/typography/Text";
import Paragraph from "antd/lib/typography/Paragraph";

import {
  TwitterOutlined,
  FacebookOutlined,
  InstagramOutlined
} from "@ant-design/icons";

export default function FooterComponent() {
  return (
    <Row>
      <Col span={6}>
        <Title level={3} style={{ color: "white" }}>
          HUBSTAFF TALENT
        </Title>
      </Col>
      <Col span={4}>
        <Text strong style={{ color: "white" }}>
          TALENT
        </Text>
        <br />
        <br />
        <Paragraph style={{ color: "#93a4bc" }}>How it works</Paragraph>
        <Paragraph style={{ color: "#93a4bc" }}>Why we're free</Paragraph>
        <Paragraph style={{ color: "#93a4bc" }}>Agencies</Paragraph>
      </Col>
      <Col span={4}>
        <Text strong style={{ color: "white" }}>
          HUBSTAFF
        </Text>
        <br />
        <br />
        <Paragraph style={{ color: "#93a4bc" }}>About</Paragraph>
        <Paragraph style={{ color: "#93a4bc" }}>Time tracking</Paragraph>
        <Paragraph style={{ color: "#93a4bc" }}>Developer</Paragraph>
        <Paragraph style={{ color: "#93a4bc" }}>Resources</Paragraph>
      </Col>
      <Col span={4}>
        <Text strong style={{ color: "white" }}>
          SUPPORT
        </Text>
        <br />
        <br />
        <Paragraph style={{ color: "#93a4bc" }}>Help center</Paragraph>
        <Paragraph style={{ color: "#93a4bc" }}>Blog</Paragraph>
        <Paragraph style={{ color: "#93a4bc" }}>FAQ</Paragraph>
        <Paragraph style={{ color: "#93a4bc" }}>Email Us</Paragraph>
        <Paragraph style={{ color: "#93a4bc" }}>Terms</Paragraph>
        <Paragraph style={{ color: "#93a4bc" }}>Privacy</Paragraph>
      </Col>
      <Col span={6}>
        <Text strong style={{ color: "white" }}>
          SOCIAL
        </Text>
        <br />
        <br />
        <TwitterOutlined
          style={{ color: "#93a4bc", fontSize: "20px", marginRight: "10px" }}
        />
        <FacebookOutlined
          style={{ color: "#93a4bc", fontSize: "20px", marginRight: "10px" }}
        />
        <InstagramOutlined style={{ color: "#93a4bc", fontSize: "20px" }} />
      </Col>
    </Row>
  );
}
