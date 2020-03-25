import React, { useState, useEffect } from 'react'

export default function FamMark(props) {
  const [open, setOpen] = useState(false)
  function clicked() {
    setOpen(true)
    if (open === false) {
      props.setSelected(props.location)
    }
  }

  useEffect(() => {
    if (props.location.id === props.selected.id) {
      setOpen(true)
    } else {
      setOpen(false)
    }
  }, [props.selected])

  return (
    <>
      {!open ? (
        <div
          onClick={() => {
            clicked()
          }}
          style={{
            width: `${props.zoom * 1.5}px`,
            height: `${props.zoom * 1.5}px`,
            borderRadius: '50%',
            backgroundColor: '#FF8D86',
          }}
        />
      ) : (
        <div
          onClick={() => {
            clicked()
          }}
          style={{
            position: 'relative',
            top: '-15px',
            left: '-12px',
            width: `${props.zoom * 4}px`,
            height: `${props.zoom * 4}px`,
            borderRadius: '50%',
            backgroundColor: '#FF8D86',
          }}
        ></div>
      )}
    </>
  )
}
