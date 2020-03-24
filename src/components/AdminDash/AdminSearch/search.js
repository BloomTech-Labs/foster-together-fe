import React from 'react'
import { SearchDiv } from './searchStyles'
import { useDispatch } from 'react-redux'
import { setMembersArray } from '../../../redux/slices/memSlice'

const SearchBar = ({ members }) => {
  const dispatch = useDispatch()
  function alphabetical(membersArray) {
    const newArray = [...membersArray]
    const newArray2 = newArray.sort(function(a, b) {
      return a.last_name.localeCompare(b.last_name)
    })
    dispatch(setMembersArray(newArray2))
  }
  return (
    <SearchDiv>
      <h1>People</h1>
    </SearchDiv>
  )
}

export default SearchBar
