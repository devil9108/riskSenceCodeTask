import React from "react";

import { Input } from "antd";

let Search = Input.Search;

export default function SearchBar() {
  let value = false;
  return (
    <Search
      placeholder="input search text"
      enterButton="Search"
      size="large"
      onSearch={value => console.log(value)}
      loading={value}
      style={{
        borderRadius: "25px",
        boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.5)"
      }}
    />
  );
}
