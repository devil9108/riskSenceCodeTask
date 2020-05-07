import React from "react";
import { Row, Col } from "antd";

import SearchBar from "./SearchBar";
import Lsider from "./LeftSider/Lsider";
import Result from "./Results/Result";

export default function Main() {
  return (
    <>
      <Row>
        <Col span={24}>
          <SearchBar />
        </Col>
      </Row>
      <Row justify="space-between" style={{ marginTop: "40px" }}>
        <Col
          span={5}
          className='lSider'
        >
          <Lsider />
        </Col>
        <Col span={11}><Result /></Col>
        <Col span={5}>RSide</Col>
      </Row>
    </>
  );
}
