import React from 'react'
import map from './DataMap'
import { columns } from './TableHead'
import Table from './Table'
import { Styles } from './TableStyle'
import TableHeader from './TableTitle'
import { TableCtn } from './TitleStyle'

export default function EnhancedTable(props) {
  const data = map(props)

  return (
    <TableCtn>
      <TableHeader />
      <Styles>
        <Table columns={columns} data={data} props={props} />
      </Styles>
    </TableCtn>
  )
}
