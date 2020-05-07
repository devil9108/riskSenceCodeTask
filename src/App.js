import React from "react";
import "./styles.css";

import NavBar from "./Components/NavBar";
import Main from "./Components/Main";

import { Layout, Row, Col } from "antd";

let { Header, Footer, Content } = Layout;

export default function App() {
  return (
    <div className="App">
      <Layout>
        <Header className="header">
          {/* <Row justify="end">
            <NavBar />
          </Row> */}
          <Row justify="space-between">
            <Col>
              <h4>Title</h4>
            </Col>
            <Col>
              <NavBar />
            </Col>
          </Row>
        </Header>
        <Content style={{ padding: "20px 50px 20px 50px" }}>
          <Main />
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
}
