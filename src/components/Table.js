import * as React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import TableHead from "@mui/material/TableHead";
import Typography from "@mui/material/Typography";
import { Avatar } from "antd";

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function createData(name, date, performance, usage, time) {
  return { name, date, performance, usage, time };
}
const columns = [
  { id: "NAME", label: "NAME", minWidth: 150 },
  { id: "DATE", label: "DATE", minWidth: 100 },
  { id: "PERFORMANCE", label: "PERFORMANCE", minWidth: 125 },
  { id: "USAGE", label: "USAGE", minWidth: 62 },
  { id: "TIME", label: "TIME", minWidth: 62 },
];

const rows = [
  createData("Front-End", "12/3/2023", 4.5, "Moderate", 40),
  createData("Back-end", "12/3/2023", 25.0, "Low", 30),
  createData("Testing", "12/3/2023", 16.0, "Low", 45),
  createData("Content writer", "12/3/2023", 6.0, "High", 20),
  createData("Front-End", "12/3/2023", 16.0, "Moderate", 50),
  createData("Front-End", "12/3/2023", 3.2, "High", 60),
  createData("Front-End", "12/3/2023", 9.0, "High", 50),
  createData("Content writer", "12/3/2023", 0.0, "Moderate", 40),
  createData("Content writer", "12/3/2023", 26.0, "Moderate", 30),
  createData("Content writer", "12/3/2023", 0.2, "High", 20),
  createData("Back-end", "12/3/2023", 0, "High", 40),
  createData("Back-end", "12/3/2023", 19.0, "High", 60),
  createData("Back-end", "12/3/2023", 18.0, "Low", 50),
]; /* .sort((a, b) => (a.calories < b.calories ? -1 : 1)); */

export default function DataTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper} className="h-full">
      <Table
        className="p-5  rounded-rounded-full"
        sx={{ width: 300, height: 150 }}
        aria-label="custom pagination table"
        stickyHeader
      >
        <TableHead>
          <TableRow className="text-center text-gray-300">
            {columns.map((column) => (
              <TableCell
                className=" text-center text-gray-300 bg-red-900"
                key={column.id}
                align={column.align}
                style={{ minWidth: column.minWidth }}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow key={row.name}>
              <TableCell
                align="center"
                component="th"
                scope="row"
                style={{ width: 150 }}
              >
                <div className=" flex">
                  <div>
                    <Avatar style={{ borderRadius: "8px" }} />
                  </div>
                  <div className=" pl-1">
                    <Typography>
                      <Typography sx={{ fontSize: "10px" }}>
                        {row.name}
                      </Typography>
                      <Typography
                        align="left"
                        sx={{ fontSize: "10px", color: "grey" }}
                      >
                        {row.usage}
                      </Typography>
                    </Typography>
                  </div>
                </div>
              </TableCell>
              <TableCell style={{ width: 100 }} align="center">
                {row.date}
              </TableCell>
              <TableCell style={{ width: 125 }} align="center">
                {row.performance}
              </TableCell>
              <TableCell style={{ width: 62 }} align="center">
                {row.usage}
              </TableCell>
              <TableCell style={{ width: 62 }} align="center">
                {row.time}
              </TableCell>
            </TableRow>
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ width: 62, height: 53 * emptyRows }}>
              <TableCell style={{ width: 500 }} colSpan={10} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[4, 10, 25, { label: "All", value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  "aria-label": "rows per page",
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
