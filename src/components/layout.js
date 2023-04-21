import React, { useState } from "react";
import { Link } from "react-router-dom";
import EditNoteIcon from '@mui/icons-material/EditNote';

import {
  LeftCircleOutlined,
  RightCircleOutlined,
  SettingFilled ,
  HomeFilled,
  PlusCircleOutlined,
} from "@ant-design/icons";

import { Layout, Menu } from "antd";
import ContentPage from "./Content";
import logo from "./logo.png";
import logo2 from "./butterfly.png"
import Appbarr from "./Appbarr";


const { Header, Sider } = Layout;

const LayoutPage = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [logoState, setlogoState]= useState(false);

  const handleClick=()=>{
    setCollapsed(!collapsed);
    setlogoState(!logoState);

  }

  return (
    <Layout className="h-screen">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className=" h-screen flex flex-col  bg-[#F7F7F7] border-r-2 shadow-sm border-gray-300">
          <div
            className=" border-b-2 "
            style={{
              height: "64px",
             
            }}
          >   
           { logoState&& <img src={logo2} alt="Ideassion" title="Ideassion" 
             style={{width:'25px', marginLeft: '32px',marginTop: '12px',}}/>}

            { !logoState && <img src={logo} alt="Ideassion" title="Ideassion" 
             style={{width:'100px', marginLeft: '50px',marginTop: '10px',  objectFit:'contain', overflow:'hidden'}}/>}
            
          </div>
          <Menu
            className=" bg-[#F7F7F7] mt-16"
            items={[
              {
                key: "1",
                icon: <HomeFilled  style={{fontSize: '20px', color:'gray', marginRight:'4px'}}/>,
                label: <Link to="/" className=" text-[10px] font-semibold">Home</Link>,
              },
              {
                key: "2",
                icon:  <EditNoteIcon style={{fontSize: '20px', color:'gray',marginRight:'4px'}}/> ,
                label: <Link to='/TestLibrary' className=" text-[10px] font-semibold">Assessments</Link>
              },
              {
                key: "3",
                icon: <PlusCircleOutlined style={{fontSize: '20px', color:'gray',marginRight:'4px'}}/>,
                label: <Link to="/Assessment" className=" text-[10px] font-semibold"> New Assessment</Link>
              },
              {
                key: "4",
                icon: <SettingFilled style={{fontSize: '20px', color:'gray',marginRight:'4px'}}  />,
                label:  <Link to="/" className=" text-[10px] font-semibold"> Settings</Link>
              },
            ]}
          />
        </div>
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{ padding: 0, background: "#F7F7F7" }}
          className="  text-black border-b-2 shadow-sm border-gray-300"
        >
         {/*  <PrimarySearchAppBar/> */}
         <Appbarr/>
        </Header>
        <div>
          {React.createElement(
            collapsed ? LeftCircleOutlined : RightCircleOutlined,
            {
              className: "trigger",
              style: {
                color: "black",
                position: "relative",
                marginLeft: "-10px",
            
              },
              onClick: () => handleClick(),
            }
          )}
          <div
            style={{
              position: "relative",
              marginTop: "-15px",
              marginLeft: "10px",
              height: '90vh',
              
            }}
          >
            <ContentPage/> 
          </div>
        </div>
      </Layout>
    </Layout>
  );
};

export default LayoutPage;
