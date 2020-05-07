import React from "react";
import {
  Row,
  Col,
  Button,
  Divider,
  Typography,
  Select,
  Checkbox,
  Slider,
  Input
} from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";

import { skills, countryList, LANGUAGES } from "../../RawData";

let { Title } = Typography;
const { Option } = Select;
let marks = { 1: 1, 40: "40+" };
let defaultRange = [18, 27];

export default function Lsider() {
  let skillsOption = skills.map(skill => <Option key={skill}>{skill}</Option>);
  let cities = countryList.map(country => (
    <Option key={country}>{country}</Option>
  ));
  let languages = LANGUAGES.map(language => (
    <Option key={language}>{language}</Option>
  ));

  let selectedSkills = [skills[0], skills[2], skills[7]];

  const handleChange = value => console.log(value);

  return (
    <div style={{width:'90%'}}>
      <Row justify="space-between" align="middle">
        <Col>
          <Title level={3} style={{ margin: "0px" }}>
            FILTERS
          </Title>
        </Col>
        <Col>
          <Button
            type="link"
            text="secondary"
            style={{ color: "#bbb", padding: "0px" }}
          >
            Clear All Filters
          </Button>
        </Col>
      </Row>
      <Divider style={{ backgroundColor: "#bbb", margin: "10px 0px" }} />
      <Row justify="space-between" align="middle">
        <Col>
          <Title level={4} style={{ margin: "0px" }}>
            Skills
          </Title>
        </Col>
        <Col>
          <Button type="link" style={{ color: "#bbb", padding: "0px" }}>
            Clear
          </Button>
        </Col>
      </Row>
      <Row id="skills">
        <Col span={24}>
          <Select
            mode="multiple"
            placeholder="Please select"
            defaultValue={selectedSkills}
            onChange={handleChange}
            style={{ width: "100%" }}
          >
            {skillsOption}
          </Select>
        </Col>
      </Row>
      <br />
      <Row justify="space-between" align="middle">
        <Col>
          <Title level={4} style={{ margin: "0px" }}>
            Availability <InfoCircleOutlined style={{ color: "#bbb" }} />
          </Title>
        </Col>
        <Col>
          <Button type="link" style={{ color: "#bbb", padding: "0px" }}>
            Clear
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Checkbox className="checkBox" onChange={handleChange}>
            Hourly
          </Checkbox>
          <br />
          <Checkbox className="checkBox" onChange={handleChange}>
            Part-time(20hrs/wk)
          </Checkbox>
          <br />
          <Checkbox className="checkBox" onChange={handleChange}>
            Full-time(40hrs/wk)
          </Checkbox>
        </Col>
      </Row>
      <br />
      <Row justify="space-between" align="middle">
        <Col>
          <Title level={4} style={{ margin: "0px" }}>
            Select Job Type <InfoCircleOutlined style={{ color: "#bbb" }} />
          </Title>
        </Col>
        <Col>
          <Button type="link" style={{ color: "#bbb", padding: "0px" }}>
            Clear
          </Button>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Select
            placeholder="Select A Job Type"
            style={{ width: "100%", marginTop: "10px" }}
            onChange={handleChange}
          >
            <Option value="Perminent">Perminent</Option>
            <Option value="Contract">Contract</Option>
          </Select>
        </Col>
      </Row>
      <br />
      <Row justify="space-between" align="middle">
        <Col>
          <Title level={4} style={{ margin: "0px" }}>
            Pay Rate / hr ($)
          </Title>
        </Col>
        <Col>
          <Button type="link" style={{ color: "#bbb", padding: "0px" }}>
            Clear
          </Button>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Input
            defaultValue={defaultRange[0]}
            maxLength={2}
            style={{ width: "40px", marginTop: "20px" }}
          />{" "}
          -{" "}
          <Input
            defaultValue={defaultRange[1]}
            maxLength={2}
            style={{ width: "40px" }}
          />
          <br />
          <Slider
            range
            min={1}
            max={40}
            marks={marks}
            defaultValue={[18, 27]}
            style={{ width: "93%" }}
            onAfterChange={handleChange}
          />
          <Checkbox className="checkBox" checked onChange={handleChange}>
            Include profiles without pay rates
          </Checkbox>
        </Col>
      </Row>
      <br />
      <Row justify="space-between" align="middle">
        <Col>
          <Title level={4} style={{ margin: "0px" }}>
            Experience Level
          </Title>
        </Col>
        <Col>
          <Button type="link" style={{ color: "#bbb", padding: "0px" }}>
            Clear
          </Button>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Select
            placeholder="Select your experience level"
            style={{ width: "100%", marginTop: "10px" }}
            onChange={handleChange}
          >
            <Option value="begenner">Begenner</Option>
            <Option value="intermediate">Intermediate</Option>
            <Option value="experienced">Experienced</Option>
          </Select>
        </Col>
      </Row>
      <br />
      <Row justify="space-between" align="middle">
        <Col>
          <Title level={4} style={{ margin: "0px" }}>
            Countries
          </Title>
        </Col>
        <Col>
          <Button type="link" style={{ color: "#bbb", padding: "0px" }}>
            Clear
          </Button>
        </Col>
      </Row>
      <Row id="countries">
        <Col span={24}>
          <Select
            mode="multiple"
            placeholder="Select states"
            onChange={handleChange}
            style={{ width: "100%", marginTop: "10px" }}
          >
            {cities}
          </Select>
        </Col>
      </Row>
      <br />
      <Row justify="space-between" align="middle">
        <Col>
          <Title level={4} style={{ margin: "0px" }}>
            Languages
          </Title>
        </Col>
        <Col>
          <Button type="link" style={{ color: "#bbb", padding: "0px" }}>
            Clear
          </Button>
        </Col>
      </Row>
      <Row id="languages">
        <Col span={24}>
          <Select
            mode="multiple"
            placeholder="Select languages"
            onChange={handleChange}
            defaultValue={["English"]}
            style={{ width: "100%", marginTop: "10px" }}
          >
            {languages}
          </Select>
        </Col>
      </Row>
    </div>
  );
}
