import React, { useState } from "react";

import { Avatar, Button, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ReplayIcon from "@mui/icons-material/Replay";
import StopCircleIcon from "@mui/icons-material/StopCircle";

import TablePagination from "@mui/material/TablePagination";
import { Margin } from "@mui/icons-material";

const tableData = [
  {
    name: "salman",
    empId: "1234",
    date: "12/3/2023",
    testName: "UI/UX",
    testLevel: "Low",
    progress: "79%",
    status: "Moderate",
    score: 47,
  },
  {
    name: "sarukh",
    empId: "1234",
    date: "12/3/2023",
    testName: "FrontEnd",
    testLevel: "Low",
    progress: "60%",
    status: "Low",
    score: 47,
  },
  {
    name: "amir",
    empId: "1234",
    date: "12/3/2023",
    testName: "BackEnd",
    testLevel: "medium",
    progress: "50%",
    status: "High",
    score: 47,
  },
  {
    name: "vijay",
    empId: "1234",
    date: "12/3/2023",
    testName: "Testing",
    testLevel: "High",
    progress: "40%",
    status: "Low",
    score: 47,
  },
  {
    name: "ajith",
    empId: "1234",
    date: "12/3/2023",
    testName: "Testing",
    testLevel: "easy",
    progress: "20%",
    status: "High",
    score: 47,
  },
  {
    name: "john",
    empId: "1234",
    date: "12/3/2023",
    testName: "Testing",
    testLevel: "easy",
    progress: "79%",
    status: "High",
    score: 47,
  },
  {
    name: "john",
    empId: "1234",
    date: "12/3/2023",
    testName: "Testing",
    testLevel: "easy",
    progress: "79%",
    status: "Moderate",
    score: 47,
  },
  {
    name: "john",
    empId: "1234",
    date: "12/3/2023",
    testName: "Testing",
    testLevel: "easy",
    progress: "79%",
    status: "Moderate",
    score: 47,
  },
  {
    name: "john",
    empId: "1234",
    date: "12/3/2023",
    testName: "Testing",
    testLevel: "easy",
    progress: "79%",
    status: "Low",
    score: 47,
  },
  {
    name: "john",
    empId: "1234",
    date: "12/3/2023",
    testName: "Testing",
    testLevel: "easy",
    progress: "79%",
    status: "Low",
    score: 47,
  },
  {
    name: "john",
    empId: "1234",
    date: "12/3/2023",
    testName: "Testing",
    testLevel: "easy",
    progress: "79%",
    status: "Moderate",
    score: 47,
  },
  {
    name: "john",
    empId: "1234",
    date: "12/3/2023",
    testName: "Testing",
    testLevel: "easy",
    progress: "79%",
    status: "High",
    score: 47,
  },
  {
    name: "john",
    empId: "1234",
    date: "12/3/2023",
    testName: "Testing",
    testLevel: "easy",
    progress: "79%",
    status: "High",
    score: 47,
  },
  {
    name: "john",
    empId: "1234",
    date: "12/3/2023",
    testName: "Testing",
    testLevel: "easy",
    progress: "79%",
    status: "Invited",
    score: 47,
  },
  {
    name: "john",
    empId: "1234",
    date: "12/3/2023",
    testName: "Testing",
    testLevel: "easy",
    progress: "79%",
    status: "Moderate",
    score: 47,
  },
  {
    name: "john",
    empId: "1234",
    date: "12/3/2023",
    testName: "Testing",
    testLevel: "easy",
    progress: "79%",
    status: "Moderate",
    score: 47,
  },
  {
    name: "john",
    empId: "1234",
    date: "12/3/2023",
    testName: "Testing",
    testLevel: "easy",
    progress: "79%",
    status: "Invited",
    score: 47,
  },
  {
    name: "john",
    empId: "1234",
    date: "12/3/2023",
    testName: "Testing",
    testLevel: "easy",
    progress: "79%",
    status: "Invited",
    score: 47,
  },
  {
    name: "john",
    empId: "1234",
    date: "12/3/2023",
    testName: "Testing",
    testLevel: "easy",
    progress: "79%",
    status: "Invited",
    score: 47,
  },
  {
    name: "john",
    empId: "1234",
    date: "12/3/2023",
    testName: "Testing",
    testLevel: "easy",
    progress: "79%",
    status: "Invited",
    score: 47,
  },
  {
    name: "john",
    empId: "1234",
    date: "12/3/2023",
    testName: "Testing",
    testLevel: "easy",
    progress: "79%",
    status: "Invited",
    score: 47,
  },
  {
    name: "john",
    empId: "1234",
    date: "12/3/2023",
    testName: "Testing",
    testLevel: "easy",
    progress: "79%",
    status: "Invited",
    score: 47,
  },
];

const HomeTable = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  
 

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, tableData.length - page * rowsPerPage);

  return (
    <div className="table">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr className=" text-sm">
            <th scope="col" class="px-6 py-3" >NAMES</th>
            <th scope="col" class="px-6 py-3" >DATES</th>
            <th scope="col" class="px-6 py-3">PERFORMANCE</th>
            <th scope="col" class="px-6 py-3">USAGE</th>
            <th scope="col" class="px-6 py-3">TIME</th>
          </tr>
        </thead>
        <tbody>
          {(rowsPerPage > 0 
            ? tableData.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              )
            : tableData
          ).map((el, index) => {
              let statusTextColor =
                el.status === "Moderate"
                  ? "rgba(94, 205, 247, 1)"
                  : el.status === "Low"
                  ? "rgba(255, 74, 74, 1)"
                  : el.status === "High"
                  ? "rgba(45, 212, 42, 1)"
                  : null;
              return (
                <tr key={index}>
                  <td style={{ display: "flex", gap: "10px" }}>
                    <div>
                      <Avatar style={{ borderRadius: "8px" }} />
                    </div>
                    <div>
                      <div>{el.testName}</div>
                      <div style={{ color: "gray" }}>{el.testLevel}</div>
                    </div>
                  </td>
                  <td>{el.date}</td>
                  <td>
                    <div>
                      <div>{el.progress}</div>
                      
                    </div>
                  </td>

                  {/* to be modifiedl */}
                

                  <td>
                    <div
                      style={{
                        marginTop: "1rem",
                        padding: "4px",
                        width: "80px",
                        fontSize: "smaller",
                        color: statusTextColor,
                        borderRadius: "4px",
                        border: "none",
                        textAlign: "center",
                      }}
                    >
                      {el.status}
                    </div>
                  </td>
                  <td>{el.score}</td>
               
                </tr>
              );
            })}
          {emptyRows > 0 && (
            <tr style={{ height: 53 * emptyRows }}>
              <td colSpan={8} />
            </tr>
          )}
       
        </tbody>
      </table>
      <TablePagination
        rowsPerPageOptions={[4]}
        component="div"
        count={tableData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default HomeTable;
