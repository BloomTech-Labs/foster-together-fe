import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { lighten, makeStyles } from '@material-ui/core/styles';
import {Table ,TableBody, TableCell, TableContainer, TableHead, TableRow , TableSortLabel, Typography, Paper } from '@material-ui/core';
import { tableStyle} from './TableStyles'

export default function EnhancedTable(props) {
    const rows = [
    
    ];
    props.Data.map(people => {
        if(people.match_name == undefined){
        rows.push({"name": people.last_name, "registered": people.memberSince, "contacted": people.contact, match: " None" ,"complete": "True", "id": people.family_id})
        console.log(rows)
        }
        else{
        rows.push({"name": people.last_name, "registered": people.memberSince, "contacted": people.contact, match: people.match_name ,"complete": "True", "id": people.family_id})
        }
    })

    props.Data2.map(people => {
      if(people.match_name == undefined){
      rows.push({"name": people.last_name, "registered": people.memberSince, "contacted": people.contact, match: " None" ,"complete": "True", "id": people.family_id})
      console.log(rows)
      }
      else{
      rows.push({"name": people.last_name, "registered": people.memberSince, "contacted": people.contact, match: people.match_name ,"complete": "True", "id": people.family_id})
      }
  })

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

const headCells = [
  { id: 'name', numeric: false, disablePadding: true, label: 'Family Name' },
  { id: 'registered', numeric: false, disablePadding: false, label: 'Date Registered' },
  { id: 'contacted', numeric: false, disablePadding: false, label: 'Last Contacted' },
  { id: 'match', numeric: false, disablePadding: true, label: 'Matched Family' },
  { id: 'complete', boolean: true , disablePadding: false, label: 'Signup Complete' },
];

function EnhancedTableHead(props) {
  const { classes, order, orderBy, onRequestSort } = props;
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
        </TableCell>
        {headCells.map(headCell => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};


const EnhancedTableToolbar = () => {
  const classes = tableStyle();

  return (
        <Typography style={{textAlign: "center", padding: "10px"}} className={classes.title} variant="h6" id="tableTitle">
         {props.userType}
        </Typography>
  );
};

  const classes = tableStyle();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={() => props.props.history.push(`/volunteer/${row.id}`)}
                      onHover={event => console.log(row.id)}
                      role="checkbox"
                      tabIndex={-1}
                      key={row.name}
                    >
                      <TableCell padding="checkbox">
                      </TableCell>
                      <TableCell component="th" id={labelId} scope="row" padding="none">
                        {row.name}
                      </TableCell>
                      <TableCell align="left">{row.registered}</TableCell>
                      <TableCell align="left">{row.contacted}</TableCell>
                      <TableCell align="left">{row.match}</TableCell>
                      <TableCell align="left">{row.complete}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: "auto" }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}