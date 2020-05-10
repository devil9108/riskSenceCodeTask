import React from "react";
import { Row, Col } from "antd";
import Axios from "axios";

import SearchBar from "./SearchBar";
import Lsider from "./LeftSider/Lsider";
import Rsider from "./RightSider/Rsider";
import Result from "./Results/Result";

export default function Main(props) {
  const [jobType, setJobType] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [location, setLocation] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [query, setQuery] = React.useState("");
  let data = props.data;

  const handleSearch = value => {
    setLoading(true);
    let headers = {
      location: location,
      job_type: jobType,
      description: value,
      query: query,
      title: title
    };
    console.log(headers);
    Axios.get("http://localhost:9090/api/jobdescriptions/search", {
      params: { ...headers }
    })
      .then(res => {
        console.log(res);
        props.setData(res.data);
      })
      .then(() => setLoading(false))
      .catch(err => {
        setLoading(false);
        data = props.data;
      });
  };

  const resetData = () => {
    setQuery("");
    Axios.get("http://localhost:9090/api/jobdescriptions/")
      .then(res => props.setData([...res.data]))
      .catch(err => console.log(err));
  };

  return (
    <>
      <Row>
        <Col span={24}>
          <SearchBar
            search={handleSearch}
            loading={loading}
            value={query}
            setValue={setQuery}
          />
        </Col>
      </Row>
      <Row justify="space-between" style={{ marginTop: "40px" }}>
        <Col span={5} className="lSider">
          <Lsider
            jobType={jobType}
            location={location}
            title={title}
            setTitle={setTitle}
            setLocation={setLocation}
            setJobType={setJobType}
            resetData={resetData}
          />
        </Col>
        <Col span={13}>
          <Result data={data} />
        </Col>
        <Col span={5}>
          <Rsider />
        </Col>
      </Row>
    </>
  );
}
