import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {},
  input: {
    width: "100px"
  },
  h2: {
    margin: "15px"
  }
});

export default function UserTable({ onUpdateRating, rows }) {
  const classes = useStyles();
  const handleFocus = event => {
    return event.target.select();
  };

  return (
    <>
      <h2 className={classes.h2}>
        Rate the quality of your inquiry on each topic from 0 (not started) to
        100 (complete)
      </h2>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell>Inquiry Topic</TableCell>
              <TableCell align="right">Your Current Rating</TableCell>
              <TableCell align="right">Reference Rating 1</TableCell>
              <TableCell align="right">Reference Rating 2</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">
                  <input
                    className={classes.input}
                    type="number"
                    value={row.currentRatings}
                    name={row.name}
                    data-col={"currentRatings"}
                    onChange={e => {
                      console.log("current value", e.target.value);
                      //if (e.target.value === "0") e.target.select();
                      //else
                      onUpdateRating(e, true);
                    }}
                    onFocus={handleFocus}
                  />
                </TableCell>
                <TableCell align="right">
                  <input
                    className={classes.input}
                    type="number"
                    value={row.ratings1}
                    name={row.name}
                    data-col={"ratings1"}
                    onChange={e => onUpdateRating(e)}
                    onFocus={handleFocus}
                  />
                </TableCell>
                <TableCell align="right">
                  <input
                    className={classes.input}
                    type="number"
                    value={row.ratings2}
                    name={row.name}
                    data-col={"ratings2"}
                    onChange={e => onUpdateRating(e)}
                    onFocus={handleFocus}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
