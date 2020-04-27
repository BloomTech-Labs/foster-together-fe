import React, { useState, useEffect } from 'react'
import {Egg} from './EggStyle'
import { useHistory } from "react-router-dom";


export default function FamMark(props) {
    const history = useHistory();

function handleClick(){
    if(props.eggStep === 4){
        history.push('/lambda')
    }
    props.setSelected(props.location)
    props.setEgg(props.eggStep + 1)
}

  return (
      <Egg onClick={() => handleClick()}/>
  )
}
