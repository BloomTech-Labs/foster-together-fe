import React, { useEffect, useState } from 'react'
import axios from 'axios'


export default function UserProfile (props) {
    const [user, setUser] = useState({})
    const id = props.match.params.id
    useEffect(() => {
        axios.get(`http://fostertogether-mmaws.us-west-2.elasticbeanstalk.com/api/families/${id}`)
        .then(res => {
            setUser(res.data)
        })
    }, )


    return(
        <>
        <h1> Coming Soon! </h1>
        <h1> {user.first_name} {user.last_name}'s Profile</h1>
        </>
    )
}