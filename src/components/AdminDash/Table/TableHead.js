import React from 'react'
import {Table ,TableBody, TableCell, TableContainer, TableHead, TableRow , TableSortLabel, Typography, Paper } from '@material-ui/core';

export default function EnhancedTableHead(props) {
    const { classes, order, orderBy, onRequestSort } = props;
    const createSortHandler = property => event => {
      onRequestSort(event, property);
    };
    const headCells = [
        { id: 'name', numeric: false, disablePadding: true, label: 'Full Name' },
        { id: 'type', numeric: false, disablePadding: false, label: 'Member Type' },
        { id: 'contacted', numeric: false, disablePadding: false, label: 'Match' },
        { id: 'match', numeric: false, disablePadding: true, label: 'City' },
        { id: 'complete', boolean: true , disablePadding: false, label: 'Phone' },
      ];
      
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