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

import { skills, countryList, LANGUAGES, jobTitles } from "../../RawData";

let { Title } = Typography;
const { Option } = Select;

export default function Lsider(props) {
  console.log(props);

  let [language, setLanguage] = React.useState("English");
  let [expLevel, setExpLevel] = React.useState("");
  let [defaultRange, setdefaultRange] = React.useState([1800, 2700]);
  let [selectedSkills, setSelectedSkills] = React.useState([
    "oracle",
    "js",
    "webpack",
    "react"
  ]);
  let marks = { 100: "0100", 10000: "10000+" };

  let skillsOption = skills.map(skill => <Option key={skill}>{skill}</Option>);
  let cities = countryList.map(country => (
    <Option key={country}>{country}</Option>
  ));
  let languages = LANGUAGES.map(language => (
    <Option key={language}>{language}</Option>
  ));

  const handleChange = value => console.log(value);

  const handleLanguageChange = value => setLanguage(value);

  const handleexpLevel = value => setExpLevel(value);

  const handleClear = callback => callback("");

  const handlerangeClear = () => setdefaultRange([1800, 2700]);

  const clearAllFilters = () => {
    setExpLevel("");
    setdefaultRange([1800, 2700]);
    setLanguage("English");
    setSelectedSkills(["oracle", "js", "webpack", "react"]);
    props.setJobType("");
    props.setLocation("");
    props.setTitle("");
    props.resetData();
  };

  return (
    <div style={{ width: "90%" }}>
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
            onClick={clearAllFilters}
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
          <Button
            type="link"
            style={{ color: "#bbb", padding: "0px" }}
            onClick={() =>
              setSelectedSkills(["oracle", "js", "webpack", "react"])
            }
          >
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
            value={selectedSkills}
            onChange={value => setSelectedSkills(value)}
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
            Availability
          </Title>
        </Col>
        <Col>
          <Button
            type="link"
            style={{ color: "#bbb", padding: "0px" }}
            onClick={() => props.setJobType("")}
          >
            Clear
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          {/* <Checkbox className="checkBox" onChange={props.setJobType('')}>
            Hourly
          </Checkbox>
          <br />
          <Checkbox className="checkBox" onChange={props.setJobType('Part time')}>
            Part-time(20hrs/wk)
          </Checkbox>
          <br />
          <Checkbox className="checkBox" onChange={props.setJobType('Full time')}>
            Full-time(40hrs/wk)
          </Checkbox> */}
          <Checkbox.Group
            value={[props.jobType]}
            onChange={value => props.setJobType(...value)}
          >
            <Row>
              <Checkbox value="Full time">Full Time</Checkbox>
            </Row>
            <Row>
              <Checkbox value="Part time">Part Time</Checkbox>
            </Row>
          </Checkbox.Group>
        </Col>
      </Row>
      <br />
      <Row justify="space-between" align="middle">
        <Col>
          <Title level={4} style={{ margin: "0px" }}>
            Select Job Type
          </Title>
        </Col>
        <Col>
          <Button
            type="link"
            style={{ color: "#bbb", padding: "0px" }}
            onClick={() => props.setTitle("")}
          >
            Clear
          </Button>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Select
            placeholder="Select A Job Type"
            style={{ width: "100%", marginTop: "10px" }}
            value={props.title || "Select A Job Type"}
            onChange={value => props.setTitle(value)}
          >
            {jobTitles.map((title, index) => (
              <Option value={title} key={index}>
                {title}
              </Option>
            ))}
          </Select>
        </Col>
      </Row>
      <br />
      <Row justify="space-between" align="middle">
        <Col>
          <Title level={4} style={{ margin: "0px" }}>
            Pay Rate / hr (&#x20b9;)
          </Title>
        </Col>
        <Col>
          <Button
            type="link"
            style={{ color: "#bbb", padding: "0px" }}
            onClick={handlerangeClear}
          >
            Clear
          </Button>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Input
            value={defaultRange[0]}
            maxLength={5}
            style={{ width: "60px", marginTop: "20px" }}
            disabled
          />{" "}
          -{" "}
          <Input
            value={defaultRange[1]}
            maxLength={5}
            style={{ width: "60px" }}
            disabled
          />
          <br />
          <Slider
            range
            min={100}
            max={10000}
            marks={marks}
            value={defaultRange}
            step={100}
            style={{ width: "93%" }}
            onChange={value => setdefaultRange(value)}
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
          <Button
            type="link"
            style={{ color: "#bbb", padding: "0px" }}
            onClick={() => handleClear(setExpLevel)}
          >
            Clear
          </Button>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Select
            placeholder="Select your experience level"
            style={{ width: "100%", marginTop: "10px" }}
            onChange={handleexpLevel}
            value={expLevel || "Select your experience level"}
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
          <Button
            type="link"
            style={{ color: "#bbb", padding: "0px" }}
            onClick={() => props.setLocation("")}
          >
            Clear
          </Button>
        </Col>
      </Row>
      <Row id="countries">
        <Col span={24}>
          <Select
            placeholder="Select states"
            value={props.location}
            onChange={value => props.setLocation(value)}
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
          <Button
            type="link"
            style={{ color: "#bbb", padding: "0px" }}
            onClick={() => handleClear(setLanguage)}
          >
            Clear
          </Button>
        </Col>
      </Row>
      <Row id="languages">
        <Col span={24}>
          <Select
            mode="multiple"
            placeholder="Select languages"
            onChange={handleLanguageChange}
            defaultValue={"English"}
            value={[language] || "English"}
            style={{ width: "100%", marginTop: "10px" }}
          >
            {languages}
          </Select>
        </Col>
      </Row>
    </div>
  );
}
