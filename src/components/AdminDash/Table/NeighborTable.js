import React, { useEffect } from 'react'
import map from './DataMap'
import { columns } from './TableHead'
import Table from './Table'
import { Styles } from './TableStyle'

export default function EnhancedTable(props) {
  const data = map(props)

  return (
    <Styles>
      <Table columns={columns} data={data} props={props} />
    </Styles>
  )
}
