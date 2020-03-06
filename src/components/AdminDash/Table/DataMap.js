export default function mapping(props) {
  const rows = []

  props.Data.map(people => {
    if (people.match_name == undefined) {
      rows.push({
        name: `${people.first_name}, ${people.last_name}`,
        type:
          'https://i.pinimg.com/564x/9d/47/93/9d4793cdf76566cee5cb0acabd9aee67.jpg',
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
  })

  props.Data2.map(people => {
    if (people.match_name == undefined) {
      rows.push({
        name: `${people.first_name}, ${people.last_name}`,
        type:
          'https://i.pinimg.com/564x/5f/99/f2/5f99f21f4612118074d38d6a619a0a78.jpg',
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
  })

  return rows
}
