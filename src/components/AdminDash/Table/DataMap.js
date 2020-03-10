import neighbors from '../AdminDashPics/fosterNeighbor.png'
import families from '../AdminDashPics/fosterFamily.png'

export default function mapping(props) {
  const rows = []

  props.Data.map(people => {
    if (people.match_name === undefined) {
      rows.push({
        name: `${people.first_name}, ${people.last_name}`,
        type: neighbors,
        match: 'none',
        city: people.city,
        id: people.neighbor_id,
        userType: 'neighbor',
        application: true,
        background: people.background,
        training: people.training,
        email: people.email,
        phone: people.phone,
      })
    } else {
      rows.push({
        name: `${people.first_name}, ${people.last_name}`,
        type: 'family',
        match: 'none',
        city: people.city,
        userType: 'neighbor',
        application: true,
        background: people.background,
        training: people.training,
      })
    }
    return rows
  })

  props.Data2.map(people => {
    if (people.match_name === undefined) {
      rows.push({
        name: `${people.first_name}, ${people.last_name}`,
        type: families,
        match: 'none',
        city: people.city,
        id: people.family_id,
        userType: 'family',
        application: true,
        background: people.background,
        training: people.training,
        email: people.email,
        phone: people.phone,
      })
    } else {
      rows.push({
        name: `${people.first_name}, ${people.last_name}`,
        type: 'neighbor',
        match: 'none',
        city: people.city,
        userType: 'family',
        application: true,
        background: people.background,
        training: people.training,
      })
    }
    return rows
  })
  return rows
}
