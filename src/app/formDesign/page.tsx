"use client";

import React from "react";
import { Layout } from "antd";

const { Sider, Content } = Layout;

export default function Page() {
  return (
    <>
      <Layout>
        <Sider />
        <Content />
      </Layout>
    </>
  );
}
