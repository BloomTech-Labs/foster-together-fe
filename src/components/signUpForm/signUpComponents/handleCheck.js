export const handleCheck = (checked, setChecked, checkbox) => {
  if (!checked.family && !checked.neighbor && checkbox === 'family') {
    setChecked({
      ...checked,
      family: !checked.family,
      neighbor: checked.neighbor,
    })
  } else if (!checked.family && !checked.neighbor && checkbox === 'neighbor') {
    setChecked({
      ...checked,
      family: checked.family,
      neighbor: !checked.neighbor,
    })
  } else {
    setChecked({
      ...checked,
      family: !checked.family,
      neighbor: !checked.neighbor,
    })
  }
}
