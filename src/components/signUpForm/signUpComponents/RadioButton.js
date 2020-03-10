import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Root, Fill, Input } from '../styles/radioButtonStyles'

export class RadioGroup extends React.Component {
  render() {
    const {
      Component,
      name,
      selectedValue,
      onClickRadioButton,
      children,
      ...rest
    } = this.props
    return (
      <Component role='radiogroup' {...rest} name={name}>
        {React.Children.map(children, element =>
          React.cloneElement(element, {
            ...element.props,
            checked: selectedValue === element.props.labelText,
            onChange: () => onClickRadioButton(element.props.labelText),
            name,
          })
        )}
      </Component>
    )
  }
}

RadioGroup.propTypes = {
  name: PropTypes.string,
  children: PropTypes.node.isRequired,
  Component: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.object,
  ]),
}

RadioGroup.defaultProps = {
  name: '',
  selectedValue: '',
  Component: 'div',
}

// eslint-disable-next-line react/no-multi-comp
class Radio extends React.Component {
  render() {
    const { onChange, value, labelText, checked, name } = this.props

    return (
      <Root>
        <label>
          {labelText}
          <Input
            type='radio'
            onChange={onChange}
            name={name}
            value={value}
            checked={checked}
            aria-checked={checked}
          />
          <Fill />
        </label>
      </Root>
    )
  }
}

Radio.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  labelText: PropTypes.string,
}

Radio.defaultProps = {
  onChange: () => {},
  value: '',
  labelText: '',
}

const RadioButton = ({ setIsNeighbor }) => {
  const [state, setState] = useState({ selectedValue: 'Neighbor' })
  const onClickRadioButton = selectedValue => {
    setState({ selectedValue })
  }

  useEffect(() => {
    if (state.selectedValue === 'Neighbor') {
      setIsNeighbor(true)
    } else if (state.selectedValue === 'Family') {
      setIsNeighbor(false)
    }
  }, [state.selectedValue, setIsNeighbor])

  return (
    <RadioGroup
      name='setYAxis'
      onClickRadioButton={onClickRadioButton}
      selectedValue={state.selectedValue}
      style={{
        display: 'flex',
        width: 150,
        justifyContent: 'space-between',
      }}
    >
      <Radio labelText='Neighbor' />
      <Radio labelText='Family' />
    </RadioGroup>
  )
}

export default RadioButton
