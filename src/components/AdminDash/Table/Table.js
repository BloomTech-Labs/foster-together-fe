import React from 'react'
import { useTable, useSortBy } from 'react-table'
import { TableContain } from '../adminDashStyles'
import { TableHtml, TableRow, TableHeader, TableData } from './TableStyle'

export default function Table({ columns, data, props }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy
  )

  const firstPageRows = rows.slice(0, 15)

  return (
    <TableContain>
      <TableHtml {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <TableHeader
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  {column.render('Header')}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                </TableHeader>
              ))}
            </TableRow>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {firstPageRows.map(row => {
            prepareRow(row)
            return (
              <TableRow {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <TableData onClick={() => props.props.history.push(cell.row.original.family_id ? `/${cell.row.original.userType}/${cell.row.original.family_id}` : `/${cell.row.original.userType}/${cell.row.original.neighbor_id}` )}{...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </TableData>
                  )
                })}
              </TableRow>
            )
          })}
        </tbody>
      </TableHtml>
      <br />
    </TableContain>
  )
}
