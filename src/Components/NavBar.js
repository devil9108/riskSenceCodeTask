import React from "react";
import { Menu, Avatar } from "antd";
import { UserOutlined, DownOutlined } from "@ant-design/icons";

export default function NavBar() {
  return (
    <Menu mode="horizontal" theme="light">
      <Menu.Item key="howItWorks">HOW IT WORKS</Menu.Item>
      <Menu.SubMenu
        key="browse"
        title={
          <span>
            <span>BROWSE </span>
            <DownOutlined />
          </span>
        }
      >
        <Menu.Item key="newJob">NEW JOB</Menu.Item>
        <Menu.Item key="fresher">FRESHER</Menu.Item>
        <Menu.Item key="experienced">EXPERIENCED</Menu.Item>
      </Menu.SubMenu>
      <Menu.Item key="search">SEARCH</Menu.Item>
      <Menu.SubMenu
        key="userDetails"
        title={
          <span>
            <Avatar icon={<UserOutlined />} />
            <span> My Account </span>
            <DownOutlined />
          </span>
        }
      >
        <Menu.Item key="dashBoard">My Dashboard</Menu.Item>
        <Menu.Item key="appledJobs">Applied Jobs</Menu.Item>
        <Menu.Item key="logOut">Logout</Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );
}
