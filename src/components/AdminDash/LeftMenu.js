import React from 'react'
import { useAdminDashStyle } from './adminDashStyles'


export default function LeftMenu(props) {
  const classes = useAdminDashStyle()
return(
<div className={classes.leftSelect}>
<img src={require('./AdminDashPics/foster.png')} style={{marginLeft:"10px"}} width="180px" />
<div className={classes.icons}><img src={require("./AdminDashPics/squares.png")} style={{height:"60px"}}/><p>Dashboard</p></div>
<div className={classes.icons}><img src={require("./AdminDashPics/family.png")} style={{height:"60px"}}/><p>Fosters</p> </div>
<div className={classes.icons}><img src={require("./AdminDashPics/map.png")} style={{height:"60px"}}/><p>Map</p> </div>
<div className={classes.icons}><img src={require("./AdminDashPics/person.png")} style={{height:"60px"}}/><p>Profile</p> </div>
<div className={classes.icons}><img src={require("./AdminDashPics/settings.png")} style={{height:"60px"}}/><p>Settings</p> </div>
</div>
)
}