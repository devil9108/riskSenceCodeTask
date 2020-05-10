import React from "react";

import { Input } from "antd";

let Search = Input.Search;

export default function SearchBar(props) {
  console.log(props.value);
  return (
    <Search
      placeholder="input search text"
      enterButton="Search"
      size="large"
      onSearch={value => props.search()}
      loading={props.loading}
      value={props.value}
      onChange={e => {
        e.preventDefault();
        props.setValue(e.target.value);
      }}
      style={{
        borderRadius: "25px",
        boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.5)"
      }}
    />
  );
}
