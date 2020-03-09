import React from 'react'
import { useTable, useSortBy } from "react-table"
import { TableContain } from '../adminDashStyles'


export default function Table( { columns, data, props }) {
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow
    } = useTable(
      {
        columns,
        data
      },
      useSortBy
    );

    const firstPageRows = rows.slice(0, 15)
    
    return (
      <TableContain>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " 🔽"
                          : " 🔼"
                        : ""}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {firstPageRows.map(
              row => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return (
                      <td onClick={() => props.props.history.push(`/${cell.row.original.userType}/${cell.row.original.id}`)}{...cell.getCellProps()}>{cell.render('Cell')}</td>
                    )
                  })}
                </tr>
                )
              }
            )}
          </tbody>
        </table>
        <br />
      </TableContain>
    );
  }