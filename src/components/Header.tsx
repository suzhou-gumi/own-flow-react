"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button, Card } from "antd";

const Header: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <Card className="m-2 flex justify-end items-center">
        <Button onClick={() => router.push("/formDesign")}>新增表单</Button>
      </Card>
    </>
  );
};

export default Header;
