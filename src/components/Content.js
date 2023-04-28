import React from "react";
import { Layout } from "antd";
import { Routes } from "react-router-dom";
import CreateAssessment from "./CreateAssessment";
import { Route } from "react-router";
import TestLibrary from "./TestLibrary";
import DataTable from "./Table";

import HomePage from "./home";
const ContentPage = () => {
  const { Content } = Layout;
  return (
    <>
      <Content className=" h-full bg-[background: #EBECF1] text-black h-10 ">
        <Routes>
          <Route path="/Assessment" element={<CreateAssessment />} />
          <Route path="/TestLibrary" element={<DataTable/>}/>
          <Route path="/" element={<HomePage/> }/>
        </Routes>
      </Content>
    </>
  );
};

export default ContentPage;
