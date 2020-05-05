import React, { useState, useEffect } from "react";

export default function FamMark(props) {
  const [open, setOpen] = useState(false);
  function clicked() {
    setOpen(true);
    if (open === false) {
      props.setSelected(props.location);
    }
  }

  useEffect(() => {
    if (props.location.id === props.selected.id) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [props.selected]);

  return (
    <>
      {!open ? (
        <div
          onClick={() => {
            clicked();
          }}
          style={{
            width: `${props.zoom * 1.5}px`,
            height: `${props.zoom * 1.5}px`,
            borderRadius: "50%",
            backgroundColor: "#375762",
            boxShadow: "0px 4px 5px grey"
          }}
        />
      ) : (
        <div
          name="marker"
          onClick={() => {
            clicked();
          }}
          style={{
            backgroundColor: "#375762",
            borderRadius: "50%",
            width: `${props.zoom * 1.5}px`,
            height: `${props.zoom * 1.5}px`,
            transform: "scale(2, 2)",
            boxShadow: "0px 4px 5px grey"
          }}
        ></div>
      )}
    </>
  );
}
