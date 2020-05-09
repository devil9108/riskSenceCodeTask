import React, { useEffect, useState } from "react";
import "./styles.css";
import Axios from "axios";

import NavBar from "./Components/NavBar";
import Main from "./Components/Main";
import FooterComponent from "./Components/Footer";

import { Layout, Row, Col } from "antd";

let { Header, Footer, Content } = Layout;

export default function App() {
  let [data, setData] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:9090/api/jobdescriptions/")
      .then(res => setData([...res.data]))
      .catch(err => console.log(err));
  }, []);
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
          <Main data={data} setData={setData} />
        </Content>
        <Footer style={{ backgroundColor: "#324358", color: "white" }}>
          <FooterComponent />
        </Footer>
      </Layout>
    </div>
  );
}
