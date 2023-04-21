import React from "react";
import { Layout } from "antd";
import DataGrid from "./datagrid";
import { Routes } from "react-router-dom";
import CreateAssessment from "./CreateAssessment";
import { Route } from "react-router";
import TestLibrary from "./TestLibrary";
const ContentPage = () => {
  const { Content } = Layout;
  return (
    <>
      <Content className=" h-full bg-[background: #EBECF1] text-black h-10 ">
        <Routes>
          <Route path="/Assessment" element={<CreateAssessment />} />
          <Route path="/Datagrid" element={<DataGrid />} />
          <Route path="/TestLibrary" element={<TestLibrary/>}/>
        </Routes>
      </Content>
    </>
  );
};

export default ContentPage;
