import neighbors from '../AdminDashPics/fosterNeighbor.png'
import families from '../AdminDashPics/fosterFamily.png'

export default function mapping(props) {
  const rows = []
  function TableRowData(DataSet, Type, Picture, id) {
    DataSet.map(data => {
        rows.push({
          name: `${data.first_name}, ${data.last_name}`,
          type: Picture,
          match: 'none',
          city: data.city,
          userType: Type,
          application: true,
          background: data.background,
          training: data.training,
          email: data.email,
          phone: data.phone,
          neighbor_id: data.neighbor_id,
          family_id: data.family_id
        })
    })
  }
  TableRowData(props.Neighbors, 'neighbor', neighbors)
  TableRowData(props.Families, 'family', families)
  return rows
}