import React, { useState, useEffect } from 'react'
import { InfoDiv,
UserName, 
Icon,
IconContain,
SmallIcon } from './MapStyles'
import { useHistory } from 'react-router-dom'

export default function Filter(props) {
  const history = useHistory()
  const [selected, setSelected] = useState('v')
  useEffect(() => {
    setSelected(props.selected)
  }, [props])
  return (
    <InfoDiv>
      <UserName>{selected.name} {selected.name !== undefined ? <SmallIcon onClick={() => history.push(`/${selected.type}/${selected.id}`)} src={require('./mapicons/redirect.png')}/> : null} </UserName>
      <IconContain><h3>{selected.type}</h3></IconContain>
      <IconContain><Icon src={require('./mapicons/home-building.png')} /><h1>{selected.address}</h1></IconContain>
      <IconContain><Icon src={require('./mapicons/email.png')} /><h1>{selected.email}</h1></IconContain>
      <IconContain><Icon src={require('./mapicons/phone.png')} /><h1>{selected.phone}</h1></IconContain>
    </InfoDiv>
  )
}
